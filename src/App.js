// // src/App.js
// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Services from "./components/Services";
// import Portfolio from "./components/Portfolio";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//       <Services />
//       <Portfolio />
//       <Testimonials />
//       <Contact />
//       <Footer />
//     </>
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Schedule from "./pages/Schedule";
import TeachingMethodologies from "./pages/TeachingMethodologies";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

import "./App.css"; // Create this file for global styles

function App() {
  return (
    <Router>
      <div className="app">
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
