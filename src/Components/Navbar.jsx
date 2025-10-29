import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";

export default function Navbar () {
    return(
        <nav className="flex justify-between p-2 items-center bg-amber-200">
            <div>
               <h1>Tech <span>Lens</span></h1>
            </div>

            <div>
                <ul className="flex justify-between items-center gap-5">
                    <li>Home</li>
                    <li>Articles</li>
                    <li>Categories</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="flex justify-between items-center gap-5">
                <FaMoon />
                <FiSun />
                <IoMenu className="hidden"/>
                <button>Get Started</button>
            </div>

        </nav>
    );
}