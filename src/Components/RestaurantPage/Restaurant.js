import "./Restaurant.css"
import Navbar from "../Navbar"
import Footer from "../Footer"
import Popup from "../DishPage/Dish";

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import { Routes, Route, Link } from "react-router-dom";

import Dish1 from "../../Images/Dishes/dish1.jpg"
import Dish2 from "../../Images/Dishes/dish2.jpeg"
import Dish3 from "../../Images/Dishes/dish3.jpeg"
import Dish4 from "../../Images/Dishes/dish4.jpeg"
import Dish5 from "../../Images/Dishes/dish5.jpeg"

function HeroSection() {
    const location = useLocation()
    const {resImg, resName} = location.state
    return (
        <div className="Restaurant-Name" style={{backgroundImage: `url(${resImg})`}}>
            {resName}
        </div>
    )
}

function Category(props) {
    return (
        <div className="category">
            {props.value}
        </div>
    )
}

// function DishPopUp(props) {
//     // React.useEffect(() => {
//     //     window.addEventListener('click', () => {

//     //     });
//     // }, []);
//     return (
//         <div id="Dish-pop-up">
//             {/* {
//                 var popUp = document.getElementById('Dish-pop-up');
//                 window.onclick = function (event) {
//                     if (event.target == popUp) {
//                         popUp.style.display = "none"
//                     }
//                 }
//             } */}
//             <button onClick={() => {document.getElementById('Dish-pop-up').style.display = "none"}}>Close</button>
//             <p>{props.dishName}</p>
//         </div>
//     )
// }

function DishBox(props) {
    const [isOpen, setIsOpen] = useState(false);
    
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const location = useLocation()
    const {resImg, resName} = location.state

    return (
        <>
            {/* <Link 
                to="/Dish"
                state={{
                    resImg: resImg,
                    resName: resName,
                    dishImg: props.dishImg,
                    dishName: props.dishName
                }}
                style={{
                    color: 'inherit', 
                    textDecoration: 'inherit'
                }}> */}
                
                <div className="dish" onClick={togglePopup}>
                    <img src={props.dishImg} />
                    <p>{props.dishName}</p>
                </div>
                
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                
                {
                    isOpen && <Popup
                    content={<>
                        <b>Design your Popup</b>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button>Test button</button>
                    </>}
                    handleClose={togglePopup}
                    />
                }
                {/* {
                    this.state.clicked &&
                    <DishPopUp dishImg={props.dishImg} dishName={props.dishName} />
                } */}
            {/* </Link> */}
        </>
    )
}

export default function RestaurantPage() {
    // console.log(props)
    return (
        <div className="Restaurant-Page">
            <Navbar />
            {/* <HeroSection resImg={(props.resImg)} resName={(props.resName)} /> */}
            <HeroSection />

            <Category value="Fast-food" />
            <div className="Row-of-dish">
                <DishBox 
                    dishImg={Dish1}
                    dishName="Dish 1"
                />
                <DishBox 
                    dishImg={Dish2}
                    dishName="Dish 2"
                />
                <DishBox 
                    dishImg={Dish3}
                    dishName="Dish 3"
                />
                <DishBox 
                    dishImg={Dish4}
                    dishName="Dish 4"
                />
                <DishBox 
                    dishImg={Dish5}
                    dishName="Dish 5"
                />
            </div>

            <Footer />
        </div>
    )
}
