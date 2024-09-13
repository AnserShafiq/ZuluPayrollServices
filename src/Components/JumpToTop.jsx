import React, { useEffect, useState } from 'react';
import { LuArrowUpRightFromCircle as ScrollUp } from "react-icons/lu";

const JumpToTop = () => {
  const [lastScrollY, setLastScrollY] = useState(100);
  const [showBtn, setBtnDisplay] = useState(false);

  const BtnCall = () => {
    setLastScrollY(window.scrollY);
    if (window.scrollY > 400) {
      setBtnDisplay(true);
    } else {
      setBtnDisplay(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', BtnCall);
    return () => {
      window.removeEventListener('scroll', BtnCall);
    };
  }, [lastScrollY]);

  const toTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Adds smooth scrolling behavior
    });
  };

  return (
    <>
      <div
        className={`fixed p-[.45%] rounded-[100px] bottom-[5%] right-[2%] bg-[var(--dark-blue)] text-[var(--sky-blue)] rotate-[-45deg] ${showBtn ? 'block' : 'hidden'}`}
      >
        <ScrollUp className='text-[1.8vw] cursor-pointer' onClick={toTop} />
      </div>
    </>
  );
};

export default JumpToTop;
