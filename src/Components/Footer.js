import "./Footer.css"
import linkedinLogo from "../Images/SocialMedia/linkedin.png"
import instaLogo from "../Images/SocialMedia/instagram.png"
import twitterLogo from "../Images/SocialMedia/twitter.png"
import youtubeLogo from "../Images/SocialMedia/youtube.png"
import facebookLogo from "../Images/SocialMedia/facebook.png"

export default function Footer(props) {
    return (
        <footer>
            <div className="footer-section">
                <div className="left-section">
                    <div className="sub-section">
                        <h4>About</h4>
                        <a id="Meet" href="https://www.google.com">Meet the team</a>
                        <a href="#">Our mission statement</a>
                        <a href="#">Work opportunities</a>
                    </div>
                    <div className="sub-section">
                        <h4>Contact</h4>
                        <a href="#">The developers</a>
                        <a href="#">The owners</a>
                    </div>
                    {
                        props.showOwnerOption
                        &&
                        <div className="sub-section">
                            <h4>For Owners</h4>
                            <a href="#">Add restaurant</a>
                            <a href="#">Manage your restaurant</a>
                        </div>
                    }
                </div>

                <div className="right-section">
                    <div className="Contact">
                        <h4>Social Links</h4>
                        <div className="Social-Media-Links">
                            <a href="">
                                <img src={linkedinLogo} alt="LinkedIn"/>
                            </a>
                            <a href="#">
                                <img src={instaLogo} alt="Instagram"/>
                            </a>
                            <a href="#">
                                <img src={twitterLogo} alt="Twitter"/>
                            </a>
                            <a href="#">
                                <img src={youtubeLogo} alt="Youtube"/>
                            </a>
                            <a href="#">
                                <img src={facebookLogo} alt="Facebook"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
