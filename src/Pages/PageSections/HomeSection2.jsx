import React from 'react';
import './styles.css';
import card1 from '../../Images/payroll processing.jpg';
import card2 from '../../Images/compliance.jpg';
import card3 from '../../Images/timely reporting.jpg';
import card4 from '../../Images/secure data.jpg';
import { HashLink } from 'react-router-hash-link';

const HomeSection2 = () => {
  const SolutionCard = [
    {
      image: card1,
      head: 'Accurate Payroll Processing',
      description: 'Say goodbye to manual errors. We program and process your payroll to ensure each employee is paid correctly and on time.',
    },
    {
      image: card2,
      head: 'Compliance Driven',
      description: 'We ensure your payroll is fully compliant with all relevant local, state, and federal regulations.',
    },
    {
      image: card3,
      head: 'Timely Reporting',
      description: 'Detailed payroll reports and analytics available on demand.',
    },
    {
      image: card4,
      head: 'Secure Data Management',
      description: 'Your timesheets and payroll data are stored securely with industry-standard encryption.',
    },
  ];

  return (
    <div className="flex flex-col items-center text-center w-full px-[6%] lg:px-[4%] my-[10%] lg:my-[3%]">
      <h2 className="text-[2rem] leading-tight lg:leading-normal lg:text-[2.5rem] uppercase font-extrabold text-[var(--dark-blue)] special-underline">
        Accurate & reliable payroll solutions
      </h2>
      <h4 className="text-[1.3rem] capitalize leading-tight lg:leading-normal tracking-normal text-[var(--dark-blue)] my-6 lg:mt-3">
        Welcome to Zulu Payroll Services, where we take the hassle out of payroll processing. Our third-party payroll services ensure accuracy, compliance, and peace of mind, so you can focus on growing your business. Let us handle the timesheets while you focus on your team’s success.
      </h4>
      <div className="flex flex-col lg:flex-row w-full justify-between">
        {SolutionCard.map((Card, index) => (
          <div key={index} className="flex flex-col items-center w-full bg-[var(--sky-blue)] rounded-[30px] w-[90%] mx-auto lg:w-1/4 lg:mx-3 my-4">
            <img className="w-full h-[30vh] lg:h-[35vh] object-cover object-top mb-4 rounded-t-[30px]" src={Card.image} alt={`Card ${Card.head}`} />
            <h3 className="text-[1.5rem] font-semibold text-[var(--dark-blue)] mb-2">{Card.head}</h3>
            <p className="text-[1.1rem] leading-tight tracking-wide text-[var(--black)] px-2 pb-6">{Card.description}</p>
          </div>
        ))}
      </div>
      <HashLink 
      smooth
      className='text-[1.5rem] lg:text-[1.8rem] uppercase font-extrabold tracking-wider mt-[5%] lg:mt-4 px-[1.5rem] py-[0.3rem] rounded-xl shadow-lg bg-[var(--dark-blue)] text-[var(--sky-blue)] transition-transform ease-in-out duration-[0.3s] hover:scale-[1.05]' 
      to='#contact-section'
      >
        Get a qoute today
      </HashLink>
    </div>
  );
};

export default HomeSection2;
