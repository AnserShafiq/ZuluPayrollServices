import React, { useState} from 'react'
import './styles.css'

import { FiPlus, FiMinus } from 'react-icons/fi';

const HomeSection5 = () => {
  const faqs = [
    {
      question: 'How does the timesheet submission process work?',
      answer: 'Clients send us their employee timesheets, which we review, program, and integrate into our payroll system. We ensure that all hours are accounted for, and payroll is processed accordingly.',
    },
    {
      question: 'What payroll software do you use?',
      answer: 'We use state-of-the-art payroll software that ensures compliance, security, and efficiency.',
    },
    {
      question: 'How do you ensure data security?',
      answer: 'We utilize the latest encryption and cybersecurity measures to protect your sensitive payroll data.',
    },
    {
      question: 'Can you handle multi-state payroll?',
      answer: 'Yes, We are equipped to manage payroll for companies operating in multiple states, ensuring compliance with all state-specific regulations.',
    },
  ];
  
  const [openFAQ, setOpenFAQ] = useState(0); // Initialize with the first FAQ index

  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null); 
    } else {
      setOpenFAQ(index); 
    }
  };  


  return (
    <div className='flex flex-col items-center w-full px-[6%] lg:px-[4%] mb-[5%] lg:my-[3%]'>
      <h2 className='text-[2rem] leading-tight text-center lg:leading-normal lg:text-[2.5rem] uppercase font-extrabold text-[var(--dark-blue)] special-underline'>Frequently asked questions</h2>
      <div className="w-full w-[90%] lg:w-[60%] mx-auto mt-8">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="">
              <div
                className={`flex justify-between items-center p-4 cursor-pointer rounded-[10px] border-2 active:bg-[var] ${ openFAQ === index ? '':'hover:bg-[var(--sky-blue)]'} ${
                  openFAQ === index ? 'bg-[var(--dark-blue)] text-[var(--sky-blue)]' : 'text-[var(--dark-blue)] border-[var(--dark-blue)] bg-transparent'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-[1.2rem] lg:text-[1.4rem] font-[500] ">
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <FiMinus className="text-[1.5rem] lg:text-[1.2rem]" />
                ) : (
                  <FiPlus className="text-[1.5rem] lg:text-[1.2rem]" />
                )}
              </div>
              {openFAQ === index && (
                <div className="p-4 border-none text-[1.1rem] lg:text-[1.3rem] leading-snug text-[var(--dark-blue)]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeSection5
