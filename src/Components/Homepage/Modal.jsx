import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Modal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        >

       <motion.div
        className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl w-11/12 max-w-md p-6 relative border border-white/30"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        >

          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <IoClose size={22} />
          </button>

          <h2 className="text-2xl font-semibold mb-4 text-center">
            {isLogin ? "Welcome Back 👋" : "Join TechLens 🚀"}
          </h2>

          {/* Login / Signup Form */}
          <form className="flex flex-col gap-4">
            {!isLogin && (
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">Username</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-slate-500 transition"
                  placeholder="Enter username"
                />
              </div>
            )}
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                className="border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-slate-500 transition"
                placeholder="Enter email"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Password</label>
              <input
                type="password"
                className="border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-slate-500 transition"
                placeholder="Enter password"
              />
            </div>
            <button
              type="submit"
              className="bg-slate-800 text-white py-2 rounded-lg hover:bg-slate-900 transition"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          <p className="text-sm text-gray-600 text-center mt-4">
            {isLogin ? (
              <>
                Don’t have an account?{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setIsLogin(false)}
                >
                  Sign up
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </span>
              </>
            )}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
