import React, {useState } from 'react';
import './LoginSignup.css';
import vision from './images.png';
import { FaFacebookF } from "react-icons/fa6";
  import { FcGoogle } from "react-icons/fc";
  // import {useGoogleLogin} from "@react-oauth/google";
  import {useNavigate} from "react-router-dom";

    // import axios from 'axios';
  

function LoginSignup() {

  
    //  const [register, setRegister] = useState({
    //   name: "",
    //   email: "",
    //   password: "",
    //  })

    const navigate = useNavigate("")

     const [Email, setEmail] = useState('');
     const [password, setPassword] = useState('');
   const[action ,setAction] = useState(true);
    const[isforgot, setForgot] = useState(false);
    //  const [errorMessage, setErrorMessage] = useState('');
    const [Name, setName] = useState('');
    const [NewPassword, setNewPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
   
  //   const handleEmailChange = (event) => {
  //     setEmail(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //     setPassword(event.target.value);
  // };

  //   const handleGoogleSignIn = () => {
  //     window.location.href = `${process.env.REACT_APP_BACKEND_URL}/auth/google/callback`;
  // };

  // const handleFacebookLogin = () => {
  //   window.location.href = 'http://localhost:5000/auth/facebook/callback'; 
  // };

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//         try {
//             const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/auth/google`);
//             const { token } = res.data; 
//             localStorage.setItem('authToken', token); 
//             navigate('/home'); 
//         } catch (error) {
//             console.error('Error during Google login', error);
//             navigate('/failure');
//         }
//     };

//     fetchUserDetails();
// }, [navigate]); 

// useEffect(() => {
//   const fetchUserDetails = async () => {
//       try {
//           const res = await axios.get('http://localhost:5000/auth/facebook/');
//           const { token } = res.data; 
//           localStorage.setItem('authToken', token); 
//           navigate('/home'); 
//       } catch (error) {
//           console.error('Error during Facebook login', error);
//           navigate('/failure');
//       }
//   };

//    fetchUserDetails();
//  }, [navigate]); 

  
//  const handlelogn = async (event) => {
//   event.preventDefault();

//   if (email === '' || password === '') {
//       setErrorMessage('Email and Password are required.');
//   } else {
//       setErrorMessage('');
//       try {
//           const response = await fetch('http://localhost:3008/login', {
//               method: 'POST',
//               headers: {
//                   'Content-Type': 'application/json',
//               },
//               body: JSON.stringify({ email, password }),
//           });

//           const responseBody = await response.json();

//           if (!response.ok) {
//               console.error('Response status:', response.status);
//               console.error('Response message:', responseBody.message);
//               throw new Error('Network response was not ok');
//           }

//           console.log('Login data:', responseBody);

//           if (responseBody.message === "Login successful") {
//               navigate('/home');
//           } else {
//               setErrorMessage(responseBody.message || 'Login failed');
//           }
//       } catch (error) {
//           console.error('Error:', error);
//           setErrorMessage('An error occurred. Please try again.');
//       }
//   }
//    };

  
    // const handlereg = async (e) => {
    //   e.preventDefault();
     
    //   try {
    //     const response = await axios.post('http://localhost:5000/register', register);
    //     alert(response.data.message); 
    //   } catch (error) {
    //     console.error('There was an error submitting the form!', error);
    //   }
    // };

  
  
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
    //     if(email === "" || password === "") 
    //     {
    //        alert("All fields are required");
    //     }else{
    //         alert("Login Successfull");
    //          navigate('/Home');
    //     }
    // }
  //   const handlesignupbtn = () =>{
  //     if(name === "" || email === "" || password === "") 
  //     {
  //        alert("All fields are required");
  //     }else{
  //         alert("Signup Successfull ");
  //     }
  // }

    const handleloginbtn = () =>{
        if(Email === "" || password === "") 
        {
           alert("All fields are required");
        }else{
            alert("Login Successfull");
             navigate('/Home');
        }
    }
    const handlesignupbtn = () =>{
      if(Name === "" || Email === "" || password === "") 
      {
         alert("All fields are required");
      }else{
          alert("Signup Successfull ");
      }
  }

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
        <button className='facebook'  >Sign in with Facebook</button>

    </div>
    <div>
     
     <FcGoogle className='ggle' />
    <button className='google'  >Sign in with Google</button> 
    </div>
    <div className='underline'>
    </div>
    or
          { isforgot ?  <form> <div className='form'>
                <div className='input'>
                  <input type="email" placeholder='Email id' 
                 onChange={() => setEmail()} />
                </div>
                <button className='login' onClick={handleforgotbtn} >Send Mail</button>
         <br /> <br />
         <p className='signup'><span onClick={handlelogin}>Login</span></p>
          </div> </form>  : action ?

           <form  >
             <div className='form'>
                <div className='input'>
                  <input type="email" placeholder='Email' 
                onChange={() => setEmail()}    />
                </div>
                <div className='input'>
                  <input type="password" placeholder='Password' 
                  name='password'

                  onChange={() => setPassword()} 
            />
                </div>
                <button className='login' onClick={handleloginbtn}>Login</button>

                <div className='forgot-password'>
                <a href='#f' onClick={handleforgot}>Forgot Password?</a>
                </div>
                <br />
                <p className='signup'>Don't have an account?<span onClick={handlesignup}>
                  Join here!</span></p>
                  </div>
                 </form>
          : <div>
            <form  >
          <div className='form'>
          <div className='input'>
                  <input type="password" placeholder='Name' 
                 onChange={() => setName()}   />
                </div>
                <div className='input'>
                  <input type="email" placeholder='Email'
                  onChange={() => setEmail()}  />
                </div>
                <div className='input'>
                  <input type="password" placeholder='Password' 
                    onChange={() => setPassword()}   />
                </div>
                <button className='login'onClick={ handlesignupbtn } >Sign Up</button>

                 
           </div> </form> :  <form> <div className='form'>
                <div className='input'>
                  <input type="password" placeholder='New Password' 
                 onChange={() => setNewPassword()} />
                </div>
                <div className='input'>
                   <input type="password" placeholder='Confirm Password'
                   onChange={() => setConfirmPassword()} />
                </div>
                <button className='login' >Reset Password</button>
              
         <p className='signup'><span onClick={handlelogin}>Login</span></p>
          </div> </form>
          {/* : <div>
            <form  >
          <div className='form'>
          <div className='input'>
                  <input type="password" placeholder='Name' 
                  value={register.name}
                onChange={(e) => setRegister()}  />
                </div>
                <div className='input'>
                  <input type="email" placeholder='Email'
                  value={register.email} 
                 onChange={(e) => setRegister()} />
                </div>
                <div className='input'>
                  <input type="password" placeholder='Password' 
                    value={register.password}
                onChange={(e) => setRegister()}  />
                </div>
                <button className='login'  >Sign Up</button>

               
                <p className='signup'>Already have an account ?<span onClick={handlesignup}>Login</span></p>
          </div>
          </form> 
          </div>  */}
            </div>}
            
   </div>
   </div>
  )
}

export default LoginSignup
