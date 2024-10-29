import React, {useState} from 'react';
 import { useParams, useNavigate } from 'react-router-dom';
 import zxcvbn from 'zxcvbn';
import './LoginSignup.css';
 import { BsEye, BsEyeSlash } from 'react-icons/bs';
import resetpassword from './reset-password-concept-illustration_114360-7896.jpg';
import axios from 'axios';


const ResetPassword = () => {
    const { token } = useParams();
    const [password, setPassword] = useState('');
     const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');
    const [passwordStrength, setPasswordStrength] = useState(0);
    const navigate = useNavigate();

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        const evaluation = zxcvbn(newPassword);
        setPasswordStrength(evaluation.score);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const validatePassword = (password) => {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        return password.length >= minLength && hasUpperCase &&  hasNumber && hasSpecialChar;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validatePassword(password)) {
            alert('Password must be at least 8 characters long one uppercase ,one lower case, one number, and one special character.');
            return;
        }
        try {
            const response = await axios.post(`https://d81b-2401-4900-8826-5275-ac39-88d9-64ce-3229.ngrok-free.app/api/reset-password/${token}`,{ password }, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password }),
            });

            const responseBody = await response.json();

            if (!response.ok) {
                console.error('Response status:', response.status);
                console.error('Response message:', responseBody.message);
                throw new Error('Network response was not ok');
            }

            setMessage('Password has been reset successfully');
            navigate('/password-reset');
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred. Please try again.');
        }
    };
    return (
        <div className="login-container">
            <div>
  <img src={resetpassword} alt="vision" width="400px" height="200px"/>
  </div>
            <div className='signup-form'>
        <h1 className='heading'>Set New Password</h1>
       <br />
                 {message && <p>{message}</p>} 
                <form  onSubmit={handleSubmit} >
                    <div className="form">
                       <div className='input'>
                        <input
                           type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            placeholder='New Password'
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                         </div>
                         {password && (
                            <span className='pass-icon' onClick={togglePasswordVisibility}>
                                {showPassword ? <BsEyeSlash /> : <BsEye />}
                            </span>
                        )}
                         {password && (
                            <div className="password-strength-bar">
                                <div className={`strength-fill strength-${passwordStrength}
                                `} />
                            </div>
                        )}
                    <button type="submit" className='login'>Reset Password</button>
                    <br /> <br />
                    <a href="/" className="forgot-password">
                    Back to login</a>
                    </div>
                </form>
             </div>
        </div>
    );
};

export default ResetPassword;