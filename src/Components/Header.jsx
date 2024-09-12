import React, { useEffect, useState } from 'react';
import { FaPhone as Call } from "react-icons/fa6";
import { IoIosMailOpen as Mail } from "react-icons/io";
import Logo from '../Images/logo.png'; 
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FiMenu as MenuBtn } from "react-icons/fi";
import { IoIosCloseCircle as CloseMenu } from "react-icons/io";

const Navigations = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us/' },
]

const Header = () => {
    const presentLocation = useLocation();
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlHeader = () => {
        if (window.scrollY > lastScrollY && !mobileMenu) {
            // Scrolling down
            setShowHeader(false);
        } else {
            // Scrolling up
            setShowHeader(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlHeader);
        return () => {
            window.removeEventListener('scroll', controlHeader);
        };
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [presentLocation]);

    return (
        <div 
            id='mainHeader'
            className={`w-full flex flex-col transition-transform duration-500 ease-in-out transform ${
                showHeader ? 'translate-y-0' : '-translate-y-full'
            } fixed top-0 left-0 z-20 bg-[var(--sky-blue)]`}
        >
            {/* Top bar for contact info */}
            <div className='w-full hidden lg:flex lg:justify-end bg-[var(--dark-blue)] px-[4%] py-[0.5%]'>
                <a href='tel:+14165604783' className='flex items-center mr-6 text-[3rem] lg:text-[0.8rem] text-[var(--sky-blue)] border-b-[1px] border-[var(--sky-blue)] transition-transform duration-[0.3s] ease-in-out hover:scale-[1.1]'>
                    <Call className='text-[1.0rem] mr-2' /> 416-560-4783
                </a>
                <a href='mailto:zuluservices12@gmail.com' className='flex items-center text-[3rem] lg:text-[0.8rem] text-[var(--sky-blue)] border-b-[1px] border-[var(--sky-blue)] transition-transform duration-[0.3s] ease-in-out hover:scale-[1.1]'>
                    <Mail className='text-[1.0rem] mr-2' /> zuluservices12@gmail.com
                </a>
            </div>

            {/* Main header section */}
            <div className='w-full flex flex-row items-center justify-between py-[4%] lg:py-[1%] px-[4%]'>
                <div className='w-fit p-0'>
                    <img src={Logo} className='w-[9rem] lg:w-[9rem]' alt='Zulu Payroll Services' />
                </div>

                {/* Desktop menu */}
                <div className='hidden lg:flex lg:flex-row items-center w-fit h-fit my-auto' id='DesktopMenu'>
                    {Navigations.map((Menu) => (
                        <Link
                            key={Menu.name}
                            to={Menu.href}
                            className={`lg:text-[1.4rem] ml-[2rem] text-[var(--dark-blue)] font-bold uppercase tracking-[1px] pb-[0.075rem] px-1 border-b-[2px] border-transparent hover:border-[var(--dark-red)] 
                            ${presentLocation.pathname === Menu.href ? 'border-[var(--dark-red)]' : ''}`}
                        >
                            {Menu.name}
                        </Link>
                    ))}
                    <button className='lg:text-[1.4rem] ml-[2rem] bg-[var(--dark-blue)] text-[var(--sky-blue)] px-[1rem] py-[0.3rem] rounded-xl mb-[0.075rem] transition-transform ease-in-out duration-[0.3s] hover:scale-[1.05]'>
                        <HashLink smooth to="/#contact">
                            Contact Us
                        </HashLink>
                    </button>
                </div>

                {/* Mobile menu button */}
                <div className='flex justify-center items-center lg:hidden'>
                    <MenuBtn className='text-[1.5rem]' onClick={() => setMobileMenu(true)} />
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`fixed top-0 left-0 z-10 flex flex-col w-[85%] h-[100vh] bg-[var(--sky-blue)] px-6 py-10 transition-all duration-[0.5s] ease-in-out transform ${
                    mobileMenu ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                }`}
            >
                <div className='flex flex-row justify-between mb-10'>
                    <img src={Logo} className='w-[9rem] h-fit' alt='Mobile Menu Logo' />
                    <CloseMenu className='text-[2rem]' onClick={() => setMobileMenu(false)} />
                </div>
                {Navigations.map((Menu) => (
                    <Link
                        key={Menu.name}
                        to={Menu.href}
                        onClick={() => setMobileMenu(false)}
                        className={`text-[1.3rem] text-[var(--dark-blue)] font-bold uppercase tracking-[1px] pb-[0.075rem] mb-[1rem] px-1 border-b-[2px] border-transparent w-fit ${
                            presentLocation.pathname === Menu.href ? 'border-[var(--dark-red)]' : ''
                        }`}
                    >
                        {Menu.name}
                    </Link>
                ))}
                <HashLink
                    smooth
                    to="/#contact"
                    onClick={() => setMobileMenu(false)}
                    className='text-[1.3rem] text-[var(--dark-blue)] font-bold uppercase tracking-[1px] pb-[0.075rem] mb-[1rem] px-1 '
                >
                    Contact Us
                </HashLink>
            </div>
        </div>
    );
}

export default Header;
