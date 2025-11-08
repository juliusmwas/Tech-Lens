import { FaArrowUp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { RiCameraLensAiLine } from "react-icons/ri";
import { Link } from "react-router-dom";





export default function Footer(){

    return(
        <section id="footer">
            <div className="bg-slate-800 mt-10 text-slate-200">
                <div className="flex justify-between px-10">

                    <div className="mt-5 mb-5 w-64">
                        <h1 className="flex items-center gap-2 text-2xl font-bold"><RiCameraLensAiLine /> TechLens</h1>
                        <p className="text-gray-400 text-sm mt-2">Your daily lens on modern technology</p>
                        <p className="text-gray-400 text-sm mt-2">Curated insights for developers and innovators.</p>
                    </div>

                    <div className="mt-5 mb-5 w-64">
                        <h2 className="text-lg font-medium">Quick Links</h2>
                        <ul className="text-gray-400 text-sm">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#articles">Articles</a></li>
                            <li><a href="#publish">Publish</a></li>
                            <Link to="/about" className="hover:text-primary">About</Link>

                        </ul>
                    </div>

                    <div className="mt-5 mb-5 w-64">
                        <h2 className="text-lg font-medium">Categories</h2>
                        <ul className="text-gray-400 text-sm">
                            <li><a href="#">AI & Machine Learning</a></li>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">Cloud & DevOps</a></li>
                            <li><a href="#">AI & Machine Learning</a></li>
                        </ul>
                    </div>

                    <div className="mt-5 mb-5 w-64">
                        <h2 className="text-lg font-medium">Follow Us</h2>
                        <ul className="text-gray-400 text-sm">
                            <li className="mt-2"><a href=""><FaXTwitter /></a></li>
                            <li className="mt-2"><a href=""><FaLinkedin /></a></li>
                            <li className="mt-2"><a href=""><IoLogoInstagram /></a></li>
                        </ul>
                    </div>

                </div>

                <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />

                <div className="flex items-center justify-between px-10 py-3 mt-5">
                    <p className="text-gray-400 text-sm mb-2">© 2025 Tech Lens. All rights reserved.</p>
                    
                    <ul className="flex items-center text-gray-400 text-sm mb-2 gap-5">
                        <li><a href="">Terms of Use</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <button className="flex items-center cursor-pointer gap-2">Back to top <FaArrowUp /></button>
                    </ul>
            
                </div>

            </div>
            
        </section>
    );
}