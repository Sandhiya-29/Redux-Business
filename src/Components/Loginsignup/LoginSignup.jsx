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

     const [Email, setEmails] = useState('');
     const [password, setPassword] = useState('');
   const[action ,setAction] = useState(true);
    const[isforgot, setForgot] = useState(false);
    //  const [errorMessage, setErrorMessage] = useState('');
    const [Name, setName] = useState('');
    // const [NewPassword, setNewPassword] = useState("");
    // const [ConfirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
   
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
  };

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
      
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/forgot-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            navigate('/ResetPassword', { state: { email } });
        } else {
            navigate('/ResetPassword', { state: { message: data.message || 'Password reset failed' } });
        }
    })
    .catch(error => {
        console.error('Error:', error);
        setMessage('An error occurred. Please try again.');
    });
};


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

//   const handleforgotbtn = () =>{
//     if(NewPassword === "" || ConfirmPassword === "") 
//     {
//        alert("All fields are required");
//     }else{
//         alert("Reset Password Successfull ");
//     }
// }
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
          { isforgot ?    <form onSubmit={handleSubmit}> <div className='form'>
          {message && <p>{message}</p>}
                <div className='input'>
                  <input type="email" placeholder='Email id' 
                 id="email"
                 name="email"
                 value={email}
                 onChange={handleEmailChange}
                 required />
                </div>
                <button className='login' type="submit">Request New Password</button>
         <br /> <br />
         <p className='signup'><span onClick={handlelogin}>Login</span></p>
          </div> </form>  : action ?

           <form  >
             <div className='form'>
                <div className='input'>
                  <input type="email" placeholder='Email' 
                onChange={() => setEmails()}    />
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
                  onChange={() => setEmails()}  />
                </div>
                <div className='input'>
                  <input type="password" placeholder='Password' 
                    onChange={() => setPassword()}   />
                </div>
                <button className='login'onClick={ handlesignupbtn } >Sign Up</button>

                 
           </div> </form> :  <form> <div className='form'>
                <div className='input'>
                  <input type="password" placeholder='New Password' 
                 />
                </div>
                <div className='input'>
                   <input type="password" placeholder='Confirm Password'
                 />
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
