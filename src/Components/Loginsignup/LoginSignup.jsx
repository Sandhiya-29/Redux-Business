import React, {useState } from 'react';
import './LoginSignup.css';
import vision from './images.png';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
  
function LoginSignup() {

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2,setShowPassword2] = useState(false);
    const navigate = useNavigate("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
   const[action ,setAction] = useState(true);
    const[isforgot, setForgot] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [message, setMessage] = useState('');
    // const [name, setName] = useState('');
    // const [mail, setmail]  = useState("");
    // const [passwords, setPasswords] = useState("");
    const [register, setRegister] = useState(
    {
      name:'',
      email:'',
      password:'',
     }
    
    );

     const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
      
    const togglePasswordVisibility2 = () => {
      setShowPassword2(!showPassword2);
  };


    const handleEmailChange = (event) => {
      setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
      setPassword(event.target.value);
  };
    
  //  const handlemailChange = (event) => {
  //    setEmail(event.target.value)
  //  }
  //  const handleNamechange = (event) => {
  //   setName(event.target.value);
  //  }

  //  const handlemaildchange = (event) => {
  //   setmail(event.target.value);
  //  }
  //  const handlepasswordschange = (event) => {
  //   setPasswords(event.target.value);
  //  }
  //   const handleGoogleSignIn = () => {
  //     window.location.href = `https://7a8f-2401-4900-8826-58ee-70bf-993d-a9f6-4030.ngrok-free.app/auth/google/callback`;
  // };

  // const handleFacebookLogin = () => {
  //   window.location.href = 'https://7a8f-2401-4900-8826-58ee-70bf-993d-a9f6-4030.ngrok-free.app/auth/facebook/callback'; 
  // };

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//         try {
//             const res = await axios.get(`https://7a8f-2401-4900-8826-58ee-70bf-993d-a9f6-4030.ngrok-free.app/auth/google`);
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
//           const res = await axios.get('https://7a8f-2401-4900-8826-58ee-70bf-993d-a9f6-4030.ngrok-free.app/auth/facebook');
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

 
    const handleSubmit = async () => {
      try {
        await axios.post(`https://17ca-2401-4900-8824-9f2-68c8-d24a-c9cc-5457.ngrok-free.app/api/register`, register);
    } catch (error) {
      console.error('There was an error submitting the form!', error);
      }
    };
        
    const handlelogin = async (e) => {
      e.preventDefault();
  
      if (email === "" || password === "") {
          setErrorMessage("All fields are required");
          return;
      }
  
      try {
          const response = await axios.post(`https://17ca-2401-4900-8824-9f2-68c8-d24a-c9cc-5457.ngrok-free.app/api/login`, {
              email,
              password
          });
          if (response.data.success) {
              const { token } = response.data;
              localStorage.setItem('authToken', token);  
              navigate('/home');  
          } else {
              setErrorMessage(response.data.message || 'Login failed. Please try again.');
          }
      } catch (error) {
          console.error('Error logging in:', error);
          setErrorMessage('An error occurred during login. Please try again.');
      }
  };
  
    
  
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
      
  const handleforgotPassword = (event) => {
    event.preventDefault();
    fetch('https://17ca-2401-4900-8824-9f2-68c8-d24a-c9cc-5457.ngrok-free.app/api/forgot-password', {
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
      const handleInputChange = (e) => {
        setRegister({
          ...register,
          [e.target.name]: e.target.value,
        });
      };

      // const handleloginbtn = () =>{
    //     if(Email === "" || password === "")
    //     {
    //        alert("All fields are required");
    //     }else{
    //         alert("Login Successfull");
    //          navigate('/Home');
    //     }
    // }
  //   const handlesignupbtn = () =>{
  //     if(Name === "" || Email === "" || password === "") 
  //     {
  //        alert("All fields are required");
  //     }else{
  //         alert("Signup Successfull ");
  //     }
  // }


  const handlesignup = () => {
    setAction(!action);
  }
    const handleforgot = () => {
    setAction(false);
    setForgot(true);
    }

    const handlelogn = () => {
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
        <button className='facebook' >Sign in with Facebook</button>

    </div>
    <div>
     
     <FcGoogle className='ggle' />
    <button className='google' >Sign in with Google</button> 
    </div>
    <div className='underline'>
    </div>
    or
          { isforgot ?    <form onSubmit={handleforgotPassword}> <div className='form'>
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
         <p className='signup'><span onClick={handlelogn}>Login</span></p>
          </div> </form>  : action ?

           <form  onSubmit={handlelogin}>
             <div className='form'>
               {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div className='input'>
                  <input type="email" placeholder='Email' 
                  id="email"
                  name="email"
                  value={email}
                 onChange={handleEmailChange}  />
                </div>
                <div className='input'>
                  <input  type={showPassword ? "text" : "password"}
                   placeholder='Password' 
                  name='password'
                   id="password"
                  value={password}
                   onChange={handlePasswordChange}
            />
             {password && (
                            <span className="eye-icon" onClick={togglePasswordVisibility}>
                                {showPassword ? <BsEyeSlash /> : <BsEye />}
                            </span>
                        )}
                </div>
                <button className='login' type='submit'>Login</button>

                <div className='forgot-password'>
                <a href='#f' onClick={handleforgot}>Forgot Password?</a>
                </div>
                <br />
                <p className='signup'>Don't have an account?<span onClick={handlesignup}>
                  Join here!</span></p>
                  </div>
                 </form>  : <div>
            <form onSubmit={handleSubmit} >
          <div className='form'>
          <div className='input'>
                  <input type="text" placeholder='Name'
                name='name'
                id='name'
                value={register.name}
                onChange={handleInputChange}
                required/>
                </div>
                <div className='input'>
                  <input type="email" placeholder='Email'
                 id='email'
                 name='email'
                 value={register.email}
                 onChange={handleInputChange}
                 required/>
                </div>
                <div className='input'>
                  <input type={showPassword2 ? "text" : "password"} placeholder='Password' 
                    id='password'
                    name='password'
                   value={register.password}
                    onChange={handleInputChange}
                    required/>
                    {register.password && (
                            <span className="eye-icon" onClick={togglePasswordVisibility2}>
                                {showPassword2 ? <BsEyeSlash /> : <BsEye />}
                            </span>
                        )}
                </div>
                <button className='login' type='submit'>Sign Up</button>
                <p className='signup'>Already have an account ?<span onClick={handlesignup}>Login</span></p>
          </div>
          </form> 
          </div>  
            }
            
   </div>
   </div>
  )
}

export default LoginSignup