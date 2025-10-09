// src/pages/Schedule.js
import React from "react";
import "./Schedule.css";
import { Helmet } from "react-helmet";

const Schedule = () => {
  return (
    <div className="schedule-container">
      <Helmet>
        <title>Schedule | Yucai Learning</title>
        <meta
          name="description"
          content="View the tutoring schedule for primary and secondary classes."
        />
      </Helmet>
      <h1 className="schedule-title">Schedule / 课程表</h1>
      <div className="schedule-tables">
        <div className="schedule-table english-schedule">
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Classes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>
                  Primary 6: 3-5.30pm
                  <br />
                  Secondary 4 (Higher Chinese): 5.30-8pm
                </td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>
                  Primary 5: 3-5pm
                  <br />
                  Primary 3: 5-7pm
                </td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>
                  Primary 6: 6-8pm
                </td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>
                  Primary 4: 6-8pm
                </td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>
                  Secondary 3: 2.30–5pm
                  <br />
                  Secondary 4: 5–7.30pm
                </td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>
                  Secondary 2 (Higher Chinese): 9.30am–12pm
                  <br />
                  Secondary 3 (Higher Chinese): 1.30–4pm
                  <br />
                  Secondary 1: 4-6.30pm
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="schedule-table chinese-schedule">
          <table>
            <thead>
              <tr>
                <th>日</th>
                <th>课程</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>星期一</td>
                <td>
                  小六: 3-5.30pm
                  <br />
                  中四(高华): 5.30-8pm
                </td>
              </tr>
              <tr>
                <td>星期三</td>
                <td>
                  小五: 3-5pm
                  <br />
                  小三: 5-7pm
                </td>
              </tr>
              <tr>
                <td>星期四</td>
                <td>
                  小六: 6-8pm
                </td>
              </tr>
              <tr>
                <td>星期五</td>
                <td>
                  小四: 6-8pm
                </td>
              </tr>
              <tr>
                <td>星期六</td>
                <td>
                  中三: 2.30–5pm
                  <br />
                  中四: 5–7.30pm
                </td>
              </tr>
              <tr>
                <td>星期天</td>
                <td>
                  中二(高华): 9.30am–12pm
                  <br />
                  中三(高华): 1.30–4pm
                  <br />
                  中一: 4–6.30pm
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
