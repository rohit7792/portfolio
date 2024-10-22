import React from 'react';
import data from './data';

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills & Expertise</h2>
      <ul>
        {data.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
