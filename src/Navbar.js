import React, { useState } from 'react';
import { Link } from 'react-scroll'
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import './Navbar.css';

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
      <div className={nav ? 'logo dark' : 'logo'}>
        <h2>Travel and Tour</h2>
      </div>
      <ul className="nav-menu">
                <Link to='/hero' smooth={true} duration={500} ><li>Home</li></Link>
                <Link to='destination' smooth={true} duration={500} ><li>Destination</li></Link>
                <Link to='travel' smooth={true} duration={500} ><li>Travel</li></Link>
                <Link to='services' smooth={true} duration={500} ><li>Team</li></Link>
                <Link to='contact' smooth={true} duration={500} ><li>Contact</li></Link>
            </ul>
            <div className="nav-icons">
                <BiSearch className='icon' style={{ marginRight: '1rem' }} />
                <BsPerson className='icon' />
            </div>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}

            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
                <Link to='about' smooth={true} duration={500} ><li>Destination</li></Link>
                <Link to='carousel' smooth={true} duration={500} ><li>Travel</li></Link>
                <Link to='eat' smooth={true} duration={500} ><li>Team</li></Link>
                <Link to='contact' smooth={true} duration={500} ><li>Contact</li></Link>
                </ul>
                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className="social-icons">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
            </div>
    </div>
  );
}

export default Navbar;
