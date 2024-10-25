import React from 'react';
import { FaUserCircle, FaBell, FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Profile.jsx';


const Header = () => {
   
  const navigate = useNavigate("");
  const handleprofile = () => {
    navigate("/Profile");
  }
  
  return (
    <header className="header">
    <div className="header-content">
      <div className="header-icons">
        <FaBell className="icon" />
        <FaCog className="icon" />
        <FaUserCircle className="icon" onClick={handleprofile}  />
      </div>
    </div>               
  </header>
  )
}

export default Header