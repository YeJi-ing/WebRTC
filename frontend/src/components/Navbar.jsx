import React, { useEffect, useRef, useState } from 'react';
import '../styles/navbar.css'
//import { useNavigate } from 'react-router-dom'

const Navbar = ({ onHeightChange }) => {
    const navbarRef = useRef(null);
    //const navigate = useNavigate();
    
    useEffect(() => {
        const updateNavbarHeight = () => {
          if (navbarRef.current) {
            onHeightChange(navbarRef.current.offsetHeight);
          }
        };
    
        updateNavbarHeight();
        window.addEventListener('resize', updateNavbarHeight);

        return () => {
          window.removeEventListener('resize', updateNavbarHeight);
        };
      }, [onHeightChange]);


    return (
        <div className='nav'>
            <div className="nav-logo"> 원격진료시스템 by ADAS</div>
            <ul className="nav-menu">
                <li className="nav-home">홈</li>
                <li className="nav-appointment">예약</li>
                <li className="nav-treatment">진료</li>
                <li className="nav-login">로그인</li>  
            </ul>
        </div>
    );
}

export default Navbar;
