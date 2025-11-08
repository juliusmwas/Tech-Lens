import { useState } from "react";

export default function LoginForm({ onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

   const endpoint = isLogin
  ? "http://localhost:5000/api/auth/login"
  : "http://localhost:5000/api/auth/signup";

console.log("🧾 Sending data:", formData);


    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Something went wrong");
      }

      const data = await res.json();
      console.log("✅ Success:", data);

      if (data.token) localStorage.setItem("token", data.token);
      setFormData({ username: "", email: "", password: "" });

      onLoginSuccess();
    } catch (err) {
      console.error("❌ Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
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
              name="username"
              type="text"
              onChange={handleChange}
              value={formData.username}
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="Enter username"
              required
            />
          </div>
        )}

        <div>
          <label className="text-sm text-gray-600 mb-1">Email</label>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            value={formData.email}
            className="border border-gray-300 rounded-lg p-2 w-full"
            placeholder="Enter email"
            required
          />
        </div>

        <div>
          <label className="text-sm text-gray-600 mb-1">Password</label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            value={formData.password}
            className="border border-gray-300 rounded-lg p-2 w-full"
            placeholder="Enter password"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-slate-800 text-white py-2 rounded-lg hover:bg-slate-900 transition"
        >
          {loading ? "Please wait..." : isLogin ? "Login" : "Sign Up"}
        </button>

        {error && <p className="text-red-500 text-center text-sm">{error}</p>}
      </form>

      <p className="text-sm text-gray-600 text-center mt-4">
        {isLogin ? (
          <>
            Don’t have an account?{" "}
            <span className="text-blue-600 cursor-pointer" onClick={() => setIsLogin(false)}>
              Sign up
            </span>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <span className="text-blue-600 cursor-pointer" onClick={() => setIsLogin(true)}>
              Login
            </span>
          </>
        )}
      </p>
    </div>
  );
}
