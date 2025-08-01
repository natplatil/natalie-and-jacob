import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => window.removeEventListener('resize', showButton);
  }, []);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            N&J
          </Link>

          {/* Hamburger icon only when button is false */}
          {!button && (
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
          )}

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Schedule
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Accommodation
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/meal-choices' className='nav-links' onClick={closeMobileMenu}>
                Meal
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/thingstodo' className='nav-links' onClick={closeMobileMenu}>
                Things To Do
              </Link>
            </li>

            <li>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                RSVP
              </Link>
            </li>
          </ul>
          
          {button && <Button buttonStyle='btn--outline'>RSVP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
