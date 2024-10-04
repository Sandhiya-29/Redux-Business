import React, {useState} from 'react';
import './Multistep.css';
import Progress from './Progress.jsx';
import { FaUser } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdBusinessCenter } from "react-icons/md";


function Multistep() {
  const [experience, setExperience] = useState(''); 
    const [showDropdown, setShowDropdown] = useState(false);

    const handleExperienceClick = () => {
      setShowDropdown(!showDropdown);
  };
  const handleOptionClick = (option) => {
    setExperience(option); 
    setShowDropdown(false); 
};
  const [step, setStep] = useState(1);
  const totalSteps = 3

  const nextStep = () => {
    setStep(prevStep => (prevStep < 3 ? prevStep + 1 : prevStep));
};
  
const prevStep = () => {
  setStep(prevStep => (prevStep > 1 ? prevStep - 1 : prevStep));
};
    
    return(
        <div>
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
       
       <form>
       <div className='form'>
       {step === 1 && (
                        <>
                            <div className='input'>
                                <input type="text" placeholder='Full Name' />
                            </div>
                            <div className='input'>
                                <input type="email" placeholder='Email Address' />
                            </div>
                            <div className='input'>
                                <input type="text" placeholder='Phone Number' />
                            </div>
                            <div className='input'>
                                <input type="text" placeholder='Location' />
                            </div>
                        </>
                    )}
                     {step === 2 && (
                        <>
                            <div className='input'>
                        <input 
                            type="text" 
                            placeholder='Experience' 
                            value={experience} 
                            onClick={handleExperienceClick} 
                            readOnly  
                        />
                        {showDropdown && (
                            <ul className='dropdown'>
                      <li onClick={() => handleOptionClick('Fresher')}>Fresher</li>
                                <li onClick={() => handleOptionClick('Experienced')}>Experienced</li>
                            </ul>
                        )}
                    </div>

                            <div className='input'>
                                <input type="text" placeholder='Years of Experience' />
                            </div>
                            <div className='input'>
                                <input type="text" placeholder='Bio' />
                            </div>
                        </>
                    )}
                    {step === 3 && (
                        <>
                            <div className='input'>
                                <input type="text" placeholder='Business Title' />
                            </div>
                            <div className='input'>
                                <input type="text" placeholder='Business Idea' />
                            </div>
                            <div className='input'>
                                <input type="text" placeholder='Business Area Of Interest' />
                            </div>
                             <div className='input'>
                                <input type="text" placeholder='Fund Needed' />
                            </div>
                        </>
                    )}
               </div>
       </form>
       <div className='content'>
                {step > 1 && (
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
                    <button className='submit-btn'>
                        Submit
                    </button>
                )}
            </div>
        </div>
        </div>
    )
}
export default Multistep;