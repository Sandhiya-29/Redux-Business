import React, {useState, useEffect} from 'react';
import { IoClose } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import './Profile.css';
 import { useSelector } from "react-redux";
 import { updateuserDetailsInServer } from "../slices/tasksSlice";
 import {useDispatch} from 'react-redux';


const UpdateModal = () => {
   const { selectedForm } = useSelector((state) => state.form);
   const dispatch = useDispatch()
   const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");

   const updateuser = (form) => {
     dispatch(updateuserDetailsInServer({form}))
   };

   useEffect(() => {
    if (Object.keys(selectedForm).length !== 0) {
      setFullName(selectedForm.fullName);
      setRole(selectedForm.role);
     
    }
  }, [selectedForm]);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUpdatedForm({ ...updatedForm, [name]: value });
  // };


  return (
    <div className="contact-modal">
      <div className="overlay"></div>
      <div className="contact-info">
        <div className="name-close">
          <h2>Edit Profile</h2>
          <IoClose className="close" />
        </div>
         <div className="profile-link">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={fullName}
            className="edit-input"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div> 
        <div className="profile-link">
          <label>Role</label>
          <input
            type="text"
            name="role"
            value={role}
            className="edit-input"
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div className="profile-link">
          <label>Location</label>
          <input
            type="text"
            name="location"
            
            className="edit-input"
          />
        </div>
        <div className="profile-link">
          <label>Experience</label>
          <input
            type="text"
            name="experience"
            
            className="edit-input"
          />
        </div>
        <div className="profile-link">
          <label>Bio</label>
          <textarea
            name="bio"
            
            className="edit-input"
          />
        </div>
        <button className="save-btn" onClick={(e) => updateuser(e)}>
          Save Changes <LuPencil />
        </button>
      </div>
    </div>
  );
};

export default UpdateModal;
