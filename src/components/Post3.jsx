import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles.css';

const Post3 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />

      <section className="hero" data-aos="fade-down">
        <h1>Building a Personal Website</h1>
        <p>Published on April 27, 2025 by Jeff Amayo</p>
      </section>

      <main className="post-container" data-aos="fade-up">
        <h2>Why Create One?</h2>
        <p>
          A personal website is your digital home. It showcases your skills, projects, and
          personality to potential employers or clients.
        </p>

        <img
          src="/images/image3.jpg"
          alt="Building Personal Website"
          className="img-fluid rounded mb-4"
          data-aos="zoom-in"
        />

        <h2>Key Elements to Include</h2>
        <ul>
          <li>About Me section</li>
          <li>Portfolio or project showcase</li>
          <li>Contact form or email link</li>
          <li>Blog or thought journal</li>
        </ul>

        <p>
          Whether you’re a student or a professional, having a personal site builds your
          credibility and makes you searchable online.
        </p>

        <section className="author-card" data-aos="fade-right">
          <img src="/images/image3.jpg" alt="Jeff Amayo" />
          <div>
            <h4>Jeff Amayo</h4>
            <p>
              Web developer and digital storyteller. Helping others build their online
              presence through coding.
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
              <a href="/post2">Learning Web Design</a>
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

export default Post3;
