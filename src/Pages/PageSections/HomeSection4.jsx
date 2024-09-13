import React, { useEffect, useState } from 'react'
import building from '../../Images/buildings.jpg'
import card1 from '../../Images/service1.jpg';
import card2 from '../../Images/service2.jpg';
import card3 from '../../Images/service3.jpg';
import card4 from '../../Images/service4.jpg';
import card5 from '../../Images/service5.jpg';


const HomeSection4 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const ServicesCard = [
    {
      img: card5,
      name: 'Payroll processing',
      description:'Our specialized payroll processing services take care of everything from timesheet collection to tax filings. With advanced software and experienced professionals, we guarantee precision and timeliness.',
    },{
      img: card4,
      name: 'Timesheet Management',
      description:'Receive, review, and validate employee timesheets effortlessly. We handle timesheet integration, programming, and processing, so every hour worked is accounted for accurately.',
    },{
      img: card3,
      name: 'Tax Compliance & Filing',
      description:'Avoid penalties and ensure your business stays compliant. We handle all payroll-related tax calculations, deductions, and filings."',
    },{
      img: card2,
      name: 'Direct Deposit & Payment',
      description:'Seamless payment options, including direct deposits, pay cards, and more. We ensure that employees are paid accurately and on time, every time.',
    },{
      img: card1,
      name: 'Reporting & Analytics',
      description:'Get access to detailed payroll reports and insights. We provide monthly, quarterly, and annual reports to help you understand payroll expenses and manage your labor costs efficiently.',
    },
  ]
  return (
    <div className='flex flex-col lg:flex-row  text-center w-full px-[0%] lg:px-[4%] my-[10%] lg:my-[3%]'> 
      <div className='w-full lg:w-[30%] lg:rounded-[30px] lg:shadow-xl relative'>
        <img className='hidden lg:block h-full rounded-[30px]' src={building} alt='Section 4 back' />
        <div className='relative lg:absolute top-0 left-0 h-full w-full flex items-center lg:px-[10%] lg:bg-[#00000055] lg:rounded-[30px] z-10'>
          <h3 className='text-[2rem] lg:text-[2.4rem] text-center lg:text-start text-[var(--dark-blue)] lg:text-[var(--sky-blue)] font-extrabold uppercase tracking-wider leading-tight lg:leading-relaxed'>End-to-end payroll services <span className={`${windowWidth <= 1000 ? 'hidden' : ''}`}>tailored to your business</span></h3>
        </div>
      </div>
      <div className='w-full lg:w-[70%] flex justify-center lg:flex-row flex-wrap gap-[2rem] mt-[1rem] lg:mt-0 lg:gap-[1.5rem] lg:pl-2' >
        {
          ServicesCard.map((Card, index) => (
            <div className='lg:w-[30%] lg:bg-[var(--sky-blue)] lg:rounded-[30px] lg:shadow-sm ' key={index}>
              <img className='h-[40vh] lg:h-[30vh] w-full object-cover lg:rounded-t-[30px] mb-3' src={Card.img} alt={`Service ${Card.name}`}/>
              <h3 className='text-[1.8rem] lg:text-[1.4rem] font-bold capitalize tracking-wide text-[var(--dark-blue)]'>{Card.name}</h3>
              <h5 className='text-[1.3rem] font-[400] lg:font-normal lg:text-[1.05rem] tracking-normal px-4 text-[var(--black)] mb-[5%] leading-tight'> {Card.description}</h5>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default HomeSection4