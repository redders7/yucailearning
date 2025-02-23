import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet"; // Import Helmet
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./pages/ScrollToTop";

// Import pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Schedule from "./pages/Schedule";
import TeachingMethodologies from "./pages/TeachingMethodologies";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

import "./App.css"; // Global styles

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Helmet>
          <link rel="icon" type="image/png" href="/assets/images/logo.png" />
        </Helmet>
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route
              path="/teaching-methodologies"
              element={<TeachingMethodologies />}
            />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
