import React, {useState} from 'react';
import './Dashboard.css';
import Header from './Header';
import { SlLike } from "react-icons/sl";
 import { AiFillLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { FaUserCircle, FaSearch,FaPlus, FaFacebookMessenger} from 'react-icons/fa';

const Dashboard = () => {
    
  const [showInput, setShowInput] = useState(false);
   const [Liked, setLiked]  = useState(false);

   const toggleLike = () => {
  setLiked(prevLiked => !prevLiked);
   }

  const toggleinput = () => {
     setShowInput(!showInput);
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
          
           <FaPlus className='plus-icon' />
           <FaFacebookMessenger className='message-icon' />
          </div>
   <div className='content'>
        <div className='post-container'>
          
            <div className='user-post'>
            <div className='post-content'>
              <div>
              <h1> <FaUserCircle className="user-icon" /></h1>
              </div>
              <div>
              <h2 className='name'>Sandhiya</h2>
                <h3 className='entrepreneur'>Entrepreneur</h3>
                 <p className='description'> I always have been passionate about creating solutions that
                   solve real-world problems,
                   particularly in the my industry.</p> 
              </div>
              </div>
               <div className='post-content'>
             
                <div>
               {Liked ? (
                  <AiFillLike className='thumb-icon' onClick={toggleLike} />
               ) : (
                  <SlLike className='thumb-icon'onClick={toggleLike} />
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
            <div className='user-post'>
            <div className='post-content'>
              <div>
              <h1> <FaUserCircle className="user-icon" /></h1>
              </div>
              <div>
              <h2 className='name'>Vikram</h2>
                <h3 className='entrepreneur'>Investor</h3>
                 <p className='description'> My goal is to minimize risk and maximize return.</p> 
              </div>
              </div>
               <div className='post-content'>
             
                <div>
               {Liked ? (
                  <AiFillLike className='thumb-icon' onClick={toggleLike} />
               ) : (
                  <SlLike className='thumb-icon'onClick={toggleLike} />
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
            <div className='user-post'>
            <div className='post-content'>
              <div>
              <h1> <FaUserCircle className="user-icon" /></h1>
              </div>
              <div>
              <h2 className='name'>Vijay</h2>
                <h3 className='entrepreneur'>Investor</h3>
                 <p className='description'> I always have been passionate about creating solutions that
                   solve real-world problems,
                   particularly in the my industry.</p> 
              </div>
              </div>
               <div className='post-content'>
             
                <div>
               {Liked ? (
                  <AiFillLike className='thumb-icon' onClick={toggleLike} />
               ) : (
                  <SlLike className='thumb-icon'onClick={toggleLike} />
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
            <div className='user-post'>
            <div className='post-content'>
              <div>
              <h1> <FaUserCircle className="user-icon" /></h1>
              </div>
              <div>
              <h2 className='name'>Aadhitiya</h2>
                <h3 className='entrepreneur'>Entrepreneur</h3>
                 <p className='description'> I always have been passionate about creating solutions that
                   solve real-world problems,
                   particularly in the my industry.</p> 
              </div>
              </div>
               <div className='post-content'>
             
                <div>
               {Liked ? (
                  <AiFillLike className='thumb-icon' onClick={toggleLike} />
               ) : (
                  <SlLike className='thumb-icon'onClick={toggleLike} />
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
            <div className='user-post'>
            <div className='post-content'>
              <div>
              <h1> <FaUserCircle className="user-icon" /></h1>
              </div>
              <div>
              <h2 className='name'>Keerthana</h2>
                <h3 className='entrepreneur'>Entrepreneur</h3>
                 <p className='description'> I always have been passionate about creating solutions that
                   solve real-world problems,
                   particularly in the my industry.</p> 
              </div>
              </div>
               <div className='post-content'>
             
                <div>
               {Liked ? (
                  <AiFillLike className='thumb-icon' onClick={toggleLike} />
               ) : (
                  <SlLike className='thumb-icon'onClick={toggleLike} />
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
            <div className='user-post'>
            <div className='post-content'>
              <div>
              <h1> <FaUserCircle className="user-icon" /></h1>
              </div>
              <div>
              <h2 className='name'>Dharshini</h2>
                <h3 className='entrepreneur'>Investor</h3>
                 <p className='description'> I always have been passionate about creating solutions that
                   solve real-world problems,
                   particularly in the my industry.</p> 
              </div>
              </div>
               <div className='post-content'>
             
                <div>
               {Liked ? (
                  <AiFillLike className='thumb-icon' onClick={toggleLike} />
               ) : (
                  <SlLike className='thumb-icon'onClick={toggleLike} />
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
            <div className='user-post'>
            <div className='post-content'>
              <div>
              <h1> <FaUserCircle className="user-icon" /></h1>
              </div>
              <div>
              <h2 className='name'>Annie</h2>
                <h3 className='entrepreneur'>Entrepreneur</h3>
                 <p className='description'> I always have been passionate about creating solutions that
                   solve real-world problems,
                   particularly in the my industry.</p> 
              </div>
              </div>
               <div className='post-content'>
             
                <div>
               {Liked ? (
                  <AiFillLike className='thumb-icon' onClick={toggleLike} />
               ) : (
                  <SlLike className='thumb-icon'onClick={toggleLike} />
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
            <div className='user-post'>
            <div className='post-content'>
              <div>
              <h1> <FaUserCircle className="user-icon" /></h1>
              </div>
              <div>
              <h2 className='name'>Priyanka</h2>
                <h3 className='entrepreneur'>Investor</h3>
                 <p className='description'> I always have been passionate about creating solutions that
                   solve real-world problems,
                   particularly in the my industry.</p> 
              </div>
              </div>
               <div className='post-content'>
             
                <div>
               {Liked ? (
                  <AiFillLike className='thumb-icon' onClick={toggleLike} />
               ) : (
                  <SlLike className='thumb-icon'onClick={toggleLike} />
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
             <div className='user-post'>
             <div className='post-content'>
               <div>
               <h1> <FaUserCircle className="user-icon" /></h1>
               </div>
               <div>
               <h2 className='name'>Vasu</h2>
                 <h3 className='entrepreneur'>Investor</h3>
                  <p className='description'> I always have been passionate about creating solutions that
                    solve real-world problems,
                    particularly in the my industry.</p> 
               </div>
               </div>
                <div className='post-content'>
              
                 <div>
                {Liked ? (
                   <AiFillLike className='thumb-icon' onClick={toggleLike} />
                ) : (
                   <SlLike className='thumb-icon'onClick={toggleLike} />
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
             <div className='user-post'>
             <div className='post-content'>
               <div>
               <h1> <FaUserCircle className="user-icon" /></h1>
               </div>
               <div>
               <h2 className='name'>Naveen</h2>
                 <h3 className='entrepreneur'>Entrepreneur</h3>
                  <p className='description'> I always have been passionate about creating solutions that
                    solve real-world problems,
                    particularly in the my industry.</p> 
               </div>
               </div>
                <div className='post-content'>
              
                 <div>
                {Liked ? (
                   <AiFillLike className='thumb-icon' onClick={toggleLike} />
                ) : (
                   <SlLike className='thumb-icon'onClick={toggleLike} />
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
             
        </div>
        <div className='form-content'>
              <div className='input' >
                 <input type="text" placeholder='Name'  /> 
              </div>
              <div className='input' >
                 <input type="text" placeholder='Contact'  /> 
              </div>
              <div className='input' >
                 <input type="text" placeholder='Location'  /> 
              </div>
              <div className='input' >
                 <input type="text" placeholder='Business Name'  /> 
              </div>
              <div className='input' >
                 <input type="text" placeholder='Business Type'  /> 
              </div>
              <div className='input' >
                 <input type="text" placeholder='Tagline'  /> 
              </div>
              <div className='input' >
           <textarea name="Description of Business" placeholder='Description of Business'>
               </textarea>
                 {/* <input type="textarea" placeholder='Description of Business'  />  */}
              </div>
              <div className='input' >
                 <input type="text" placeholder='Target Market'  /> 
              </div>
              <div className='input' >
                 <input type="text" placeholder='Market Size'  /> 
              </div>
              <div className='input' >
                 <input type="text" placeholder='Current Financial Status'  /> 
              </div>
              <div className='input' >
                 <input type="text" placeholder='Funding Requirements'  /> 
              </div>
              <div className='input' >
                 <input type="text" placeholder='Financial Projections'  /> 
              </div>
              <div className='input' >
                 <input type="text" placeholder='Founder Background'  /> 
              </div>
              <div className='input' >
                 <input type="text" placeholder='Team Members and their Role'  /> 
              </div>
              <div className='input' >
                 <input type="text" placeholder='Social Impact Commity Benefits'  /> 
              </div>
        </div>
   </div>
   </div>
  )
}

export default Dashboard