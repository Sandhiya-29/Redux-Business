import React, {useState } from 'react';
import './LoginSignup.css';
import vision from './images.png';
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
  
function LoginSignup() {
  
    const navigate = useNavigate("");
    //login
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    //forgotpassword
    const [emails, setEmails] = useState("");
   const[action ,setAction] = useState(true);
    const[isforgot, setForgot] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [message, setMessage] = useState('');
    //registe' 
    // const [name, setName] = useState('');
    // const [mail, setmail]  = useState("");
    // const [passwords, setPasswords] = useState("");
    const [register, setRegister] = useState(
    {
      name:' ',
      email:' ',
      password:' ',
     }
    
    );

    

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
      setPassword(event.target.value);
  };
    
   const handlemailChange = (event) => {
     setEmails(event.target.value)
   }
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

 const handlelogin = async (event) => {
  event.preventDefault();

  if (email === '' || password === '') {
      setErrorMessage('Email and Password are required.');
  } else {
      setErrorMessage('');
      try {
          const response = await
   fetch('https://3c55-2401-4900-8826-58ee-f473-2bb4-f83b-58b2.ngrok-free.app/api/login', 
   {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password }),
          });

          const responseBody = await response.json();

          if (!response.ok) {
              console.error('Response status:', response.status);
              console.error('Response message:', responseBody.message);
              throw new Error('Network response was not ok');
          }

          console.log('Login data:', responseBody);

          if (responseBody.message === "Login successful") {
             
              navigate('/home');
          } else {
              setErrorMessage(responseBody.message || 'Login failed');
          }
      } catch (error) {
          console.error('Error:', error);
          setErrorMessage('An error occurred. Please try again.');
      }
  }
};
    const handleregister = async (e) => {
      e.preventDefault();
      try {
        console.log(register);
        const response =  await axios.post(`https://3c55-2401-4900-8826-58ee-f473-2bb4-f83b-58b2.ngrok-free.app/api/register`, register);
         setMessage(response.data.message)
    }    catch (error) {
      console.error('There was an error submitting the form!', error);
      }
    };

  // useEffect(() => {
  // const fetchUserProfile = async () => {
  //     try {
  //         const token = localStorage.getItem('authToken');
  //         const res = await axios.get(`https://7a8f-2401-4900-8826-58ee-70bf-993d-a9f6-4030.ngrok-free.app/api/profile`, {
  //             headers: {
  //                 Authorization: `Bearer ${token}`,
  //             },
  //         });
  //         console.log('User Profile:', res.data);
  //     } catch (error) {
  //         console.error('Error fetching user profile', error);
  //     }
  // };

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
    fetch('https://3c55-2401-4900-8826-58ee-f473-2bb4-f83b-58b2.ngrok-free.app/api/forgot-password', {
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
          { isforgot ?    <form onSubmit={handleSubmit}> <div className='form'>
          {message && <p>{message}</p>}
                <div className='input'>
                  <input type="email" placeholder='Email id' 
                 id="email"
                 name="email"
                 value={emails}
                 onChange={handlemailChange}
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
                  //value={email}
                 onChange={handleEmailChange}  />
                </div>
                <div className='input'>
                  <input type="password" placeholder='Password' 
                  name='password'
                   id="password"
                  //value={password}
                   onChange={handlePasswordChange}
            />
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
            <form onSubmit={handleregister} >
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
                  <input type="password" placeholder='Password' 
                    id='password'
                    name='password'
                   value={register.password}
                    onChange={handleInputChange}
                    required/>
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
