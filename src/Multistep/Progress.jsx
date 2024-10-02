import React from 'react'

const Progress = ({totalSteps, step}) => {
  const progress = ((step -1) / (totalSteps -1)) * 100;
  // const progress2 = ((step2 -1) / (totalSteps2)) * 100;
  return (
    <div className='progress' 
    style={{
      height:"4px",
      background: "#ddd",
      width:"100%",
      transition:"all o.4s ease-in"
    }} >

<div 
    style={{
      height:"4px",
      background: "black",
      width:`${progress}%`,
      transition:"all o.4s ease-in"
    }} >
      </div>

      
    </div>
  )
}

export default Progress;