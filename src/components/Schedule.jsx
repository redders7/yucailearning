// src/components/Schedule.jsx

import React from "react";
import styled from "styled-components";
import { FaCalendarAlt, FaClock, FaUser } from "react-icons/fa";

const ScheduleContainer = styled.div`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
`;

const ScheduleTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: #333;
`;

const ScheduleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const ScheduleCard = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ScheduleIcon = styled.div`
  font-size: 2rem;
  color: #007bff;
  margin-bottom: 1rem;
`;

const ScheduleDate = styled.p`
  font-size: 1rem;
  color: #555;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  svg {
    margin-right: 0.5rem;
  }
`;

const ScheduleTime = styled.p`
  font-size: 1rem;
  color: #555;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  svg {
    margin-right: 0.5rem;
  }
`;

const ScheduleInstructor = styled.p`
  font-size: 1rem;
  color: #555;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }
`;

const Schedule = ({ events }) => {
  return (
    <ScheduleContainer>
      <ScheduleTitle>Our Schedule</ScheduleTitle>
      <ScheduleGrid>
        {events.map((event, index) => (
          <ScheduleCard key={index}>
            <ScheduleIcon>
              <FaCalendarAlt />
            </ScheduleIcon>
            <ScheduleDate>
              <FaCalendarAlt /> {event.date}
            </ScheduleDate>
            <ScheduleTime>
              <FaClock /> {event.time}
            </ScheduleTime>
            <ScheduleInstructor>
              <FaUser /> {event.instructor}
            </ScheduleInstructor>
          </ScheduleCard>
        ))}
      </ScheduleGrid>
    </ScheduleContainer>
  );
};

export default Schedule;
