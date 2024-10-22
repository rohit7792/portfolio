import React from 'react';
import data from '../data/data';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Information</h2>
      <p>Email: <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a></p>
      <p>Phone: {data.contact.phone}</p>
      <p>GitHub: <a href={data.contact.github} target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
    </section>
  );
};

export default Contact;
