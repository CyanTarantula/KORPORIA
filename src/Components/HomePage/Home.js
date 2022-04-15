import "./Home.css"
import Navbar from "../Navbar";
import Footer from "../Footer"

import { Routes, Route, Link } from "react-router-dom";

import Res1 from "../../Images/RestaurantImages/restaurant1.jpg"
import Res2 from "../../Images/RestaurantImages/restaurant2.jpeg"
import Res3 from "../../Images/RestaurantImages/restaurant3.jpg"
import Res4 from "../../Images/RestaurantImages/restaurant4.jfif"
import Res5 from "../../Images/RestaurantImages/restaurant5.jpg"

function HeroSection() {
    return (
        <div className="Hero">
            <div className="Greeting">
                GREETINGS!
            </div>
            <div className="Question">
                What are you craving today?
            </div>
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

function RestaurantBox(props) {
    return (
        <>
            <Link 
                to="/Restaurant"
                state={{
                    resImg: (props.resImg),
                    resName: props.resName
                }}
                style={{
                    color: 'inherit', 
                    textDecoration: 'inherit'
                }}>
                
                <div className="restaurant">
                    <img src={props.resImg} />
                    <p>{props.resName}</p>
                </div>
            </Link>
        </>
    )
}

export default function HomePage() {
    return (
        <div className="HomePage">
            <Navbar />
            <HeroSection />
            
            <div className="Category-and-res">
                <Category value="Popular restaurants near you" />
                <div className="Row-of-res">
                    {/* <Link 
                        to="/Restaurant"
                        state={{
                            resImg: (Res1),
                            resName: "Restaurant 1"
                        }}
                        style={{
                            color: 'inherit', 
                            textDecoration: 'inherit'
                        }}> */}
                        
                        <RestaurantBox 
                            resImg={Res1}
                            resName="Restaurant 1"
                        />
                    {/* </Link> */}
                    
                    {/* <Link 
                        to="/Restaurant"
                        state={{
                            resImg: (Res2),
                            resName: "Restaurant 2"
                        }}
                        style={{
                            color: 'inherit', 
                            textDecoration: 'inherit'
                        }}> */}
                        
                        <RestaurantBox 
                            resImg={Res2}
                            resName="Restaurant 2"
                        />
                    {/* </Link> */}

                    <RestaurantBox 
                        resImg={Res3}
                        resName="Restaurant 3"
                    />
                    <RestaurantBox 
                        resImg={Res4}
                        resName="Restaurant 4"
                    />
                    <RestaurantBox 
                        resImg={Res5}
                        resName="Restaurant 5"
                    />
                </div>
            </div>
            
            <div className="Category-and-res">
                <Category value="New joints in the hood" />
                <div className="Row-of-res">
                    <RestaurantBox 
                        resImg={Res1}
                        resName="Restaurant 1"
                    />
                    <RestaurantBox 
                        resImg={Res2}
                        resName="Restaurant 2"
                    />
                    <RestaurantBox 
                        resImg={Res3}
                        resName="Restaurant 3"
                    />
                    <RestaurantBox 
                        resImg={Res4}
                        resName="Restaurant 4"
                    />
                </div>
            </div>

            <Footer />
        </div>
    )
}
