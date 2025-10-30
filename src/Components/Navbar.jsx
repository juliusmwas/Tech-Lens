import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { RiCameraLensAiLine } from "react-icons/ri";

export default function Navbar () {
    return(
        <nav className="flex  justify-between p-3 h-20 shadow-lg items-center bg-white ">
            <div className="flex items-center gap-2 px-5">
                <span className="text-blue-700"><RiCameraLensAiLine className="text-3xl" /></span>
                <h1 className="text-primary font-bold text-3xl">TechLens</h1>
            </div>
 
            <div>
                <ul className="flex justify-between  font-normal items-center gap-5">
                    <li><a href="#" className="hover:font-medium">Home</a></li>
                    <li><a href="#" className="hover:font-medium">Articles</a></li>
                    <li><a href="#" className="hover:font-medium">Categories</a></li>
                    <li><a href="#" className="hover:font-medium">About</a></li>
                    <li><a href="#" className="hover:font-medium">Contact</a></li>
                </ul>
            </div>

            <div className="flex justify-between items-center gap-5">
                <FaMoon />
                <FiSun />
                <IoMenu className="hidden"/>
                <button className="bg-slate-200">Sign in</button>
                <button className="bg-slate-200">Get Started</button>
            </div>

        </nav>
    );
}