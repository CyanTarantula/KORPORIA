import "./Login.css"
import Footer from "../Footer";
import Logo from "../../Images/Logo/logo.png"
import { Routes, Route, Link } from "react-router-dom";

function Header() {
    return (
        <div className="Login-Header">
            <div className="Title-Section">
                <div className="Icon">
                    <img src={Logo} />
                </div>
                <div className="Title-and-tagline">
                    <p id="Title">KORPORIA</p>
                    <p id="Tagline">Delivering Euphoria</p>
                </div>
            </div>
            <p id="Greeting">Welcome!</p>
        </div>
    )
}

function LoginForm() {
    return (
        <div className="Login-Form">
            <form>
                <p className="Form-Title">Login</p>
                <div className="Input-Fields">
                    <div className="Input-Field">
                        <label for="username">Username/Email</label>
                        <input type="text" placeholder="Enter Username or Email" name="username" required />
                    </div>
                    <div className="Input-Field">
                        <label for="passwd">Password</label>
                        <input type="text" placeholder="Enter Password" name="passwd" required />
                    </div>
                    <div className="Submit">
                        <Link to="/">
                            <button className="Submit-Btn" type="submit">Login</button>
                        </Link>
                    </div>
                </div>
                <div className="Sign-Up">
                    <p>New to Korporia?</p>
                    <a>Sign up</a>
                </div>
            </form>
        </div>
    )
}

export default function LoginPage() {
    return (
        <div className="LoginPage">
            <Header />
            <LoginForm />
            <Footer showOwnerOption={true}/>
        </div>
    )
}
