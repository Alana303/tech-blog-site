import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './styles.css';

const About = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero fade-in text-center about-hero">
        <div className="container hero-content">
          <h1>Meet Jeff Amayo</h1>
          <p>
            A passionate tech enthusiast, storyteller, and full-stack web developer in the making.
          </p>
          <Link to="/contact" className="btn">Let’s Connect</Link>
        </div>
      </section>

      {/* About Overview */}
      <section className="about-section container grid-two-columns">
        <div className="about-text">
          <h2>Who Am I?</h2>
          <p>
            I’m Jeff, a web development enthusiast dedicated to building responsive, meaningful, and visually stunning digital experiences. I blend creativity with technology to solve real-world problems through code.
          </p>
          <p>
            With a background in Business Information Technology, I bridge the gap between business needs and technical solutions. My interests range from front-end design to full-stack development, and I’m continuously learning to master the tools of tomorrow.
          </p>
          <p>
            When I’m not coding, you’ll find me writing blogs, working on side projects, or sharing thoughts that inspire growth and change.
          </p>
        </div>

        <div className="about-img-wrapper">
          <img src="/images/image8.jpg" alt="Jeff coding at a laptop" className="about-img" />
        </div>
      </section>

      {/* Skills or Interests Section */}
      <section className="skills-section container">
        <h2 className="text-center">What Drives Me?</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <img src="/images/image5.jpg" alt="Tech Passion" />
            <h3>Tech Passion</h3>
            <p>I thrive in tech spaces, always learning the next big tool — React, Bootstrap, APIs, and beyond.</p>
          </div>
          <div className="skill-card">
            <img src="/images/image6.jpg" alt="Blogging" />
            <h3>Blogging</h3>
            <p>I write to inform and inspire — from coding guides to personal development journeys.</p>
          </div>
          <div className="skill-card">
            <img src="/images/image7.jpg" alt="Vision" />
            <h3>My Vision</h3>
            <p>To create a digital footprint that helps people grow, learn, and transform their ideas into action.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
