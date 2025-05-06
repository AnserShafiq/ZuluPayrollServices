import React, { useState } from 'react'
import emailjs from 'emailjs-com';


emailjs.init('TZ-RUJwAT_o5Q9a-P');

const ContactForm = () => {

    const [submission, setSubmission] = useState(false);

    const [FormData,setFormData] = useState({
        Fullname:'',
        Email:'',
        ContactNumber: '',
        Address:'',
        Message: '',
    })

    const handleFieldEntry = (e) =>{
        const {name, value} = e.target;
        if(name === 'ContactNumber'){
            let formattedPhone = value.replace(/\D/g, '');
            if (formattedPhone.length > 10) {
                formattedPhone = formattedPhone.slice(0, 10);
            }
            formattedPhone = formattedPhone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2 $3');
            setFormData((prev) => ({
                ...prev,
                [name]: formattedPhone,
            }));
        }else{
            setFormData((prev) =>({
                ...prev,
                [name]:value,
            }))
        }
    }
    const handleFromSubmission = (e) =>{
        e.preventDefault();
        emailjs.send('service_b3brckc', 'template_d300j7f', FormData, 'TZ-RUJwAT_o5Q9a-P')
        .then((response) => {
          console.log('Successfully Sent!!', response.status, response.text);
          setSubmission(true);
        }, (error) => {
          console.log('Error => ', error);
        });
        console.log(FormData);
    }
  return (
    <div className='w-full min-h-[50vh] lg:min-h-fit'>
        {
            submission ? (
                <h2 className='text-[1.8rem] lg:text-[2rem] tracking-wider text-[var(--dark-blue)] font-bold'>Thank you for reaching us, will contact you back shortly</h2>
            ):(
                <form className='my-[2%] flex flex-col w-full' onSubmit={handleFromSubmission}>
                    <label className='text-[1.4rem] lg:text-[1.6rem] text-[var(--dark-blue)] tracking-wide capitalize font-[500] mt-2 mb-[0.5%]'>
                        Full name
                    </label>
                    <input className='border-2 border-[var(--dark-blue)] w-full px-4 py-2 text-[1.2rem] font-[300] text-neutral-800 rounded-[10px]' type='text' value={FormData.Fullname} name='Fullname' placeholder='Enter your full name' onChange={handleFieldEntry} required />

                    <label className='text-[1.4rem] lg:text-[1.6rem] text-[var(--dark-blue)] tracking-wide capitalize font-[500] mt-2 mb-[0.5%]'>
                        Email
                    </label>
                    <input className='border-2 border-[var(--dark-blue)] w-full px-4 py-2 text-[1.2rem] font-[300] text-neutral-800 rounded-[10px]' type='email' value={FormData.Email} name='Email' placeholder='Enter your email' onChange={handleFieldEntry} required />

                    <label className='text-[1.4rem] lg:text-[1.6rem] text-[var(--dark-blue)] tracking-wide capitalize font-[500] mt-2 mb-[0.5%]'>
                        Contact Number
                    </label>
                    <input className='border-2 border-[var(--dark-blue)] w-full px-4 py-2 text-[1.2rem] font-[300] text-neutral-800 rounded-[10px]' type='tel' value={FormData.ContactNumber} name='ContactNumber' placeholder='Enter your contact number' onChange={handleFieldEntry} required />

                    <label className='text-[1.4rem] lg:text-[1.6rem] text-[var(--dark-blue)] tracking-wide capitalize font-[500] mt-2 mb-[0.5%]'>
                        Address
                    </label>
                    <input className='border-2 border-[var(--dark-blue)] w-full px-4 py-2 text-[1.2rem] font-[300] text-neutral-800 rounded-[10px]' type='text' value={FormData.Address} name='Address' placeholder='Enter your company address' onChange={handleFieldEntry} required />

                    <label className='text-[1.4rem] lg:text-[1.6rem] text-[var(--dark-blue)] tracking-wide capitalize font-[500] mt-2 mb-[0.5%]'>
                        Message
                    </label>
                    <textarea className='border-2 border-[var(--dark-blue)] w-full px-4 py-2 text-[1.2rem] font-[300] text-neutral-800 rounded-[10px]' rows={3} value={FormData.Message} name='Message' placeholder='Enter your payroll requirements' onChange={handleFieldEntry} required />

                    <button className='text-[1.5rem] tracking-wide px-[2rem] py-[0.3rem] uppercase font-bold text-[var(--sky-blue)] bg-[var(--dark-blue)] w-fit mt-[6%] lg:mt-[3%] rounded-xl transition-transform ease-in-out duration-[0.3s] hover:scale-[1.05]' type='submit'>Submit</button>
                </form>
            )
        }
    </div>
  )
}

export default ContactForm