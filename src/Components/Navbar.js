import "./Navbar.css"

import { Routes, Route, Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="Navbar">
            <Link to="/" style={{color: 'inherit', textDecoration: 'inherit'}}>
                <div className="Title-and-tagline">
                    <p id="Title">KORPORIA</p>
                    <p id="Tagline">Delivering Euphoria</p>
                </div>
            </Link>
            <div className="Login">
                <Link className="Login-Btn" to="/Login">Login</Link>
            </div>
        </div>
    )
}
