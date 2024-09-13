import React from 'react'
import Sidebanner from '../../Images/home-contact.jpg'
import ContactForm from './ContactForm';
const HomeSection6 = () => {

    

  return (
    <div id='contact-section' className='flex flex-col lg:flex-row w-full mt-[2%] lg:mt-[3%]'>
        <div className='w-full lg:w-[50%] min-h-[50vh] lg:min-h-[75vh]'>
            <img className='h-[50vh] lg:h-[100%] w-[100%] object-cover' src={Sidebanner} alt='Contact Section Home'/>
        </div>
        <div className=' w-full lg:w-[50%] flex flex-col items-start justify-center px-[4%] py-[3%] '>
            <h2 className='text-[1.8rem] lg:text-[2rem] leading-tight lg:leading-normal lg:text-[2.2rem] uppercase font-extrabold text-[var(--dark-blue)] special-underline'>To Get in touch with us</h2>
            <ContactForm />
        </div>        
    </div>
  )
}

export default HomeSection6