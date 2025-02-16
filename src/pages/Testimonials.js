// src/pages/Testimonials.js
import React from "react";
import "./Testimonials.css";
import { Helmet } from "react-helmet";

// Function to import all images using require.context
function importAll(r) {
  return r.keys().map(r);
}

// Dynamically import all testimonial images from the folder
const testimonialImages = importAll(
  require.context("../assets/images/testimonials", false, /\.jpg$/)
);

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <Helmet>
        <title>Testimonials | Yucai Learning</title>
        <meta
          name="description"
          content="Read testimonials from our students and learn about their experiences."
        />
      </Helmet>
      <h1>Testimonials</h1>
      <div className="photo-wall">
        {testimonialImages.map((img, index) => (
          <div key={index} className="photo-item">
            <img
              src={img.default || img}
              alt={`Testimonial ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
