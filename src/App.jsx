import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Homepage/Navbar";
import Hero from "./Components/Homepage/Hero";
import Articles from "./Components/Homepage/Articles";
import Publish from "./Components/Homepage/Publish";
import Footer from "./Components/Homepage/Footer";
import About from "./Components/Pages/About";
import Profile from "./Components/Users/Profile";
import Articlespage from "./Components/Pages/Articlespage";

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

        {/* About page route */}
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Articlespage" element={<Articlespage />} />
      </Routes>
    </Router>
  );
}
