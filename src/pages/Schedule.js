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
                  Primary 6: 3:00–5:30pm
                  <br />
                  Secondary 4 (Higher Chinese): 6:00–8:30pm
                </td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>
                  Primary 5: 3:00–5:00pm
                  <br />
                  Primary 3: 5:00–7:00pm
                </td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>
                  Primary 6: 5:00–7:00pm
                </td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>
                  Primary 4: 6:00–8:00pm
                </td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>
                  Secondary 1 (Standard Chinese): 9:30am–12:00pm
                  <br />
                  Secondary 3 (Standard Chinese): 2:00–4:30pm
                  <br />
                  Secondary 4 (Standard Chinese): 4:30–7:00pm
                </td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>
                  Secondary 2 (Higher Chinese): 9:30am–12:00pm
                  <br />
                  Secondary 3 (Higher Chinese): 1:30–4:00pm
                  <br />
                  Secondary 1 (Standard Chinese): 4:00–6:30pm
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
                  六年级：3:00–5:30pm
                  <br />
                  中四高华：6:00–8:30pm
                </td>
              </tr>
              <tr>
                <td>星期三</td>
                <td>
                  五年级：3:00–5:00pm
                  <br />
                  三年级：5:00–7:00pm
                </td>
              </tr>
              <tr>
                <td>星期四</td>
                <td>
                  六年级：5:00–7:00pm
                </td>
              </tr>
              <tr>
                <td>星期五</td>
                <td>
                  四年级：6:00–8:00pm
                </td>
              </tr>
              <tr>
                <td>星期六</td>
                <td>
                  中一普华：9:30am–12:00pm
                  <br />
                  中三普华：2:00–4:30pm
                  <br />
                  中四普华：4:30–7:00pm
                </td>
              </tr>
              <tr>
                <td>星期天</td>
                <td>
                  中二高华：9:30am–12:00pm
                  <br />
                  中三高华：1:30–4:00pm
                  <br />
                  中一普华：4:00–6:30pm
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
