import React from "react";
// import Profile from "./Profile";
import { Outlet } from "react-router-dom";
function About() {
  return (
    <div style={{ padding: "20px", lineHeight: "1.6" }}>
      <h1>About Us</h1>
      <Outlet/>
      {/* <Profile/> */}
      <p>
        Welcome to our website! 🚀 We are passionate developers who love building
        modern, user-friendly web applications using React and the latest web
        technologies.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to make learning and building with technology simple,
        effective, and enjoyable. We believe in clean code, clear UI, and
        solving real-world problems through software.
      </p>

      <h2>What We Do</h2>
      <ul>
        <li>⚡ Build responsive and scalable React applications</li>
        <li>🌐 Develop modern web APIs and services</li>
        <li>📱 Create mobile-friendly solutions</li>
        <li>🎨 Focus on clean design and user experience</li>
      </ul>

      <h2>Our Team</h2>
      <p>
        We are a small but dedicated team of developers and designers working
        together to deliver high-quality applications. Collaboration and
        continuous learning are at the heart of our work culture.
      </p>

      <h2>Get in Touch</h2>
      <p>
        Have questions or ideas? We’d love to hear from you!  
        Drop us an email at <strong>contact@ourwebsite.com</strong> or reach out
        on our social media channels.
      </p>
    </div>
  );
}

export default About;
