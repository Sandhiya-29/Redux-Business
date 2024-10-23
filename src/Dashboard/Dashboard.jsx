import React, {useState, useEffect} from 'react';
import './Dashboard.css';
import axios from 'axios';
import Header from './Header';
import { SlLike } from "react-icons/sl";
 import { AiFillLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { FaUserCircle, FaSearch,FaPlus, FaFacebookMessenger} from 'react-icons/fa';

const Dashboard = () => {
  const [showInput, setShowInput] = useState(false);
  const [likedPosts, setLikedPosts] = useState({});
   const [modal, setModal]  = useState(false);
   const [profileSuggestions, setProfileSuggestions] = useState([]);
   const [postsData, setPostsData] = useState([]);
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
   
    useEffect(() => {
      axios.get('https://0805-2401-4900-8826-58ee-cda7-71f2-b230-a4ee.ngrok-free.app/api/get-posts')
        .then(response => {
          setPostsData(response.data); 
        })
        .catch(error => console.error('Error fetching posts:', error));
    }, []);
   
    const toggleLike = (postId, liked) => {
      if (liked) {
        axios.put(`http://localhost:5000/api/like-post/${postId}`)
          .then(() => {
            setLikedPosts((prevLikedPosts) => ({
              ...prevLikedPosts,
              [postId]: false,
            }));
          })
          .catch(error => console.error('Error unliking post:', error));
      } else {
        axios.put(`http://localhost:5000/api/like-post/${postId}`)
          .then(() => {
            setLikedPosts((prevLikedPosts) => ({
              ...prevLikedPosts,
              [postId]: true,
            }));
          })
          .catch(error => console.error('Error liking post:', error));
      }
    };
    

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

 const handlePostSubmit = () => {
   axios.post('https://0805-2401-4900-8826-58ee-cda7-71f2-b230-a4ee.ngrok-free.app/api/post', newPost)
     .then(() => {
       formmodal();
       axios.get('https://0805-2401-4900-8826-58ee-cda7-71f2-b230-a4ee.ngrok-free.app/api/get-posts') // Re-fetch posts after new post
       .then(response => {
         console.log(response.data); 
         setPostsData(response.data);
       })
     })
     .catch(error => console.error('Error posting:', error));
 };
 useEffect(() => {
 const fetchProfileSuggestions = async () => {
  try {
    const res = await axios.get(`http://localhost:5000/api/suggestions`); 
    setProfileSuggestions(res.data); 
  } catch (error) {
    console.error('Error fetching profile suggestions', error);
  }
};
fetchProfileSuggestions(); 
}, []);



 
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
          </div>
   <div className='content'>
        <div className='post-container'>
        {Array.isArray(postsData) && postsData.map((post, i) => (
            <div key={post._id} className='user-post' >
            <div className='post-content'>
              <div>
              <h1> <FaUserCircle className="user-icon" /></h1>
              </div>
              <div>
              <h2 className='name'>{post.name}</h2>
                <h3 className='entrepreneur'>{post.role}</h3>
                 <p className='description'>{post.description}</p> 
              </div>
              </div>
               <div className='post-icons'>
      
                <div>
               {likedPosts[post._id] ? (
                  <AiFillLike className='thumb-icon' onClick={() => toggleLike(post._id, true)}  />
               ) : (
                  <SlLike className='thumb-icon'onClick={() => toggleLike(post._id, false)} />
               )}
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
         ))}
        </div>
        <div className='members'>
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

      {modal && ( <div className='form-modal'>
                  <div onClick={formmodal} className='overlay'></div>
                  <div className='form-content'>
                     <button className='form-post'>Post</button>
              <div className='input' >
              <input type="text" name="businessName" placeholder='Business Name'
               onChange={handleChange} />
              </div>
              <div className='input' >
              <input type="text" name="businessType" placeholder='Business Type' 
              onChange={handleChange} />
              </div>
              <div className='input' >
              <input type="text" name="tagline" placeholder='Tagline' onChange={handleChange} />
              </div>
              <div className='input' >
           <textarea name="description"  placeholder='Description of Business'
           onChange={handleChange}>
               </textarea>
              </div>
              <div className='input' >
                 <input type="text" name='targetMarket' placeholder='Target Market' onChange={handleChange}  /> 
              </div>
              <div className='input' >
                 <input type="text" name='marketSize' placeholder='Market Size' onChange={handleChange} /> 
              </div>
              <div className='input' >
                 <input type="text" name='financialStatus'
                  placeholder='Current Financial Status' onChange={handleChange}  /> 
              </div>
              <div className='input' >
                 <input type="text" name='fundingRequirements' 
                 placeholder='Funding Requirements' onChange={handleChange}  /> 
              </div>
              <div className='input' >
                 <input type="text"  name='projections' placeholder='Financial Projections' onChange={handleChange}  /> 
              </div>
              <div className='input' >
                 <input type="text" name='founderBackground' placeholder='Founder Background' onChange={handleChange}  /> 
              </div>
              <div className='input' >
                 <input type="text" name='teamMembers' placeholder='Team Members and their Role' onChange={handleChange} /> 
              </div>
              <div className='input' >
                 <input type="text" name='socialImpact' placeholder='Social Impact Commity Benefits' onChange={handleChange} /> 
              </div>
              <button onClick={handlePostSubmit} className="post-btn">Post</button>
              </div>  </div> )}
   </div>
  )
}

export default Dashboard