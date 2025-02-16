// src/pages/AboutUs.js
import React from "react";
import "./AboutUs.css"; // Updated CSS styling
import { Helmet } from "react-helmet";

// Import teacher images
import teacher1 from "../assets/images/teacher1.jpg";
import teacher2 from "../assets/images/teacher2.jpg";

const AboutUs = () => {
  return (
    <main className="aboutus-container">
      <Helmet>
        <title>About Us | Yucai Learning</title>
        <meta
          name="description"
          content="Learn more about Yucai Learning, our background, and extensive teaching experience in Chinese language education."
        />
      </Helmet>

      {/* Background Section */}
      <section className="philosophy-section">
        <h2>About Ms Chen / 背景</h2>
        <div className="content-wrapper">
          <div className="image-content">
            <img src={teacher1} alt="Educational Background" loading="lazy" />
          </div>
          <div className="text-content">
            <ul>
              <li>
                <strong>
                  Graduated from Xi-Nan University, Chongqing, China
                </strong>
                <br />
                <em>毕业于中国重庆西南大学文学院</em>
              </li>
              <li>
                <strong>Chinese Language and Literature Major</strong>
                <br />
                <em>汉语言文学专业</em>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Teaching Experience Section */}
      <section className="philosophy-section">
        <h2>Teaching Experience / 教学经验</h2>
        <div className="content-wrapper">
          <div className="text-content">
            <ul>
              <li>
                <strong>
                  Experienced Chinese language teacher for secondary schools
                </strong>
                <br />
                <em>中国资深中学华文老师</em>
              </li>
              <li>
                <strong>9 years of teaching experience in China</strong>
                <br />
                <em>中国任教10年</em>
              </li>
              <li>
                <strong>
                  7 years of teaching experience at a renowned tuition centre in
                  Singapore
                </strong>
                <br />
                <em>新加坡著名补习中心任教8年</em>
              </li>
              <li>
                <strong>Private tuition for 15 years</strong>
                <br />
                <em>现在从事家庭补习16年</em>
              </li>
            </ul>
          </div>
          <div className="image-content">
            <img src={teacher2} alt="Teaching Experience" loading="lazy" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
