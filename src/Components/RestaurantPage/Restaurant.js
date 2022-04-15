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

function DishBox(props) {
    const [isOpen, setIsOpen] = useState(false);
    
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const location = useLocation()
    const {resImg, resName} = location.state

    return (
        <>                
            <div className="dish" onClick={togglePopup}>
                <img src={props.dishImg} />
                <p>{props.dishName}</p>
            </div>
            
            {
                isOpen && <Popup
                dishName = {props.dishName}
                dishImg = {props.dishImg}
                description = {props.description}
                dishIngredients = {props.dishIngredients}
                dishNutritions = {props.dishNutritions}
                // content={<>
                //     <b>{props.dishName}</b>
                //     <img style={{
                //         content: `url(${props.dishImg})`,
                //         width: "100%"
                //     }} />
                //     <div style={{
                //         textAlign: "left"
                //     }}>
                //         <p>Ingredients:</p>
                //         <p>
                //             {props.dishIngredients}
                //         </p>

                //     </div>
                // </>}
                handleClose={togglePopup}
                />
            }
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
                    description="Noodles are a type of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings. Noodles can be refrigerated for short-term storage or dried and stored for future use. Noodles are usually cooked in boiling water, sometimes with cooking oil or salt added."
                    dishIngredients="Noodles, Bell pepper, Tomato, Onion"
                    dishNutritions="Calories: 188.
                    Carbs: 27 grams"
                />
                <DishBox 
                    dishImg={Dish3}
                    dishName="Dish 3"
                    description="A hamburger is a sandwich consisting of a cooked meat patty on a bun or roll. Hamburgers are traditionally made with ground beef and served with onions, tomatoes, lettuce, ketchup, and other garnishes."
                    dishIngredients="Buns, Beef, Cheese, Lettuce, Onion, Tomato and Pickle."
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

            {
                // function isEventSupported(eventName) {
                //     var el = document.createElement('div')
                //     eventName = 'on' + eventName
                //     var isSupported = (eventName in el)
                //     if (!isSupported) {
                //         el.setAttribute(eventName, 'return;')
                //         isSupported = typeof el[eventName] == 'function'
                //     }
                //     el = null
                //     return isSupported
                // }

                // (document).ready(function() {
                //     var wheelEvent = isEventSupported('mousewheel') ? 'mousewheel' : 'wheel';
                    
                //     document.querySelector("#Row-of-dish").on(wheelEvent, function(e) {
                //         var oEvent = e.originalEvent,
                //             delta  = oEvent.deltaY || oEvent.wheelDelta;
                        
                //         if (delta > 0) {
                //             // Scrolled up
                //         } else {
                //             // Scrolled down
                //         }
                //     });
                // })
            }
            
            {/* <Category value="Fast-food" />
            <div className="Row-of-dish">
                <DishBox 
                    dishImg={Dish1}
                    dishName="Dish 1"
                />
                <DishBox 
                    dishImg={Dish2}
                    dishName="Dish 2"
                    // description="Yummy noodles........"
                    description="Noodles are a type of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings. Noodles can be refrigerated for short-term storage or dried and stored for future use. Noodles are usually cooked in boiling water, sometimes with cooking oil or salt added."
                    dishIngredients="Noodles, Bell pepper, Tomato, Onion"
                    dishNutritions="Calories: 188.
                    Carbs: 27 grams"
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
            </div> */}

            <Footer />
        </div>
    )
}
