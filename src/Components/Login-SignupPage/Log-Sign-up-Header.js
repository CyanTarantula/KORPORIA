import "./Log-Sign-up-Header.css"
import Logo from "../../Images/Logo/logo.png"

export default function Header() {
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
