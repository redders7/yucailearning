// src/pages/Home.js
import React from "react";
import "./Home.css"; // Import the CSS file for styling
import { Helmet } from "react-helmet"; // For SEO optimization
import { Link } from "react-router-dom"; // For CTA button

// Import images
import heroBg from "../assets/images/home-hero-bg.jpg"; // Full-width hero background
import philosophyImage from "../assets/images/class1.jpg"; // Chinese section image
import studentImage from "../assets/images/student4.jpg"; // English section image

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Yucai Learning</title>
        <meta
          name="description"
          content="Unlock the beauty of the Chinese language with personalized instruction tailored to your learning needs."
        />
      </Helmet>

      {/* Full-Width Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-overlay">
          <h1>Welcome to Yucai Learning</h1>
          <p>
            Master Chinese with personalized lessons designed to fit your
            learning style and goals.
          </p>
          <Link to="/contact" className="cta-button">
            Get Started
          </Link>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="home-container">
        {/* Our Philosophy Section */}
        <section className="philosophy-section">
          <h2>Our Philosophy</h2>
          <div className="english-content">
            <div className="english-text">
              <ul>
                <li>
                  <strong>Tailored Learning:</strong> Foster a passion for
                  Chinese through a strengths-based approach.
                </li>
                <li>
                  <strong>Aligned Materials:</strong> Create custom materials
                  that align with school curricula and exams.
                </li>
                <li>
                  <strong>Personalized Support:</strong> Boost each student's
                  proficiency and confidence in Chinese.
                </li>
                <li>
                  <strong>Individual Attention:</strong> Encourage critical
                  thinking in an interactive classroom.
                </li>
                <li>
                  <strong>Measurable Progress:</strong> Help students enhance
                  listening, speaking, reading, and writing skills.
                </li>
                <li>
                  <strong>Curriculum Updates:</strong> Regularly update courses
                  to meet MOE standards.
                </li>
                <li>
                  <strong>Exam Preparation:</strong> Specialize in PSLE and
                  O-Level strategies and techniques.
                </li>
              </ul>
            </div>
            <div className="english-image">
              <img
                src={studentImage}
                alt="Philosophy English Illustration"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* 我们的宗旨 Section */}
        <section className="philosophy-section chinese-philosophy">
          <h2>我们的宗旨</h2>
          <div className="chinese-content">
            <div className="chinese-text">
              <ul>
                <li>
                  <strong>基于优势的方法：</strong>{" "}
                  激发学生对学习中文的热爱，打下坚实的基础。
                </li>
                <li>
                  <strong>自编教材：</strong>{" "}
                  围绕学校课本和考试要求，根据学生程度因材施教。
                </li>
                <li>
                  <strong>个性化关注：</strong> 提升学生的语言能力和自信。
                </li>
                <li>
                  <strong>批判性思维培养：</strong>{" "}
                  营造互动性和吸引力的课堂氛围。
                </li>
                <li>
                  <strong>技能进步：</strong>{" "}
                  帮助学生在听、说、读、写方面取得进步。
                </li>
                <li>
                  <strong>课程更新：</strong> 定期更新课程以符合教育部标准。
                </li>
                <li>
                  <strong>考试准备：</strong>{" "}
                  专注于PSLE和O-Level考试策略和技巧。
                </li>
              </ul>
            </div>
            <div className="chinese-image">
              <img
                src={philosophyImage}
                alt="Chinese Philosophy Illustration"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
