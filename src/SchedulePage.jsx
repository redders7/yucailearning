// src/pages/SchedulePage.jsx

import React from "react";
import Navbar from "../components/Navbar";
import Schedule from "../components/Schedule";
import Footer from "../components/Footer"; // Assuming you have a Footer component

const SchedulePage = () => {
  // Sample events data
  const events = [
    {
      date: "September 20, 2025",
      time: "10:00 AM - 12:00 PM",
      instructor: "John Doe",
    },
    {
      date: "September 22, 2025",
      time: "2:00 PM - 4:00 PM",
      instructor: "Jane Smith",
    },
    {
      date: "September 25, 2025",
      time: "6:00 PM - 8:00 PM",
      instructor: "Emily Johnson",
    },
    // Add more events as needed
  ];

  return (
    <>
      <Navbar />
      <Schedule events={events} />
      <Footer />
    </>
  );
};

export default SchedulePage;
