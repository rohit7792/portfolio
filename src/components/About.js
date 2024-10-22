import React from 'react';
import data from '../data/data';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>{data.about}</p>
      <img src={data.profileImg} alt='profilePic'/>
    </section>
  );
};

export default About;
