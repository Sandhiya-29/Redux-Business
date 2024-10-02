import React, {useState,useEffect } from 'react';
import './LoginSignup.css';
import vision from './images.png';
import { FaFacebookF } from "react-icons/fa6";
  import { FcGoogle } from "react-icons/fc";
  // import {useGoogleLogin} from "@react-oauth/google";
  import {useNavigate} from "react-router-dom";
   import axios from 'axios';


function LoginSignup() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    
  });
     const [register, setRegister] = useState({
      name: "",
      email: "",
      password: "",
     })

    const navigate = useNavigate("")

  //  const [Email, setEmail] = useState('');
  //  const [Password, setPassword] = useState('');
   const[action ,setAction] = useState(true);
    const[isforgot, setForgot] = useState(false);
    // const [Name, setName]   = useState("");
    const [NewPassword, setNewPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
   
    // const handlesignin = useGoogleLogin({
    //   onSuccess: (tokenResponse) =>  {console.log(tokenResponse)
    //     navigate("/Home");
    //   },
    // });

    const handleGoogleSignIn = () => {
      window.location.href = `${process.env.REACT_APP_BACKEND_URL}/auth/google/callback`;
  };

  const handleFacebookLogin = () => {
    window.location.href = 'http://localhost:5000/auth/facebook/callback'; 
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/auth/google`);
            const { token } = res.data; 
            localStorage.setItem('authToken', token); 
            navigate('/home'); 
        } catch (error) {
            console.error('Error during Google login', error);
            navigate('/failure');
        }
    };

    fetchUserDetails();
}, [navigate]); 

useEffect(() => {
  const fetchUserDetails = async () => {
      try {
          const res = await axios.get('http://localhost:5000/auth/facebook/');
          const { token } = res.data; 
          localStorage.setItem('authToken', token); 
          navigate('/home'); 
      } catch (error) {
          console.error('Error during Facebook login', error);
          navigate('/failure');
      }
  };

   fetchUserDetails();
 }, [navigate]); 

  const handlelogn = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:5000/login', formData);
        alert(response.data.message); 
        navigate('/Home')
      } catch (error) {
        console.error('There was an error in Login!', error);
      }
    };
  
    const handlereg = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:5000/register', register);
        alert(response.data.message); 
      } catch (error) {
        console.error('There was an error submitting the form!', error);
      }
    };
  

 
// useEffect(() => {
//   const fetchUserProfile = async () => {
//       try {
//           const token = localStorage.getItem('authToken');
//           const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/profile`, {
//               headers: {
//                   Authorization: `Bearer ${token}`,
//               },
//           });
//           console.log('User Profile:', res.data);
//       } catch (error) {
//           console.error('Error fetching user profile', error);
//       }
//   };

//   fetchUserProfile();
// }, []); 
    
    // const handleloginbtn = () =>{
    //     if(Email === "" || Password === "") 
    //     {
    //        alert("All fields are required");
    //     }else{
    //         alert("Login Successfull");
    //         // navigate('/Home');
    //     }
    // }
  //   const handlesignupbtn = () =>{
  //     if(Name === "" || Email === "" || Password === "") 
  //     {
  //        alert("All fields are required");
  //     }else{
  //         alert("Signup Successfull ");
  //     }
  // }
  const handleforgotbtn = () =>{
    if(NewPassword === "" || ConfirmPassword === "") 
    {
       alert("All fields are required");
    }else{
        alert("Reset Password Successfull ");
    }
}
  const handlesignup = () => {
    setAction(!action);
  }
    const handleforgot = () => {
    setAction(false);
    setForgot(true);
    }

    const handlelogin = () => {
        setForgot(false);
        setAction(true);
    }

  return (
    
   <div className='login-container'>
  <div>
  <img src={vision} alt="vision" width="450px" height="510px"/>
  </div>
    <div className='signup-form'>
        <h1 className='heading'>Welcome!</h1>
    <div>
    <FaFacebookF className='fb' />
        <button className='facebook' onClick={handleFacebookLogin} >Sign in with Facebook</button>
    </div>
    <div>
     
     <FcGoogle className='ggle' />
    <button className='google' onClick={handleGoogleSignIn} >Sign in with Google</button> 
    </div>
    <div className='underline'>
    </div>
    or
          { isforgot ?  <form> <div className='form'>
                <div className='input'>
                  <input type="email" placeholder='New Password' 
                 onChange={() => setNewPassword()} />
                </div>
                <div className='input'>
                  <input type="password" placeholder='Confirm Password' 
                onChange={() => setConfirmPassword()}  />
                </div>
                <button className='login' onClick={handleforgotbtn} >Reset Password</button>
              
         <p className='signup'><span onClick={handlelogin}>Login</span></p>
          </div> </form>  : action ?
           <form onSubmit={handlelogn}>
             <div className='form'>
                <div className='input'>
                  <input type="email" placeholder='Email' 
                  value={formData.email}
                 onChange={() => setFormData({...formData, email:e.target.value})} />
                </div>
                <div className='input'>
                  <input type="password" placeholder='Password' 
                  value={formData.password}
              onChange={() => setFormData({...formData, password:e.tartget.value})} />
                </div>
                <button className='login' onClick={handleloginbtn} >Login</button>
                <div className='forgot-password'>
                <a href='#f' onClick={handleforgot}>Forgot Password?</a>
                </div>
                <p className='signup'>Don't have an account?<span onClick={handlesignup}>Join here!</span></p>
          </div> </form>: <div>
            <form onSubmit={handlereg} >
          <div className='form'>
          <div className='input'>
                  <input type="password" placeholder='Name' 
                  value={register.name}
                onChange={() => setRegister({...register, name:e.target.value})}  />
                </div>
                <div className='input'>
                  <input type="email" placeholder='Email'
                  value={register.email} 
                 onChange={() => setRegister({...register, email:e.target.value})} />
                </div>
                <div className='input'>
                  <input type="password" placeholder='Password' 
                    value={register.password}
                onChange={() => setRegister({...register, password:e.target.value})}  />
                </div>
                <button className='login' onClick={handlesignupbtn} >Sign Up</button>
               
                <p className='signup'>Already have an account ?<span onClick={handlesignup}>Login</span></p>
          </div>
          </form>   </div> }
            </div>
            
   </div>
  )
}

export default LoginSignup
