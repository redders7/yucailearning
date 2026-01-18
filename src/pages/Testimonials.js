// src/pages/Testimonials.js
import React, { useState, useEffect, useCallback } from "react";
import "./Testimonials.css";
import { Helmet } from "react-helmet";

// Function to import all images using require.context with reverse sorting by id
function importAll(r) {
  // Get keys and sort them in reverse order based on the number in the filename
  const sortedKeys = r.keys().sort((a, b) => {
    const numA = parseInt(a.match(/(\d+)/)?.[1] || 0, 10);
    const numB = parseInt(b.match(/(\d+)/)?.[1] || 0, 10);
    return numB - numA; // Reverse order (highest number first)
  });
  return sortedKeys.map(r);
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

  const goToNext = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedImageIndex(
      (prevIndex) => (prevIndex + 1) % testimonialImages.length
    );
  }, []);

  const goToPrev = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedImageIndex(
      (prevIndex) =>
        (prevIndex + testimonialImages.length - 1) % testimonialImages.length
    );
  }, []);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;

      if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, goToNext, goToPrev]);

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
