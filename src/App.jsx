import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./Components/Homepage/Navbar";
import Hero from "./Components/Homepage/Hero";
import Articles from "./Components/Homepage/Articles";
import Publish from "./Components/Homepage/Publish";
import Footer from "./Components/Homepage/Footer";
import About from "./Components/Pages/About";
import Profile from "./Components/Users/Profile";
import Articlespage from "./Components/Pages/Articlespage";
import SingleArticlePage from "./Components/Pages/SingleArticlePage";
import LoginForm from "./Components/Auth/LoginForm";

// Wrapper component to use useNavigate for LoginForm
function LoginWrapper() {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    // redirect after successful login
    navigate("/profile");
  };

  return <LoginForm onLoginSuccess={handleLoginSuccess} />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage route */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Articles />
              <Publish />
              <Footer />
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Articlespage" element={<Articlespage />} />
        <Route path="/article/:id" element={<SingleArticlePage />} />

        {/* Login route */}
        <Route path="/login" element={<LoginWrapper />} />
      </Routes>
    </Router>
  );
}
