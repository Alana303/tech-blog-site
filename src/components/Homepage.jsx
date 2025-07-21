// src/components/Homepage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'How to Start Coding in 2025',
    content: 'Learn the best practices for getting started with coding in the modern era.',
    image: '/images/image1.jpg',
    link: '/post1',
  },
  {
    id: 2,
    title: 'Top 10 JavaScript Frameworks',
    content: 'Explore the most popular frameworks you should consider in 2025.',
    image: '/images/image2.jpg',
    link: '/post2',
  },
  {
    id: 3,
    title: 'Design Tips for Responsive Layouts',
    content: 'Make your websites look great on all devices with these tips.',
    image: '/images/image3.jpg',
    link: '/post3',
  },
];

export default function Homepage() {
  return (
    <>
      {/* HERO */}
      <header className="hero text-white text-center py-5" data-aos="fade-down">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to TechBlog</h1>
          <p className="lead">Your daily dose of web development insights and tech trends</p>
          <Link to="/newsfeed">
            <button className="mt-3 btn btn-warning">Explore NewsFeed</button>
          </Link>
        </div>
      </header>

      {/* FEATURED TOPICS */}
      <section className="container my-5" data-aos="zoom-in">
        <h2 className="text-center mb-4">Featured Tech Topics</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <i className="fas fa-code fa-3x text-warning mb-3"></i>
            <h4>JavaScript Mastery</h4>
            <p>Tips and tricks for writing better JS in 2025.</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="fas fa-laptop-code fa-3x text-info mb-3"></i>
            <h4>Responsive Web Design</h4>
            <p>Techniques to build beautiful, mobile-first sites.</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="fas fa-bolt fa-3x text-danger mb-3"></i>
            <h4>Performance Tuning</h4>
            <p>Speed up your site with modern optimization hacks.</p>
          </div>
        </div>
      </section>

      {/* LATEST POSTS */}
      <section className="container my-5" data-aos="fade-up">
        <h2 className="mb-4 text-center">Latest Blog Posts</h2>
        <div className="row">
          {blogPosts.map((post) => (
            <div className="col-md-4 mb-4" key={post.id}>
              <div className="card h-100 shadow-sm post-container">
                <img src={post.image} className="card-img-top" alt={post.title} />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.content}</p>
                  <Link to={post.link} className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDITOR PICKS */}
      <section className="container my-5" data-aos="flip-left">
        <h2 className="text-center mb-4">Editor's Picks</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4 d-flex">
            <div className="skill-card w-100">
              <img src="/images/gamma1.jpeg" alt="Editor Pick 1" />
              <h3>Building Your First Portfolio</h3>
              <p>Step-by-step guide to make your personal site shine.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4 d-flex">
            <div className="skill-card w-100">
              <img src="/images/gamma4.jpeg" alt="Editor Pick 2" />
              <h3>Why Tailwind is Taking Over</h3>
              <p>Discover why developers are falling in love with utility-first design.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4 d-flex">
            <div className="skill-card w-100">
              <img src="/images/gamma3.png" alt="Editor Pick 3" />
              <h3>Mastering Git & GitHub</h3>
              <p>A must-read for developers managing open-source or team projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="text-center py-5 bg-dark" data-aos="zoom-in-up">
        <div className="container">
          <h2 className="mb-3 text-white">Join Our Newsletter</h2>
          <p className="text-light">Get weekly updates on modern web technologies, tools & frameworks.</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control d-inline-block w-50 mb-2"
          />
          <br />
          <button className="btn btn-warning">Subscribe Now</button>
        </div>
      </section>
    </>
  );
}
