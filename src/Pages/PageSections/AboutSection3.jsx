import React from 'react'
import ElementPic from '../../Images/about-3.jpg'


const AboutSection3 = () => {
  return (
<div className='flex flex-col lg:flex-row w-[90%] mx-auto lg:w-full px-[0%] lg:px-[4%] my-[10%] lg:my-[3%]'> 
    
    <div className='w-full lg:w-[40%] mb-4 lg:mb-0 rounded-[30px] shadow-xl relative'>
      <img className='h-[40vh] lg:h-[60vh] object-cover object-center w-full rounded-[30px]' src={ElementPic} alt='About Section 2' />
    </div>

    <div className='w-full lg:w-[60%] flex flex-col text-center lg:text-left justify-center mt-[1rem] lg:mt-0 px-0 lg:px-10' >
        <h2 className="text-[1.9rem] leading-tight lg:text-[2.5rem] uppercase font-extrabold text-[var(--dark-blue)] mb-3">
        Exceptional Support for Your Payroll Journey
        </h2>
        <p className='text-[1.2rem] lg:text-[1.4rem] capitalize leading-tight lg:leading-normal tracking-normal text-[var(--dark-blue)]'>
        Zulu Payroll Services is committed to providing personalized support to each client. Our client-focused approach, driven by dedicated account managers, allows us to create tailored payroll solutions that address your specific challenges. We aim to develop long-term partnerships where clients feel valued throughout the process.


        </p>
    </div>



  </div>
  )
}

export default AboutSection3