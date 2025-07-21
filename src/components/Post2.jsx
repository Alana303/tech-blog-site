import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles.css';

const Post2 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />

      <section className="hero" data-aos="fade-down">
        <h1>Learning Web Design</h1>
        <p>Published on April 20, 2025 by Jeff Amayo</p>
      </section>

      <main className="post-container" data-aos="fade-up">
        <h2>Start with the Basics</h2>
        <p>
          Web design is a foundational skill in today’s tech-driven world. Understanding
          HTML, CSS, and layout techniques helps you turn creative ideas into reality.
        </p>

        <img
          src="/images/image2.jpg"
          alt="Learning Web Design"
          className="img-fluid rounded mb-4"
          data-aos="zoom-in"
        />

        <h2>What to Focus On</h2>
        <ul>
          <li>Understanding color theory and typography</li>
          <li>Learning responsive design principles</li>
          <li>Mastering layout techniques like Flexbox and Grid</li>
          <li>Balancing usability with aesthetics</li>
        </ul>

        <p>
          A strong foundation in design empowers developers to build intuitive, accessible,
          and visually engaging websites.
        </p>

        <section className="author-card" data-aos="fade-right">
          <img src="/images/image2.jpg" alt="Jeff Amayo" />
          <div>
            <h4>Jeff Amayo</h4>
            <p>
              Passionate about frontend development and teaching others how to create
              beautiful user experiences.
            </p>
          </div>
        </section>

        <section className="related-posts" data-aos="fade-up">
          <h3>Related Posts</h3>
          <ul>
            <li>
              <a href="/post1">The Power of Coding</a>
            </li>
            <li>
              <a href="/post3">Building a Personal Website</a>
            </li>
          </ul>
        </section>

        <a href="/homepage" className="back-link">← Back to Home</a>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Jeff Amayo | All Rights Reserved</p>
        <button onClick={() => document.body.classList.toggle('dark-mode')}>
          Toggle Light/Dark Mode
        </button>
      </footer>
    </>
  );
};

export default Post2;
