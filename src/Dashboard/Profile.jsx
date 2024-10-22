import React from 'react';
import Header from './Header';
import './Profile.css';
import { FaUserCircle} from 'react-icons/fa';
import { LuPencil } from "react-icons/lu";
import background from './360_F_172318263_046YEZYCK2hDGJR6X6lm4Gbaxar65Rew.jpg';

const Profile = () => {
  return (
    <div>
        <div>
            <Header />
        </div>
        <div className="profile">
         <div className='profile-container'>
          <div>
             <img src={background} alt="background" className='background' />
              <div className='image-container'>
              <FaUserCircle className='profile-image' />
               </div>
               </div>
               <div>
                <LuPencil  className='pencil-icon'/>
               </div>
              <div className="details">
                <h2 className="user-name">Sandhiya</h2>
                <p className="user-role">Investor</p>
                <h5 className="user-bio">Bio</h5>
                <h3 className="user-number">+91 78907654321</h3>
                <p className="user-location">Coimbatore,TamilNadu,India</p>
                <h4 className='user-interest'>Area of Interest</h4>
                <h3 className="user-experience">Experience</h3>
                <a href="L#" className="user-links">https://facebook</a>
              </div>
         </div>
          <div className='members-2'>
        <h3 className="profiles">More profiles for you</h3>
         <div className='suggestion'>
               <div>
                  <h2> <FaUserCircle className='user-icon' /></h2>
                   </div>
                   
                   <div>
              <h3 className='name'>Vishnu</h3>
                <h4 className='entrepreneur'>Investor</h4>
                 <p className='description'>Open to Invest</p> 
                 
                 <button className="view-profile">View Profile</button>
            
              </div>  
             </div>
             <hr />
             <div className='suggestion'>
               <div>
                  <h2> <FaUserCircle className='user-icon' /></h2>
                   </div>
                   <div>
              <h3 className='name'>Sanjay</h3>
                <h4 className='entrepreneur'>Investor</h4>
                 <p className='description'>Open to Invest</p> 
                 <button className="view-profile">View Profile</button>
              </div> 
             </div>
             <hr />
             <div className='suggestion'>
               <div>
                  <h2> <FaUserCircle className='user-icon' /></h2>
                   </div>
                   
                   <div>
              <h3 className='name'>Anu</h3>
                <h4 className='entrepreneur'>Investor</h4>
                 <p className='description'>Open to Invest</p> 
                 
                 <button className="view-profile">View Profile</button>
            
              </div>
              
                   
             </div>
             <hr />
             <div className='suggestion'>
               <div>
                  <h2> <FaUserCircle className='user-icon' /></h2>
                   </div>
                   
                   <div>
              <h3 className='name'>Abi</h3>
                <h4 className='entrepreneur'>Investor</h4>
                 <p className='description'>Open to Invest</p> 
                 
                 <button className="view-profile">View Profile</button>
            
              </div>
              
                   
             </div>
             <hr />
             <div className='suggestion'>
               <div>
                  <h2> <FaUserCircle className='user-icon' /></h2>
                   </div>
                   
                   <div>
              <h3 className='name'>Vikram</h3>
                <h4 className='entrepreneur'>Investor</h4>
                 <p className='description'>Open to Invest</p> 
                 
                 <button className="view-profile">View Profile</button>
            
              </div>    
             </div>
             </div>
         </div>
    </div>
  )
}

export default Profile