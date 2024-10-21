import React from 'react'
import { FaUserCircle, FaBell, FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Header = () => {
   
  const navigate = useNavigate("");

  const handlenavigate = () => {
    navigate("/Profile");
  }
  
  return (
    <header className="header">
    <div className="header-content">
      <div className="header-icons">
        <FaBell className="icon" />
        <FaCog className="icon" />
        <FaUserCircle className="icon" onClick={handlenavigate}  />
      </div>
    </div>
  </header>
  )
}

export default Header