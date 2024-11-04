import React, { useState } from 'react'  ;
import Progress from './Progress.jsx';
import './Multistep.css';
import { FaUser } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdBusinessCenter } from "react-icons/md";
import collab from '../Assests/Collaboration-bro.png';
 import axios from 'axios';
 import { useNavigate } from 'react-router-dom';


function Home(){

    const [formData, setFormData] = useState(
        {
          fullName: '',
        email: '',
        phoneNumber: '',
        location: '',
       experience: '',
        years: '',
        bio: '',
        businessTitle: '',
        businessIdea: '',
        businessAreaOfInterest: '',
        fundingNeeded: '',
        investmentFocus: '',
        investmentRange: '',
    investorAreaofInterest: '',
    InvestorSocialMediaLinks: '',}
      );
        
      const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

      const navigate = useNavigate("")

      const handlelog = () => {
            navigate('/');
      }
        
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        if (!token) {
            alert("You need to login first.");
            return navigate('/');
        }

        try {
       const response = await axios.put('https://2e2a-2409-40f4-100a-5aeb-85f1-56b7-93d5-f6ce.ngrok-free.app/api/update-profile', formData, {
            headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token,
                }
            });
            alert(response.data.message);
            navigate("/Dashboard");
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

   const [isretailer, setRetailer] = useState(false);
   const [action , setAction] = useState(true);
  const [step, setStep] = useState(1);
  const [step2, setStep2] = useState(1);
  const totalSteps2 = 2
  const totalSteps = 3

  const nextStep = () => {
    if (formData.fullName && formData.email && formData.phoneNumber && formData.location) {
      setStep((prevStep) => prevStep + 1);
    } else {
      alert("Please fill in all required fields.");
    }
};
  
const prevStep = () => {
  setStep(prevStep => (prevStep > 1 ? prevStep - 1 : prevStep));
};

   const nextStep2 = () =>{
    setStep2(prevStep2 => (prevStep2 <2 ? prevStep2 +1 : prevStep2));
   }
   const prevStep2 = () => {
    setStep2(prevStep2 => (prevStep2 >1 ? prevStep2 -1 : prevStep2));
   }
   const handleinvestor = () => {
    setAction(!action);
  }
    const handleretailer = () => {
    setAction(false);
    setRetailer(true);
    }

    const handlehome = () => {
        setRetailer(false);
        setAction(true);
    }

     return(
      <div>
     
        {isretailer ? <div>
               <div> 
               <button className='back-btn' onClick={handlehome}>Back</button>
               </div>
              <div className="container">
              <div className='progress-container'>
              <Progress className="progress active" totalSteps={totalSteps} step={step}  />
                       <div className={` ${step >= 1 ? 'circle active' : 'circle'}`}>
                         <FaUser className='user' /></div>
                       <div className={` ${step >= 2 ? ' circle active' : 'circle'}`}>
                       <MdBusinessCenter className="career" /> 
                       </div>
                       <div className={` ${step >= 3 ? ' circle active' : 'circle'}`}>
                         
                          <HiBuildingOffice2 className='business'/>
                       </div>
              </div>
              
            
      
       <form onSubmit={handleSubmit} >
             <div className='form'> 
          {step === 1 && (
     <>
       <div className='input'>
<input type="text" placeholder='Full Name' name="fullName" 
value={formData.fullName}  onChange={handleInputChange}   required/>
      </div>
      <div className='input'>
<input type="email"  placeholder='Email Address' name="email" value={formData.email}
onChange={handleInputChange}  required />
   </div>
  <div className='input'>
<input type="text" placeholder='Phone Number' name="phoneNumber" value={formData.phoneNumber}
  onChange={handleInputChange}   required />
</div>
   <div className='input'>
<input type="text" placeholder='Location' name="location" value={formData.location} 
 onChange={handleInputChange}  
                                required/>
                            </div>
                        </>
                    )}
                           {step === 2 && (
                        <> 
                            <div className='input'>
          <select className='select'
            name='experience'
            value={formData.experience}
            onChange={handleInputChange}  
          required>
            <option value=''>Experience</option>
            <option value='Fresher'>Fresher</option>
            <option value='Experienced'>Experienced</option>
          </select>
        </div>
                        
                            <div className='input'>
                                <input type="text" placeholder='Years of Experience'
                                name='years'
                                 value={formData.years}
                 onChange={handleInputChange}  
                                required/>
                            </div>
                            <div className='input'>
                                <input type="text"
                                 placeholder='Bio'
                                 name='bio'
                                 value={formData.bio}
                                 onChange={handleInputChange}  
                                 required />
                            </div>
                        </>
                    )}
                       {step === 3 && (
                        <>
                            <div className='input'>
                                <input type="text" placeholder='Business Title'
                                name='businessTitle'
                                 value={formData.businessTitle}
                   onChange={handleInputChange}  
                                 required />
                            </div>
                            <div className='input'>
                                <input type="text" placeholder='Business Idea'
                                name='businessIdea'
                                value={formData.businessIdea}
                   onChange={handleInputChange}  
                                 required />
                            </div>
                            <div className='input'>
                                <input type="text" placeholder='Business Area Of Interest'
                                name='businessAreaOfInterest'
                                value={formData.businessAreaOfInterest}
                                onChange={handleInputChange}  
                                required/>
                            </div>
                             <div className='input'>
                                <input type="text" placeholder='Fund Needed'
                                name='fundingNeeded'
                                 value={formData.fundingNeeded}
                               onChange={handleInputChange}  
                                  required/>
                            </div>
                        </>
                    )}
                        
          </div>
           <div className='content'>
                {step >= 1 && (
                    <button className='prev-btn' onClick={prevStep}>
                        Prev
                    </button>
                )}
                {step < 3 && (
                    <button className='nxt-btn' onClick={nextStep}>
                        Next
                    </button>
                )}
                {step === 3 && (
                    <button className='submit-btn' type="submit">
                        Submit
                    </button>
                )}
           </div>  </form>  
        </div>  </div> : action ? <div> 
         <button className='back-btn' onClick={handlelog}>Log Out</button>
          <div>
            <img className='collab' src={collab} alt="collabration" width="600px" height="530px" />
         </div>
       <div className='role'>
         <button className='btn' onClick={handleretailer}>Entrepreneur</button>
         <button className='btn' onClick={handleinvestor}>Investor</button>
       </div>  
            </div> :
            <div>
              <div>
             <button className='back-btn' onClick={handlehome}>Back</button>
            </div>
             <div className="container">
              <div className='progress-container'>
              <Progress className="progress active" totalSteps2={totalSteps2} step2={step2}  />
                       <div className={` ${step2 >= 1 ? 'circle active' : 'circle'}`}>
                         <FaUser className='user' /></div>
                       <div className={` ${step2 >= 2 ? ' circle active' : 'circle'}`}>
                       <MdBusinessCenter className="career" /> 
                       </div>
                      
              </div>
              <form onSubmit={handleSubmit}>
             <div className='form'>
                      
            {step2 === 1 && (
                        <>
                            <div className='input'>
                                <input type="text" placeholder='Full Name'
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                 required/>
                            </div>
                            <div className='input'>
                                <input type="email" placeholder='Email Address'
                                name='email' 
                                value={formData.email}
                                onChange={handleInputChange}
                                required/>
                            </div>
                            <div className='input'>
                                <input type="text" placeholder='Phone Number'
                                name='phoneNumber'
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                required/>
                            </div>
                            <div className='input'>
                                <input type="text" placeholder='Location'
                                name='location'
                                value={formData.location} 
                                onChange={handleInputChange}
                               required />
                            </div>
                        </>
                    )}
                           {step2 === 2 && (
                        <>
                            <div className='input'>
                        <input 
                            type="text" 
                           placeholder='Investment Focus'
                           name='investmentFocus'
                           value={formData.investmentFocus}
                           onChange={handleInputChange}
                            required/>
                       
                    </div>
                            <div className='input'>
                                <input type="text" placeholder='Investment Range'
                                name="investmentRange"
                                value={formData.investmentRange}
                                onChange={handleInputChange}
                                required/>
                            </div>
                            <div className='input'>
          <select className ="select"
            name='previousInvestmentExperience'
            value={formData.previousInvestmentExperience}
            onChange={handleInputChange}
          required>
            <option value=''>Previous Investment Experience</option>
            <option value='Yes'>Yes</option>
            <option value='No'>No</option>
          </select>
        </div>
                             <div className='input'>
                                <input type="text" placeholder='Area of Interest'
                                name="investorAreaofInterest"
                                value={formData.investorAreaofInterest}
                                onChange={handleInputChange}
                               required />
                            </div>
                            <div className='input'>
                                <input type="text" placeholder='Social Media Link'
                                name='InvestorSocialMediaLinks'
                                value={formData.InvestorSocialMediaLinks}
                                onChange={handleInputChange}
                               required />
                            </div>
                        </>
                    )}
             <div className='content'>
                {step2 >= 1 && (
                    <button className='prev-btn' onClick={prevStep2}>
                        Prev
                    </button>
                )}
                {step2 < 2 && (
                    <button className='nxt-btn' onClick={nextStep2}>
                        Next
                    </button>
                )}
                {step2 === 2 && (
                    <button className='submit-btn'>
                        Submit
                    </button>
                )}
               
        </div>
       
        </div>    </form>   </div> </div>}
         
       </div>
     )
}
export default Home