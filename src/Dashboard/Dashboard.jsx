import React, {useState} from 'react'
import './Dashboard.css';
import Header from './Header';
import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { FaUserCircle, FaSearch,FaPlus, FaFacebookMessenger} from 'react-icons/fa';

const Dashboard = () => {
    
  const [showInput, setShowInput] = useState(false);

  const toggleinput = () => {
     setShowInput(!showInput)
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
        <div className='form-content'>
              <div className='input' >
                 <input type="text" placeholder='Name'  /> 
              </div>
              <div className='input' >
                 <input type="text"  /> 
              </div>
              <div className='input' >
                 <input type="text"  /> 
              </div>
              <div className='input' >
                 <input type="text"   /> 
              </div>
        </div>
   </div>
   </div>
  )
}

export default Dashboard