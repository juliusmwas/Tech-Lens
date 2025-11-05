import { useState } from "react";

export default function LoginForm({ onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // simulate login success
    onLoginSuccess();
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">
        {isLogin ? "Welcome Back 👋" : "Join TechLens 🚀"}
      </h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {!isLogin && (
          <div>
            <label className="text-sm text-gray-600 mb-1">Username</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="Enter username"
            />
          </div>
        )}

        <div>
          <label className="text-sm text-gray-600 mb-1">Email</label>
          <input
            type="email"
            className="border border-gray-300 rounded-lg p-2 w-full"
            placeholder="Enter email"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600 mb-1">Password</label>
          <input
            type="password"
            className="border border-gray-300 rounded-lg p-2 w-full"
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
    </div>
  );
}
