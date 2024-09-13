import React from 'react'
import { HashLink } from 'react-router-hash-link'
import SectionThreeBack from "../../Images/home-4.jpg";

const HomeSection3 = () => {
  return (
    <div className={`flex flex-col items-center text-center w-full my-[10%] lg:my-[2%]`}>
        <div className='w-full h-[80vh] lg:h-[83vh] relative'>
            <img className='object-cover w-full h-full ' src={SectionThreeBack} alt='Section 3 back' />
            <div className='flex flex-col justify-end items-center px-[5%] pb-[15%] lg:pb-[5%] absolute content-0 top-0 left-0 w-full h-full bg-gradient-to-t from-[#00000055] to-[#00000011]'>
                <h2 className='text-[2rem] lg:text-[2.2rem] text-[var(--sky-blue)] uppercase tracking-wider leading-tight font-extrabold mb-2'>
                    Your Dedicated Partner for Streamlined and <br/>Hassle-Free Payroll Processing
                </h2>
                <HashLink smooth className='hidden w-fit lg:block text-[1.8rem] font-semibold border-b-2 border-[var(--sky-blue)] text-[var(--sky-blue)] hover:text-[var(--dark-red)] hover:border-[var(--dark-red)] uppercase tracking-wider' to={'/#contact-section'} >
                    Join our growing list of satisfied clients
                </HashLink>
                <HashLink smooth className='block w-fit lg:hidden text-[1.5rem] font-semibold border-b-2 border-[var(--sky-blue)] text-[var(--sky-blue)] hover:text-[var(--dark-red)] hover:border-[var(--dark-red)] uppercase tracking-wider' to={'/#contact-section'} >
                    connect with us
                </HashLink>
            </div>
        </div>
       
    </div>
  )
}

export default HomeSection3