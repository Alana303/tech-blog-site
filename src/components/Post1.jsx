import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles.css'; // Optional: Your main stylesheet

const Post1 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />

      <section className="hero" data-aos="fade-down">
        <h1>The Power of Coding</h1>
        <p>Published on April 13, 2025 by Jeff Amayo</p>
      </section>

      <main className="post-container" data-aos="fade-up">
        <h2>Why Coding Matters</h2>
        <p>
          In today's digital age, coding is no longer a niche skill—it's a superpower.
          Whether you're automating tasks, building apps, or analyzing data, coding opens
          doors to endless possibilities.
        </p>

        <img
          src="/images/image3.jpg"
          alt="Power of Coding"
          className="img-fluid rounded mb-4"
          data-aos="zoom-in"
        />

        <h2>The Benefits of Learning to Code</h2>
        <ul>
          <li>Enhances problem-solving and logic</li>
          <li>Boosts creativity and innovation</li>
          <li>Expands career opportunities in tech and beyond</li>
          <li>Empowers you to build real-world solutions</li>
        </ul>

        <p>
          From web development to machine learning, learning to code helps you understand
          how the digital world operates and gives you the tools to shape it yourself.
        </p>

        <section className="author-card" data-aos="fade-right">
          <img src="/images/image1.jpg" alt="Jeff Amayo" />
          <div>
            <h4>Jeff Amayo</h4>
            <p>
              Web Developer & Tech Blogger. Dedicated to empowering learners through
              technology.
            </p>
          </div>
        </section>

        <section className="related-posts" data-aos="fade-up">
          <h3>Related Posts</h3>
          <ul>
            <li>
              <a href="/post2">Learning Web Design</a>
            </li>
            <li>
              <a href="/post3">Building a Personal Website</a>
            </li>
          </ul>
        </section>

        <a href="/homepage" className="back-link">
          ← Back to Home
        </a>
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

export default Post1;
