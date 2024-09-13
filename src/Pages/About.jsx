import React from 'react'
import AboutSection4 from './PageSections/AboutSection4'
import AboutSection1 from './PageSections/AboutSection1'
import AboutSection2 from './PageSections/AboutSection2'
import AboutSection3 from './PageSections/AboutSection3'
import JumpToTop from '../Components/JumpToTop.jsx'

const About = () => {
  return (
    <div className='flex flex-col '>
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />
      <AboutSection4 />
      <JumpToTop />
    </div>
  )
}

export default About