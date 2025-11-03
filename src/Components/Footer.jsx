import { FaArrowUp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { RiCameraLensAiLine } from "react-icons/ri";





export default function Footer(){

    return(
        <section id="footer">
            <div>
                <div className="grid grid-cols-4">

                    <div>
                        <h1><RiCameraLensAiLine/> Tech Lens</h1>
                        <p>Your daily lens on modern technology</p>
                        <p>Curated insights fro developers.</p>
                    </div>

                    <div>
                        <p>Quick Links</p>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Articles</a></li>
                            <li><a href="">Publish</a></li>
                        </ul>
                    </div>

                    <div>
                        <p>Categories</p>
                        <ul>
                            <li><a href="">AI & Machine Learning</a></li>
                            <li><a href="">Web Development</a></li>
                            <li><a href="">Cloud & DevOps</a></li>
                            <li><a href=""><li><a href="">AI & Machine Learning</a></li></a></li>
                        </ul>
                    </div>

                    <div>
                        <p>Follow Us</p>
                        <ul>
                            <li><a href=""><FaXTwitter /></a></li>
                            <li><a href=""><FaLinkedin /></a></li>
                            <li><a href=""><IoLogoInstagram /></a></li>
                        </ul>
                    </div>

                </div>

                <hr />

                <div>
                    <p>© 2025 Tech Lens. All rights reserved.</p>
                    
                    <ul>
                        <li><a href="">Terms of Use</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Back to top <FaArrowUp /></a></li>
                    </ul>
            
                </div>

            </div>
            
        </section>
    );
}