import React from 'react'
import HomeSlider from './PageSections/HomeSlider'
import HomeSection2 from './PageSections/HomeSection2'
import HomeSection3 from './PageSections/HomeSection3'
import HomeSection4 from './PageSections/HomeSection4'
import HomeSection5 from './PageSections/HomeSection5'
import HomeSection6 from './PageSections/HomeSection6'
import JumpToTop from '../Components/JumpToTop.jsx'

const Home = () => {
  return (
    <div className='flex flex-col'>
      <HomeSlider />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection6 />
      <JumpToTop />
    </div>
  )
}

export default Home