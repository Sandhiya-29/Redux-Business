import React, {useState,} from 'react';
import './Dashboard.css';
import Header from './Header';
import { SlLike } from "react-icons/sl";
 import { AiFillLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { FaUserCircle, FaSearch,FaPlus, FaFacebookMessenger} from 'react-icons/fa';

const Dashboard = () => {
  const [showInput, setShowInput] = useState(false);
   const [modal, setModal]  = useState(false);
   const [newPost, setNewPost] = useState({
      businessName: '',
      businessType: '',
      tagline: '',
      description: '',
      targetMarket: '',
      marketSize: '',
      financialStatus: '',
      fundingRequirements: '',
      projections: '',
      founderBackground: '',
      teamMembers: '',
      socialImpact: '',
    });
    
    

   const formmodal = () =>{
      setModal(!modal);

      if(modal) {
         document.body.classList.add("active-modal");
      }else{
         document.body.classList.remove("active-modal");
      }
   }

  const toggleinput = () => {
     setShowInput(!showInput);
  }
   
  const handleChange = (e) => {
   setNewPost({
     ...newPost,
     [e.target.name]: e.target.value,
   });
 };

  

      
    
   
 
const handlelog = () => {
  localStorage.removeItem("authToken");
  window.location.href="/";
}

  return (
    <div>
   <div>
       <Header />
   </div>
   
   <div className='content-icons'>
   {showInput && 
            <input 
          type='text' 
          placeholder='Search...'
          className='search-input' 
        />
            }
           <FaSearch className='search-icon' onClick={toggleinput} />
          
           <FaPlus className='plus-icon' onClick={formmodal} />
           <FaFacebookMessenger className='message-icon' />
           <div> 
         <button className='back-btn' onClick={handlelog}>Log Out</button>
          </div>
          </div>
   <div className='content'>
        <div className='post-container'>
       
            <div  className='user-post' >
            <div className='post-content'>
              <div>
              <h1> <FaUserCircle className="user-icon" /></h1>
              </div>
              <div>
              <h2 className='name'> </h2>
                <h3 className='entrepreneur'> </h3>
                 <p className='description'> </p>
                 <p className='description'></p>
                 <p className='description'></p>
                 <p className='description'></p>
                 <p className='description'></p>
                 <p className='description'></p>
                 <p className='description'> </p>
                 <p className='description'></p>
                 <p className='description'></p>
                 <p className='description'></p>
                 <p className='description'></p>
                 <p className='description'></p>
              </div>
              </div>
               <div className='post-icons'>
      
                <div>
              
                  <AiFillLike className='thumb-icon'  />
              
                  <SlLike className='thumb-icon' />
         
               <p className='like'>Like</p>
               </div>
               <div>
                     <FaRegComment  className='comment-icon'/>
                     <p className='comment'>Comment</p>
              </div>
              <div>
                     <LuSend  className='send-icon'/>
                     <p className='send'>Send</p>
              </div>
             
              </div> 
            </div>  
       
        </div>
        <div className='members'>
        <h3 className="profiles">More profiles for you</h3>
         
              <div className='suggestion' >
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

      {modal && (<form > <div className='form-modal'>
                  <div onClick={formmodal} className='overlay'></div>
                  <div className='form-content'>
                     <button className='form-post'>Post</button>
              <div className='input' >
              <input type="text" name="businessName" placeholder='Business Name'
              value={newPost.businessName}
               onChange={handleChange} />
              </div>
              <div className='input' >
              <input type="text" name="businessType" placeholder='Business Type' 
              value={newPost.businessType}
              onChange={handleChange} />
              </div>
              <div className='input' >
              <input type="text" name="tagline" placeholder='Tagline'
              value={newPost.tagline}
               onChange={handleChange} />
              </div>
              <div className='input' >
           <textarea name="description"  placeholder='Description of Business'
           value={newPost.description}
           onChange={handleChange}>
               </textarea>
              </div>
              <div className='input' >
                 <input type="text" name='targetMarket' placeholder='Target Market'
                 value={newPost.targetMarket}
                  onChange={handleChange}  /> 
              </div>
              <div className='input' >
                 <input type="text" name='marketSize' placeholder='Market Size'
                 value={newPost.marketSize}
                  onChange={handleChange} /> 
              </div>
              <div className='input' >
                 <input type="text" name='financialStatus'
                  placeholder='Current Financial Status'
                  value={newPost.financialStatus}
                   onChange={handleChange}  /> 
              </div>
              <div className='input' >
                 <input type="text" name='fundingRequirements' 
                 placeholder='Funding Requirements' value={newPost.fundingRequirements}
                 onChange={handleChange}  /> 
              </div>
              <div className='input' >
                 <input type="text"  name='projections' placeholder='Financial Projections'
                 value={newPost.projections}
                  onChange={handleChange}  /> 
              </div>
              <div className='input' >
                 <input type="text" name='founderBackground' placeholder='Founder Background'
                 value={newPost.founderBackground}
                  onChange={handleChange}  /> 
              </div>
              <div className='input' >
                 <input type="text" name='teamMembers' placeholder='Team Members and their Role'
                 value={newPost.teamMembers} onChange={handleChange} /> 
              </div>
              <div className='input' >
                 <input type="text" name='socialImpact' placeholder='Social Impact Commity Benefits'
                 value={newPost.socialImpact} onChange={handleChange} /> 
              </div>
              <button type='submit' className="post-btn">Post</button>
              </div>  </div> </form> )}
   </div>
  )
}

export default Dashboard