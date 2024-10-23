import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import './Profile.css';
import { FaUserCircle } from 'react-icons/fa';
import { LuPencil } from "react-icons/lu";
import background from './360_F_172318263_046YEZYCK2hDGJR6X6lm4Gbaxar65Rew.jpg';

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [profileSuggestions, setProfileSuggestions] = useState([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('authToken'); 
        const res = await axios.get(`http://localhost:5000/api/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(res.data); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user profile', error);
        setLoading(false);
      }
    };

    const fetchProfileSuggestions = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/suggestions`); 
        setProfileSuggestions(res.data); 
      } catch (error) {
        console.error('Error fetching profile suggestions', error);
      }
    };

    fetchUserProfile();
    fetchProfileSuggestions(); 
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }


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
            <button className="user-info">Contact info</button>
            <div>
              <button className='user-interest'>Interest</button>
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
        <div className='members-2'>
          <h3 className="profiles">More profiles for you</h3>
          {profileSuggestions.length > 0 ? (
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
