// src/pages/Testimonials.js
import React, { useState } from "react";
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
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setSelectedImageIndex(
      (prevIndex) => (prevIndex + 1) % testimonialImages.length
    );
  };

  const goToPrev = (e) => {
    e.stopPropagation();
    setSelectedImageIndex(
      (prevIndex) =>
        (prevIndex + testimonialImages.length - 1) % testimonialImages.length
    );
  };

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
          <div
            key={index}
            className="photo-item"
            onClick={() => openModal(index)}
          >
            <img
              src={img.default || img}
              alt={`Testimonial ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              ×
            </button>
            <img
              src={
                testimonialImages[selectedImageIndex].default ||
                testimonialImages[selectedImageIndex]
              }
              alt={`Testimonial ${selectedImageIndex + 1}`}
            />
            <div className="modal-nav">
              <button className="prev-button" onClick={goToPrev}>
                &lt;
              </button>
              <button className="next-button" onClick={goToNext}>
                &gt;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
