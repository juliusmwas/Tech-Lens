import { useState, useEffect, useRef } from "react";
import { IoMenu } from "react-icons/io5";
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

    return(
        <nav className="flex  justify-between p-3 h-20 shadow-lg items-center bg-gradient-to-r from-slate-100 via-white to-slate-200 text-slate-800 ">
            <div className="flex items-center gap-2 px-5">
                <span className="text-blue-700"><RiCameraLensAiLine className="text-3xl" /></span>
                <h1 className="font-bold text-3xl">TechLens</h1>
            </div>
 
            <div>
                <ul className="flex justify-between  font-normal text-sm items-center gap-5">
                    <li><a href="#" className="hover:font-medium">Home</a></li>
                    <li><a href="#" className="hover:font-medium">Articles</a></li>
                    <li><a href="#" className="hover:font-medium">Categories</a></li>
                    <li><a href="#" className="hover:font-medium">Resources</a></li>
                    <li><a href="#" className="hover:font-medium">About</a></li>
                    <li><a href="#" className="hover:font-medium">Contact</a></li>
                </ul>
            </div>

            <div
                ref={containerRef}
                onClick={() => setIsFocused(true)}
                className={`flex items-center bg-surface border border-border rounded-lg px-3 py-1 cursor-text transition-all duration-300
                    ${isFocused ? "w-52 sm:w-72" : "w-28"}
                `}
                >
                <CiSearch className=" text-sm flex-shrink-0" />
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent outline-none text-sm  ml-2 w-full"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
            </div>

            <div className="flex justify-between items-center gap-5">
                <IoMenu className="hidden"/>
                <button className=" px-3 py-1 rounded-lg border-2 font-medium cursor-pointer">Sign in</button>
                <button className="bg-slate-800 text-slate-100 px-3 py-1 rounded-lg border-2 font-medium cursor-pointer">Get Started</button>
            </div>

        </nav>
    );
}