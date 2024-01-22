import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import './index.scss'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className="Navbar">
        <div className="MainNav">
          <div className="NavText">
            <h1>Selling. </h1>

          </div>
          <div className="NavIn">
            <ul className='NavbarUl'>
              <li><NavLink to={"/home"}>Home</NavLink></li>
              <li>Products</li>
              <li>About Us</li>
              <li>Special</li>
              <li>Testiminol</li>
              <li>Blog</li>
              <li>Contact</li>
              <li><NavLink to={"/add"}>Add Page</NavLink></li>
              <li><NavLink to={"/wishlist"}><FaHeart /></NavLink></li>
              <li><NavLink to={"/basket"}><FaCartArrowDown /></NavLink></li>
            </ul>
          </div>
          <div id='mobile' onClick={handleClick}>

            {
              isOpen ? <IoClose /> : <GiHamburgerMenu />
            }
          </div>
        </div>

      </div>
      <div className={`${isOpen ? 'navList_active' : 'navList_close'} navList `}>
        <ul>
          <li><NavLink to={"/home"}>Home</NavLink></li>
          <li>Products</li>
          <li>About Us</li>
          <li>Special</li>
          <li>Testiminol</li>
          <li>Blog</li>
          <li>Contact</li>
          <li><NavLink to={"/add"}>Add Page</NavLink></li>
        </ul>
      </div>

    </>
  )
}

export default Navbar
