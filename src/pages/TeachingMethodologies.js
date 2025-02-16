// src/pages/TeachingMethodologies.js
import React from "react";
import "./TeachingMethodologies.css"; // Updated CSS styling
import { Helmet } from "react-helmet";

// Import methodology images (ensure these files exist in src/assets/images)
import method1 from "../assets/images/student1.jpg";
import method2 from "../assets/images/student2.jpg";

const TeachingMethodologies = () => {
  return (
    <main className="teaching-methodologies-container">
      <Helmet>
        <title>Teaching Methodologies | Yucai Learning</title>
        <meta
          name="description"
          content="Discover our teaching methodologies focused on PSLE and O-Level examinations, personalized instruction, and small group tuition."
        />
      </Helmet>

      {/* Teaching Methodology Section */}
      <section className="methodology-section">
        <h2>Teaching Methodology / 教学方法</h2>
        <div className="content-wrapper">
          <div className="text-content">
            <ul>
              <li>
                <strong>
                  Focuses on the PSLE and O-Level examinations and requirements,
                  Higher Chinese included
                </strong>
                <br />
                <em>围绕新加坡小六会考和O 水准高华考试要求教学</em>
              </li>
              <li>
                <strong>
                  Tuition content includes Listening, Oral, Reading, and
                  Writing.
                </strong>
                <br />
                <em>课程内容包括听、说、读、写</em>
              </li>
              <li>
                <strong>
                  Specialise in answering skills, composition/essay writing
                  skills.
                </strong>
                <br />
                <em>传授华文答题方法和作文技巧</em>
              </li>
              <li>
                <strong>
                  Adapts teaching to the student's level, providing personalised
                  instruction to progressively improve exam performance.
                </strong>
                <br />
                <em>根据学生的不同程度因材施教，逐步提高考试成绩</em>
              </li>
            </ul>
          </div>
          <div className="image-content">
            <img src={method1} alt="Teaching Methodology" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Small Group Tuition Section */}
      <section className="group-tuition-section">
        <h2>Small Group Tuition / 小班补习</h2>
        <div className="content-wrapper">
          <div className="text-content">
            <ul>
              <li>
                <strong>Primary Level: 5 per group</strong>
                <br />
                <em>小学：每组5人</em>
              </li>
              <li>
                <strong>Secondary Level: 6 per group</strong>
                <br />
                <em>中学：每组6人</em>
              </li>
            </ul>
            <p>
              Small tuition groups provide personalised attention, allowing the
              teacher to focus on each student's strengths and weaknesses,
              resulting in improved understanding and engagement.
            </p>
            <p>
              小组补习能够提供个性化的关注，使老师能够专注于每个学生的优点和不足，从而更好地满足他们的需求，促进理解与参与。
            </p>
          </div>
          <div className="image-content">
            <img src={method2} alt="Small Group Tuition" loading="lazy" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default TeachingMethodologies;
