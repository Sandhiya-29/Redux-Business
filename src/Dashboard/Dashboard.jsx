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
      axios.get('https://4963-2401-4900-8826-58ee-f473-2bb4-f83b-58b2.ngrok-free.app/api/get-posts')
        .then(response => {
          setPostsData(response.data); // Assuming the backend returns a list of posts
        })
        .catch(error => console.error('Error fetching posts:', error));
    }, []);
   
    const toggleLike = (postId, isLiked) => {
      const url = isLiked ? 'https://4963-2401-4900-8826-58ee-f473-2bb4-f83b-58b2.ngrok-free.app/api/unlike' : '/api/like';
      axios.put(url, { postId }) // Send postId to backend to handle like/unlike
        .then(() => {
          setLikedPosts((prevLiked) => ({
            ...prevLiked,
            [postId]: !prevLiked[postId], // Toggle like state locally
          }));
        })
        .catch(error => console.error('Error liking/unliking post:', error));
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
   axios.post('https://4963-2401-4900-8826-58ee-f473-2bb4-f83b-58b2.ngrok-free.app/api/post', newPost)
     .then(() => {
       // Close modal after posting and refresh the posts
       formmodal();
       axios.get('https://4963-2401-4900-8826-58ee-f473-2bb4-f83b-58b2.ngrok-free.app/api/get-posts') // Re-fetch posts after new post
         .then(response => setPostsData(response.postsData));
     })
     .catch(error => console.error('Error posting:', error));
 };
 
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
        {postsData.map((post, i) => (
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