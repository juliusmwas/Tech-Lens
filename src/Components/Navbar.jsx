import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";

export default function Navbar () {
    return(
        <nav className="bg-blue-950">
            <div>
                <img src="/public/Logo .png" alt="" />
            </div>

            <div>
                <ul>
                    <li>Home</li>
                    <li>Articles</li>
                    <li>Categories</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div>
                <FaMoon />
                <FiSun />
                <IoMenu />
            </div>
        </nav>
    );
}