import React, { useState, useEffect } from 'react';
import Header from './Header';
import './Profile.css';
import { FaUserCircle } from 'react-icons/fa';
import { LuPencil } from "react-icons/lu";
import background from '../Assests/360_F_172318263_046YEZYCK2hDGJR6X6lm4Gbaxar65Rew.jpg';
import { IoClose } from "react-icons/io5";
import {  useSelector,useDispatch } from 'react-redux';
import {getuserDetailsFromServer, updateuserDetailsInServer} from '../slices/EntrepreneurSlice';


const Profile = () => {
  
   const {userdetails} = useSelector((state) => state.form)
  const dispatch = useDispatch()
    
  const [modal, setModal] = useState(false);
  const [interest, setInterest]  =  useState(false);
  const [updatemodal, setUpdateModal] = useState(false);
  const [editableDetails, setEditableDetails] = useState({
    fullName: '',
    role: '',
    location: '',
    experience: '',
    bio: ''
  });
  
  

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
      
      
      const update = (userData) => {
        setEditableDetails({
          fullName: userData.fullName,
          role: userData.role,
          location: userData.location,
          experience: userData.experience,
          bio: userData.bio,
          id: userData.id
        });
        setUpdateModal(!updatemodal);
        document.body.classList.toggle("active-modal", !updatemodal);
      };
      const handleSaveChanges = () => {
        dispatch(updateuserDetailsInServer(editableDetails))
          .then(() => setUpdateModal(false)) // close modal on success
          .catch(error => console.error("Error updating details:", error));
      };

      const handlelog = () => {
        localStorage.removeItem("authToken");
        window.location.href="/";
      }
    
  useEffect(() => {
    dispatch(getuserDetailsFromServer())
  }, [dispatch])    

  return (
    <div>
         <div>
      <div>
        <Header />
      </div>
         <button className='back-btn' onClick={handlelog}>Log Out</button>
          <div className="profile">
          {userdetails && userdetails.map((form,index) => { 
          return (
        <div key={form.id} className='profile-container'>
        <div>
            <img src={background} alt="background" className='background' />
             {/* <div className='image-container'>
             
                {/* <img src={} alt="User Avatar" className='profile-image' /> */}
            
                  {/* <FaUserCircle className='profile-image' />   */}
             
           {/* </div>   */} 
          </div> 
          <div>
            <LuPencil className='pencil-icon' onClick={() => update(form)} />
          </div>
         {updatemodal && <div>
          <div className="contact-modal">
      <div className="overlay"></div>
      <div className="contact-info">
        <div className="name-close">
          <h2>Edit Profile</h2>
          <IoClose className="close" onClick={update} />
        </div>
         <div className="profile-link">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            className="edit-input"
            value={editableDetails.fullName}
  onChange={(e) => setEditableDetails({ ...editableDetails, fullName: e.target.value })}
          />
        </div> 
        <div className="profile-link">
          <label>Role</label>
          <input
            type="text"
            name="role"
            className="edit-input"
            value={editableDetails.role}
  onChange={(e) => setEditableDetails({ ...editableDetails, role: e.target.value })}
          />
        </div>
        <div className="profile-link">
          <label>Location</label>
          <input
            type="text"
            name="location"
            className="edit-input"
            value={editableDetails.location}
  onChange={(e) => setEditableDetails({ ...editableDetails, location: e.target.value })}
          />
        </div>
        <div className="profile-link">
          <label>Experience</label>
          <input
            type="text"
            name="experience"
            className="edit-input"
            value={editableDetails.experience}
  onChange={(e) => setEditableDetails({ ...editableDetails, experience: e.target.value })}
          />
        </div>
        <div className="profile-link">
          <label>Bio</label>
          <textarea
            name="bio"
            className="edit-input"
            value={editableDetails.bio}
  onChange={(e) => setEditableDetails({ ...editableDetails, bio: e.target.value })}
          />
        </div>
        <button className="save-btn" onClick={handleSaveChanges}>
          Save Changes <LuPencil />
        </button>
      </div>
    </div>
          </div>}
          <div>
            <p className="user-experience">
          {form.experience}
            </p>
            <p className='previous-experience'>
             {form.years}
            </p>
             
          </div>
          <div className="details">
            <h2 className="user-name"> {form.fullName} </h2>
            <p className="user-role"> {form.role} </p>
     <p className="user-location"> {form.location} </p>
          </div>
          <div className='user-personal'>
            <button className="user-info" onClick={contactinfo}>Contact info</button>
            <div>
              <button className='user-interest' onClick={intresetinfo}>Interest</button>
            </div>
          </div>
          <hr className='about-line' />
          <div>
        <p className="user-bio">{form.bio} </p>
          </div>
          <div>
            <p className="title">{form.businessTitle} </p>
            <p className='user-idea'>{form.businessIdea} </p>
          </div>
        </div>  )})}
        {/* {modal && <div className='contact-modal'>
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
             <h3 className="email-id"> </h3>
            <h2 className='contact-number'>Phone Number</h2>
            <h3 className="number">  </h3>
            <h2 className='social-links'>Social Media Links</h2>
             <div className='social-media'>
              <h3> </h3>
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
            <h3 className="interest"> </h3>
            <LuPencil className='edit-icon' /> 
            </div>
            <div className="contact-email">
              <h2>Funding Needed</h2>
             </div>
             <h3 className="email-id"> </h3>
           </div>
          </div>}
         */}
        <div className='members-2'>
          <h3 className="profiles">More profiles for you</h3>
        
              <div className='suggestion'>
                <div>
                  <h2><FaUserCircle className='user-icon' /></h2>
                </div>
                <div>
                  <h3 className='name'> </h3>
                  <h4 className='entrepreneur'> </h4>
                  <p className='description'></p>
                  <button className="view-profile">View Profile</button>
                </div>
                <hr />
              </div>
           
           
         
        </div>
      </div> 
    </div>   
    </div>
  );
};
export default Profile;