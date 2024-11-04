import React, {useState, useEffect} from 'react';
import './Dashboard.css';
import axios from 'axios';
import Header from './Header';
import { SlLike } from "react-icons/sl";
 import { AiFillLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { FaUserCircle, FaSearch,FaPlus, FaFacebookMessenger} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate()  

    const toggleLike = (postId, liked) => {
      if (liked) {
        axios.put(`https://2e2a-2409-40f4-100a-5aeb-85f1-56b7-93d5-f6ce.ngrok-free.app/api/like-post/${postId}`)
          .then(() => {
            setLikedPosts((prevLikedPosts) => ({
              ...prevLikedPosts,
              [postId]: false,
            }));
          })
          .catch(error => console.error('Error unliking post:', error));
      } else {
        axios.put(`https://2e2a-2409-40f4-100a-5aeb-85f1-56b7-93d5-f6ce.ngrok-free.app/api/like-post/${postId}`)
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

  
const handlePostSubmit = async (e) => {
  e.preventDefault(); 

  const token = localStorage.getItem('token')

  if(!token) {
    alert("You need to login");
   return navigate("/");
  }
 try{
 const response =await axios.post('https://2e2a-2409-40f4-100a-5aeb-85f1-56b7-93d5-f6ce.ngrok-free.app/api/post', newPost, {
    headers: {
      'Content-Type' :'application/json',
      'Authorization': `Bearer ${token}`,
    }
   })
  alert(response.data.message);
  handleGetPosts()
  } catch(error) {
    console.error("Error in posting ", error)
  }
    };
   
      const handleGetPosts = async () => {
           const token = localStorage.getItem('token');
        
           if (!token) {
            alert("You need to login");
             return navigate("/");
           }
        
           try {
             const response = await axios.get('https://2e2a-2409-40f4-100a-5aeb-85f1-56b7-93d5-f6ce.ngrok-free.app/api/get-posts', postsData, {
               headers: {
                 'Authorization':`Bearer ${token}`,
               }
            });
            setPostsData(response.data.postsData); 
          } catch (error) {
            console.error("Error fetching posts: ", error);
          }
         };
   
   
 useEffect(() => {
 const fetchProfileSuggestions = async () => {
  try {
    const res = await axios.get(`https://2e2a-2409-40f4-100a-5aeb-85f1-56b7-93d5-f6ce.ngrok-free.app/api/suggestions`); 
      setProfileSuggestions(res.data);
  } catch (error) {
    console.error('Error fetching profile suggestions', error);
  }
};
fetchProfileSuggestions(); 
}, []);

const handlelog = () => {
  navigate('/');
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
        {Array.isArray(postsData) && postsData.map((post, i) => (
            <div key={post._id} className='user-post' >
            <div className='post-content'>
              <div>
              <h1> <FaUserCircle className="user-icon" /></h1>
              </div>
              <div>
              <h2 className='name'>{postsData.name}</h2>
                <h3 className='entrepreneur'>{postsData.role}</h3>
                 <p className='description'>{postsData.businessName}</p>
                 <p className='description'>{postsData.businessType}</p>
                 <p className='description'>{postsData.tagline}</p>
                 <p className='description'>{postsData.description}</p>
                 <p className='description'>{postsData.targetMarket}</p>
                 <p className='description'>{postsData.marketSize}</p>
                 <p className='description'>{postsData.financialStatus}</p>
                 <p className='description'>{postsData.fundingRequirements}</p>
                 <p className='description'>{postsData.projections}</p>
                 <p className='description'>{postsData.founderBackground}</p>
                 <p className='description'>{postsData.teamMembers}</p>
                 <p className='description'>{postsData.socialImpact}</p>
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
          {Array.isArray(profileSuggestions) && profileSuggestions.length > 0 ? (
            profileSuggestions.map((profile, index) => (
              <div className='suggestion' key={index}>
                <div>
                  <h2><FaUserCircle className='user-icon' /></h2>
                </div>
                <div>
                  <h3 className='name'>{profileSuggestions.fullName}</h3>
                  <h4 className='entrepreneur'>{profileSuggestions.role}</h4>
                  <p className='description'>{profileSuggestions.bio || 'Open to Invest'}</p>
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

      {modal && (<form onSubmit={handlePostSubmit}> <div className='form-modal'>
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