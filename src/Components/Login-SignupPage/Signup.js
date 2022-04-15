import "./Signup.css"
import Header from "./Log-Sign-up-Header"
import Footer from "../Footer";
import { Routes, Route, Link } from "react-router-dom";

function SignUpForm() {
    return (
        <div className="SignUp-Form">
            <form>
                <p className="Form-Title">Sign Up</p>
                <div className="Input-Fields">
                    <div className="Input-Field">
                        <label for="username">Username</label>
                        <input type="text" placeholder="Enter Username" name="username" required />
                    </div>
                    <div className="Radio-Field">
                        <label for="Account-Type">Account Type</label>
                        <div className="Radio-Btns">
                            <div className="Radio-Btn">
                                <input type="radio" id="Regular-User" name="Account-Type" value="User" />
                                <label for="Regular-User">Regular User</label>
                            </div>
                            <div className="Radio-Btn">
                                <input type="radio" id="Restaurant-Owner" name="Account-Type" value="Owner" />
                                <label for="Restaurant-Owner">Restaurant Owner</label>
                            </div>
                        </div>
                    </div>
                    <div className="Input-Field">
                        <label for="email">Email</label>
                        <input type="text" placeholder="Enter Email" name="email" required />
                    </div>
                    <div className="Input-Field">
                        <label for="passwd">Password</label>
                        <input type="password" placeholder="Enter Password" name="passwd" required />
                    </div>
                    <div className="Input-Field">
                        <label for="cnf-passwd">Confirm Password</label>
                        <input type="password" placeholder="Enter Password again" name="cnf-passwd" required />
                    </div>
                    <div className="Submit">
                        <Link to="/">
                            <button className="Submit-Btn" type="submit">Sign Up!</button>
                        </Link>
                    </div>
                </div>
                <div className="Log-In">
                    <p>Already registered?</p>
                    <a>
                        <Link 
                            to="/Login"
                            style={{
                                color: 'inherit', 
                                textDecoration: 'inherit'
                            }}>
                            Login
                        </Link>
                    </a>
                </div>
            </form>
        </div>
    )
}

export default function SignUpPage() {
    return (
        <div className="SignUpPage">
            <Header />
            <SignUpForm />
            <Footer showOwnerOption={true}/>
        </div>
    )
}
