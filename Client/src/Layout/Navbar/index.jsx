import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import './index.scss'
const Navbar = () => {
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
        </div>
      </div>
    </>
  )
}

export default Navbar
