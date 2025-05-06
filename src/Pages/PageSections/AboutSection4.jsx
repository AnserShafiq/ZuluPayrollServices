import React from 'react'
import ContactForm from './ContactForm'
import Sidebanner from '../../Images/about-contact.jpg'
const AboutSection4 = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row w-full mt-[2%] lg:mt-[3%]'>
        <div className=' w-full lg:w-[50%] flex flex-col items-start justify-center px-[4%] py-[3%] '>
            <h2 className='text-[1.8rem] lg:text-[2rem] leading-tight lg:leading-normal lg:text-[2.2rem] uppercase font-extrabold text-[var(--dark-blue)] special-underline'>To Get in touch with us</h2>
            <ContactForm />
        </div>
        <div className='w-full lg:w-[50%] min-h-[50vh] lg:min-h-fit'>
            <img className='h-[50vh] lg:h-[100%] 2xl:h-[800px] w-[100%] object-cover object-right' src={Sidebanner} alt='Contact Section Home'/>
        </div>
    </div>
  )
}

export default AboutSection4