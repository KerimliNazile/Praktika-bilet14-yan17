import React, { useContext } from 'react'
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BsSuitHeartFill } from "react-icons/bs";
import './index.scss'
import { WishlistContext } from '../../context/WishlistContext';
import { Link } from 'react-router-dom';
const Card = ({ image, title, text, star, heart, product, id }) => {
    const { addWish } = useContext(WishlistContext)
    return (
        <>
            <div className="CardArea">
                <div className="CardBox">
                    <div className="CardImg">
                        <img src={image} alt="" />
                    </div>
                    <div className="CardTitle">
                        <h1>{title}</h1>
                        <div className="CardIcon">
                            <div> <FaStar /> <p>{star}</p></div>
                            <div> <FaHeart /><p>{heart}</p></div>
                        </div>
                        <p>{text}</p>
                    </div>
                    <div className="Add">
                        <div className="AddCard">
                            <div><button>CART</button></div>
                        </div>
                        <div className="AddView">
                            <div><Link to={`/${id}`}><button>VIEW</button></Link></div>
                        </div>
                        <div className="AddWish">
                            <div onClick={() => addWish(product)}><BsSuitHeartFill className='wish' /></div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Card
