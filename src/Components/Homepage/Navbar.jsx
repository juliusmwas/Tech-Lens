import { useState, useEffect, useRef } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { RiCameraLensAiLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import LoginForm from "../Auth/LoginForm";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // ✅ When login succeeds, close modal and redirect to /profile
  const handleLoginSuccess = () => {
    setIsModalOpen(false);
    setIsLoggedIn(true);
    navigate("/profile"); // redirect to full profile page
  };

  // 🔍 Search input focus handling
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isFocused) inputRef.current?.focus();
  }, [isFocused]);

  // 📱 Mobile menu toggle
  const [toggle, setToggle] = useState(false);
  const menuToggle = () => setToggle(!toggle);

  return (
    <div>
      <nav className="flex justify-between p-3 h-20 shadow-sm items-center bg-gradient-to-r from-slate-200 via-white to-slate-300 text-slate-800 fixed top-0 w-full z-40">
        {/* Logo */}
        <div className="flex items-center gap-1 lg:gap-2 lg:px-5">
          <span className="text-blue-700">
            <RiCameraLensAiLine className="text-xl lg:text-3xl" />
          </span>
          <h1 className="font-bold text-lg lg:text-3xl">TechLens</h1>
        </div>

        {/* Nav Links */}
        <div>
          <ul className="justify-between font-normal text-sm items-center gap-5 hidden lg:flex">
            <li><a href="#home" className="hover:font-medium">Home</a></li>
            <li><a href="#articles" className="hover:font-medium">Articles</a></li>
            <li><a href="#publish" className="hover:font-medium">Publish</a></li>
            <Link to="/about" className="hover:text-primary">About</Link>
            {isLoggedIn && <Link to="/profile" className="hover:text-primary">Profile</Link>}
          </ul>
        </div>

        {/* Search Bar */}
        <div
          ref={containerRef}
          onClick={() => setIsFocused(true)}
          className={`flex items-center border border-gray-400 rounded-lg px-3 lg:py-1 cursor-text transition-all duration-300
            ${isFocused ? "w-52 sm:w-72" : "w-28"}
          `}
        >
          <CiSearch className="text-sm flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm ml-1 w-full"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>

        {/* Mobile menu button */}
        <div className="block lg:hidden text-2xl cursor-pointer" onClick={menuToggle}>
          {toggle ? <IoClose /> : <IoMenu />}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex justify-between items-center gap-5">
          {!isLoggedIn ? (
            <>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-3 py-1 rounded-lg border border-gray-400 font-medium cursor-pointer"
              >
                Sign in
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-slate-800 text-slate-100 px-3 py-1 rounded-lg font-medium cursor-pointer"
              >
                Get Started
              </button>
            </>
          ) : (
            <Link
              to="/profile"
              className="bg-slate-800 text-white px-3 py-1 rounded-lg font-medium cursor-pointer"
            >
              Profile
            </Link>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`w-3/4 grid justify-items-center fixed z-50 right-0 h-full top-20 bg-slate-800 transition-transform duration-300 ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col p-2 text-slate-100 font-normal text-sm items-center gap-5">
          <li><a href="#home" className="hover:font-medium">Home</a></li>
          <li><a href="#articles" className="hover:font-medium">Articles</a></li>
          <li><a href="#publish" className="hover:font-medium">Publish</a></li>
          <Link to="/about" className="hover:text-primary">About</Link>

          {!isLoggedIn ? (
            <>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-3 py-1 rounded-lg border w-full border-gray-400 font-normal cursor-pointer"
              >
                Sign in
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-slate-800 w-full px-3 py-1 rounded-lg font-normal cursor-pointer"
              >
                Get Started
              </button>
            </>
          ) : (
            <Link
              to="/profile"
              className="bg-white text-slate-800 w-full px-3 py-1 rounded-lg font-normal cursor-pointer text-center"
            >
              Profile
            </Link>
          )}
        </ul>
      </div>

      {/* Dark Overlay for mobile menu */}
      {toggle && (
        <div
          className="fixed top-20 left-0 w-full h-full bg-black/50 transition-opacity duration-300 z-40"
          onClick={() => setToggle(false)}
        ></div>
      )}

      {/* Login Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      </Modal>
    </div>
  );
}
