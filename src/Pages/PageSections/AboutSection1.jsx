import React from 'react'
import BackCover from '../../Images/about-1.jpg'


const AboutSection1 = () => {
  return (
    <div className='flex flex-col items-center text-center w-full h-[80vh] lg:h-[90vh] relative'>
        <img className='object-cover w-full h-full object-[52%] lg:object-center' src={BackCover} alt='About Us Back Cover'/>
        <div className='flex flex-col justify-end items-center px-[6%] lg:px-[8%] pb-[15%] lg:pb-[6%] absolute content-0 top-0 left-0 w-full h-full bg-gradient-to-t from-[#00000055] to-[#00000011]'>
                <h2 className='text-[1.8rem] lg:text-[2.2rem] text-[var(--sky-blue)] uppercase tracking-wider leading-tight font-extrabold mb-2'>
                    Your Trusted Partner in Payroll Management
                </h2>
                <h2 className='text-[1.2rem] lg:text-[1.5rem] text-[var(--sky-blue)] capitalize tracking-wide leading-tight font-[500]'>
                Rely on us for expert payroll management that ensures accuracy, compliance, and efficiency. We handle everything from processing to tax filings, so you can focus on growing your business with confidence.
                </h2>
            </div>
    </div>
  )
}

export default AboutSection1