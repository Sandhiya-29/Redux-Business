import React from 'react'
import { FaUserCircle, FaBell, FaCog } from 'react-icons/fa';
const Header = () => {
  return (
    <header className="header">
    <div className="header-content">
      <div className="header-icons">
        <FaBell className="icon" />
        <FaCog className="icon" />
        <FaUserCircle className="icon" />
      </div>
    </div>
  </header>
  )
}

export default Header