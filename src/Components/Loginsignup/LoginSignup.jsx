import React, { useState } from 'react';
import './LoginSignup.css';
import vision from './images.png';
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import {BsEye, BsEyeSlash} from "react-icons/bs"
import axios from 'axios';

function LoginSignup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [action, setAction] = useState(true);
  const [isForgot, setIsForgot] = useState(false);
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2,setShowPassword2] = useState(false);

  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
  });

  
  const handleInputChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGoogleSignIn = () => {
    window.location.href = `https://34db-2401-4900-8827-b35b-943a-f82d-fce4-3f72.ngrok-free.app/auth/google/callback`;
  };

  const handleFacebookLogin = () => {
    window.location.href = 'https://34db-2401-4900-8827-b35b-943a-f82d-fce4-3f72.ngrok-free.app/auth/facebook/callback';
  };


  const fetchProtectedData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://34db-2401-4900-8827-b35b-943a-f82d-fce4-3f72.ngrok-free.app/api/protected-route', {
        headers: {
          Authorization: token,  
        },
      });
  
      console.log(response.data);
      return 
    } catch (error) {
      console.error('Error accessing protected route:', error.response?.data || error.message);
    }
  };
  
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://34db-2401-4900-8827-b35b-943a-f82d-fce4-3f72.ngrok-free.app/api/login', {
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.data.accessToken) {
        localStorage.setItem('token', `Bearer ${response.data.accessToken}`);
        fetchProtectedData(); 
        navigate('/Home');
      } else {
        alert('Login failed: No token received.');
      }
      
    } catch (error) {
      alert('Login failed: ' + (error.response?.data?.message || 'Please try again.'));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://34db-2401-4900-8827-b35b-943a-f82d-fce4-3f72.ngrok-free.app/api/register', register);
      setMessage('Registration successful!');
      navigate('/');
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    try{
    axios.post('https://34db-2401-4900-8827-b35b-943a-f82d-fce4-3f72.ngrok-free.app/api/forgot-password', { email })
      .then(response => {
        if (response.data.success) {
          navigate('/ResetPassword');
        } else {
          setMessage(response.data.message || 'Password reset failed');
        }
      })
    }catch(error){
        setMessage('An error occurred. Please try again.', error);
  };
  }
  
  const handleSignupToggle = () => {
    setAction(!action);
  };

  const handleForgotToggle = () => {
    setIsForgot(true);
    setAction(false);
  };

  const handleLoginToggle = () => {
    setIsForgot(false);
    setAction(true);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
};
  
const togglePasswordVisibility2 = () => {
  setShowPassword2(!showPassword2);
};


  return (
    <div className='login-container'>
      <div>
        <img src={vision} alt="vision" width="450px" height="510px" />
      </div>
      <div className='signup-form'>
        <h1 className='heading'>Welcome!</h1>
        <div>
          <FaFacebookF className='fb' />
          <button className='facebook' onClick={handleFacebookLogin}>Sign in with Facebook</button>
        </div>
        <div>
          <FcGoogle className='ggle' />
          <button className='google' onClick={handleGoogleSignIn}>Sign in with Google</button>
        </div>
        <div className='underline'></div>
        or
        {isForgot ? (
          <form onSubmit={handleForgotPassword}>
            <div className='form'>
              
              <div className='input'>
                <input type="email" placeholder='Email' value={email} onChange={handleEmailChange} required />
              </div>
              <button className='login' type="submit">Request New Password</button>
              <br /><br />
              <p className='signup'><span onClick={handleLoginToggle}>Login</span></p>
            </div>
          </form>
        ) : action ? (
          <form onSubmit={handleLogin}>
            <div className='form'>
              <div className='input'>
                <input type="email" placeholder='Email' value={email} onChange={handleEmailChange} required />
              </div>
              <div className='input'>
                <input type={showPassword ? "text" : "password"} placeholder='Password'
                 value={password} onChange={(e) => setPassword(e.target.value)} required />
                 {password && (
                            <span className="eye-icon" onClick={togglePasswordVisibility}>
                                {showPassword ? <BsEyeSlash /> : <BsEye />}
                            </span>
                        )}

              </div>
              <button className='login' type='submit'>Login</button>
              <div className='forgot-password'>
                <a href='#f' onClick={handleForgotToggle}>Forgot Password?</a>
              </div>
              <br />
              <p className='signup'>Don't have an account?<span onClick={handleSignupToggle}>Join here!</span></p>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className='form'>
            {message && <p>{message}</p>}
              <div className='input'>
                <input type="text" placeholder='Name' name='name' 
                value={register.name} onChange={handleInputChange} required />
              </div>
              <div className='input'>
 <input type="email" placeholder='Email' name='email' 
 value={register.email} onChange={handleInputChange} required />
              </div>
              <div className='input'>
          <input type={showPassword2 ? "text" : "password"} placeholder='Password' name='password'
           value={register.password} onChange={handleInputChange} required />
           {register.password && (
                            <span className="eye-icon" onClick={togglePasswordVisibility2}>
                                {showPassword2 ? <BsEyeSlash /> : <BsEye />}
                            </span>
                        )}
              </div>
              <button className='login' type='submit'>Sign Up</button>
              <p className='signup'>Already have an account?<span onClick={handleSignupToggle}>Login</span></p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginSignup;