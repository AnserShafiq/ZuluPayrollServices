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
            Secure, Compliant, & Tailored Payroll Services
        </h2>
        <p className='text-[1.2rem] lg:text-[1.4rem] capitalize leading-tight lg:leading-normal tracking-normal text-[var(--dark-blue)]'>
        At Zulu Payroll Services, we specialize in delivering tailored payroll services to meet the unique needs of businesses of all sizes. Our experienced team of payroll experts is dedicated to providing timely, compliant, and secure payroll solutions. We pride ourselves on offering a personal touch to ensure each client receives the highest level of service.
        </p>
    </div>



  </div>
  )
}

export default AboutSection3