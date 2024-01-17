import React from 'react'
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './index.scss'
const Leader = () => {
    return (
        <>
            <section id='LeaderShip'>
                <div className="LeaderShipArea">
                    <div className="LeaderText">
                        <h1>Leadership</h1>
                    </div>
                    <div className="BoxArea">
                        <div className="Box">
                            <img src="https://preview.colorlib.com/theme/selling/images/person_2.jpg.webp" alt="" />
                            <h5>John Rooster</h5>
                            <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                            <div className="BoxIcon">
                            <ImFacebook />
                            <FaTwitter />
                            <FaInstagram />

                            </div>
                        </div>
                        <div className="Box">
                            <img src="https://preview.colorlib.com/theme/selling/images/person_2.jpg.webp" alt="" />
                            <h5>John Rooster</h5>
                            <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                            <div className="BoxIcon">
                            <ImFacebook />
                            <FaTwitter />
                            <FaInstagram />

                            </div>
                        </div>
                        <div className="Box">
                            <img src="https://preview.colorlib.com/theme/selling/images/person_2.jpg.webp" alt="" />
                            <h5>John Rooster</h5>
                            <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                            <div className="BoxIcon">
                            <ImFacebook />
                            <FaTwitter />
                            <FaInstagram />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Leader
