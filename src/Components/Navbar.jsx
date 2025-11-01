import { useState, useEffect, useRef } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { RiCameraLensAiLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";


export default function Navbar () {

    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);
    const containerRef = useRef(null);

    // Collapse when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setIsFocused(false);
        }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Focus input when expanded
    useEffect(() => {
        if (isFocused) inputRef.current?.focus();
    }, [isFocused]);

    const [toggle, setToggle] = useState (false)
    const menuToggle = () =>{
        setToggle(!toggle)
    }

    return(
        <div>
            <nav className="flex  justify-between p-3 h-20 shadow-sm items-center bg-gradient-to-r from-slate-200 via-white to-slate-300 text-slate-800 ">
                <div className="flex items-center gap-1 lg:gap-2 lg:px-5">
                    <span className="text-blue-700"><RiCameraLensAiLine className="text-xl lg:text-3xl" /></span>
                    <h1 className="font-bold text-lg lg:text-3xl">TechLens</h1>
                </div>
    
                <div>
                    <ul className=" justify-between  font-normal text-sm items-center gap-5 hidden lg:flex">
                        <li><a href="#home" className="hover:font-medium">Home</a></li>
                        <li><a href="#" className="hover:font-medium">Articles</a></li>
                        <li><a href="#" className="hover:font-medium">Categories</a></li>
                        <li><a href="#" className="hover:font-medium">Resources</a></li>
                        <li><a href="#" className="hover:font-medium">About</a></li>
                        
                    </ul>
                </div>

                <div
                    ref={containerRef}
                    onClick={() => setIsFocused(true)}
                    className={`flex items-center  border border-gray-400 rounded-lg px-3 lg:py-1 cursor-text transition-all duration-300
                        ${isFocused ? "w-52 sm:w-72" : "w-28"}
                    `}
                    >
                    <CiSearch className=" text-sm flex-shrink-0" />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent outline-none text-sm  ml-1 w-full"
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                </div>
                
                <div className="block lg:hidden text-2xl cursor-pointer" onClick={menuToggle}>
                    {toggle? <IoClose /> :  <IoMenu/> }
                </div>
                <div className="hidden lg:flex justify-between items-center gap-5">
                    <button className=" px-3 py-1 rounded-lg border border-gray-400 font-medium cursor-pointer">Sign in</button>
                    <button className="bg-slate-800 text-slate-100 px-3 py-1 rounded-lg  font-medium cursor-pointer">Get Started</button>
                </div>
            </nav>
        
        {/* Mobile menu goes below */}
        
        <div className={`w-3/4 grid justify-items-center fixed z-50 right-0 h-full top-20 bg-slate-800 transition-transform duration-300 ${toggle ? "translate-x-0" : "translate-x-full"}`} >
            <ul className="flex flex-col p-2 text-slate-100  font-normal text-sm items-center gap-5">
                <li><a href="#home" className="hover:font-medium">Home</a></li>
                <li><a href="#" className="hover:font-medium">Articles</a></li>
                <li><a href="#" className="hover:font-medium">Categories</a></li>
                <li><a href="#" className="hover:font-medium">Resources</a></li>
                <li><a href="#" className="hover:font-medium">About</a></li>
                <button className=" px-3 py-1  rounded-lg border w-full border-gray-400 font-normal cursor-pointer">Sign in</button>
                <button className="bg-white text-slate-800 w-full px-3 py-1 rounded-lg  font-normal cursor-pointer">Get Started</button>
            </ul>  
        </div>
            {toggle && <div className="fixed top-20 left-0 w-full h-full  transition-opacity duration-300 z-40" onClick={() => setToggle(false)}></div>} 
        </div>
    );
}