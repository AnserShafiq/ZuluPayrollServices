import React, { lazy, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './Pages/Home'
// import About from './Pages/About'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Loading from './Components/Loading';

const withDelay = (WrappedComponent, delay = 2000) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, delay);

      return () => clearTimeout(timer);
    });

    return isLoading ? <Loading /> : <WrappedComponent {...props} />;
  };
};

const Home = withDelay(lazy(() => import('./Pages/Home')));
const About = withDelay(lazy(() => import('./Pages/About')));



const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us/' element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App