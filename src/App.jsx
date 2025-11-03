import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Homepage/Navbar";
import Hero from "./Components/Homepage/Hero";
import Categories from "./Components/Homepage/Categories";
import Articles from "./Components/Homepage/Articles";
import Publish from "./Components/Homepage/Publish";
import Footer from "./Components/Homepage/Footer";
import About from "./Components/Pages/About";

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
              <Categories />
              <Articles />
              <Publish />
              <Footer />
            </>
          }
        />

        {/* About page route */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
