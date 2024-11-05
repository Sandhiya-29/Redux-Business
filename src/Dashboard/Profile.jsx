import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import './Profile.css';
import { FaUserCircle } from 'react-icons/fa';
import { LuPencil } from "react-icons/lu";
import background from '../Assests/360_F_172318263_046YEZYCK2hDGJR6X6lm4Gbaxar65Rew.jpg';
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [profileSuggestions, setProfileSuggestions] = useState([]);
  const [modal, setModal] = useState(false);
  const [interest, setInterest]  =  useState(false);
  const navigate = useNavigate("");


  useEffect(() => {
    const fetchUserProfile = async () => {
      
      const token = localStorage.getItem('token')

  if(!token) {
    alert("You need to login");
  }
      try {
        const response = await axios.get(`https://289a-2401-4900-8827-8076-81fd-88aa-71b7-3dcb.ngrok-free.app/api/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user profile', error);
        setLoading(false);
      }
    };

    const fetchProfileSuggestions = async () => {
      try {
        const res = await axios.get(`https://289a-2401-4900-8827-8076-81fd-88aa-71b7-3dcb.ngrok-free.app/api/suggestions`); 
        if (Array.isArray(res.data)) {
          setProfileSuggestions(res.data);
        } else {
          console.error('Data is not an array:', res.data);
          setProfileSuggestions([]); 
        }
      } catch (error) {
        console.error('Error fetching profile suggestions', error);
        setProfileSuggestions([]);
      }
    };
    fetchUserProfile();
    fetchProfileSuggestions(); 
    
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
       
    const contactinfo = () => {
      setModal(!modal);

      if(modal) {
        document.body.classList.add("active-modal");
      }else{
        document.body.classList.remove("active-modal");
      }
    }
      const intresetinfo = () => {
        setInterest(!interest)
      }

      const handlelog = () => {
        navigate('/');
      }
  return (
    <div>
      <div>
        <Header />
      </div>
      
         <button className='back-btn' onClick={handlelog}>Log Out</button>
          
      <div className="profile">
        <div className='profile-container'>
          <div>
            <img src={background} alt="background" className='background' />
            <div className='image-container'>
              {userData.avatar ? (
                <img src={userData.avatar} alt="User Avatar" className='profile-image' />
              ) : (
                <FaUserCircle className='profile-image' />
              )}
            </div>
          </div>
          <div>
            <LuPencil className='pencil-icon' />
          </div>
          <div>
            <p className="user-experience">
              {userData.details?.experience ? 'Experienced' : 'Fresher'}
            </p>
            <p className='previous-experience'>
              {userData.details?.years ? `${userData.details.years} years experience` : 'No experience yet'}
            </p>
          </div>
          <div className="details">
            <h2 className="user-name">{userData.details?.fullName || 'Name not provided'}</h2>
            <p className="user-role">{userData.details?.role || 'Role not defined'}</p>
     <p className="user-location">{userData.details?.location || 'Location not provided'}</p>
          </div>
          <div className='user-personal'>
            <button className="user-info" onClick={contactinfo}>Contact info</button>
            <div>
              <button className='user-interest' onClick={intresetinfo}>Interest</button>
            </div>
          </div>
          <hr className='about-line' />
          <div>
        <p className="user-bio">{userData.details?.bio || 'About'}</p>
          </div>
          <div>
            <p className="title">{userData.details?.businessTitle || 'Business Title'}</p>
            <p className='user-idea'>{userData.details?.businessIdea || 'Business Idea'}</p>
          </div>
        </div>
        {modal && <div className='contact-modal'>
             <div className='overlay' onClick={contactinfo}></div>
        <div className='contact-info'>
          <div className="name-close">
           <h2>your profile link</h2>
               <IoClose className='close' onClick={contactinfo} />
           </div>
           <div className='profile-link'>
            <h3 className="link">Link</h3>
            <LuPencil className='edit-icon' /> 
            </div>
            <div className="contact-email">
              <h2>Email</h2>
             </div>
             <h3 className="email-id">{userData.details?.email || 'Email not provided'}</h3>
            <h2 className='contact-number'>Phone Number</h2>
            <h3 className="number">{userData.details?.phoneNumber || 'Number not provided'}</h3>
            <h2 className='social-links'>Social Media Links</h2>
             <div className='social-media'>
              <h3>{userData.details?.BusinessSocialMediaLinks || 'It is not provided'}</h3>
             </div>
             
           </div>
         
          </div>}
            
          {interest && <div className='contact-modal'>
             <div className='overlay' onClick={intresetinfo}></div>
        <div className='contact-info'>
          <div className="name-close">
           <h2>Area of interest</h2>
               <IoClose className='close' onClick={intresetinfo} />
           </div>
           <div className='profile-link'>
            <h3 className="interest">{userData.details?.areaOfInterest || 'It is not provided'}</h3>
            <LuPencil className='edit-icon' /> 
            </div>
            <div className="contact-email">
              <h2>Funding Needed</h2>
             </div>
             <h3 className="email-id">{userData.details?.fundingNeeded || 'It is not provided'}</h3>
           </div>
          </div>}

        <div className='members-2'>
          <h3 className="profiles">More profiles for you</h3>
          { Array.isArray(profileSuggestions) && profileSuggestions.length > 0 ? (
            profileSuggestions.map((profile, index) => (
              <div className='suggestion' key={index}>
                <div>
                  <h2><FaUserCircle className='user-icon' /></h2>
                </div>
                <div>
                  <h3 className='name'>{profile.fullName}</h3>
                  <h4 className='entrepreneur'>{profile.role}</h4>
                  <p className='description'>{profile.bio || 'Open to Invest'}</p>
                  <button className="view-profile">View Profile</button>
                </div>
                <hr />
              </div>
            ))
          ) : (
            <p>No profiles to suggest</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Profile;