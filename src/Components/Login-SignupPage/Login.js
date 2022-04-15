import "./Login.css"
import Header from "./Log-Sign-up-Header"
import Footer from "../Footer";
import { Routes, Route, Link } from "react-router-dom";

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
                        <input type="password" placeholder="Enter Password" name="passwd" required />
                    </div>
                    <div className="Submit">
                        <Link to="/">
                            <button className="Submit-Btn" type="submit">Login</button>
                        </Link>
                    </div>
                </div>
                <div className="Sign-Up">
                    <p>New to Korporia?</p>
                    <a>
                        <Link 
                            to="/SignUp"
                            style={{
                                color: 'inherit', 
                                textDecoration: 'inherit'
                            }}>
                            Sign Up
                        </Link>
                    </a>
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
