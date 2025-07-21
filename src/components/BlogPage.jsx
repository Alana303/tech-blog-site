import React from 'react';
import './Blogpage.css';
import Navbar from './Navbar';
import Footer from './Footer';

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'The Power of Coding',
      content: 'In this post, I will explore the transformative impact of coding and why it is an essential skill for everyone...',
      image: '/images/image3.jpg',
      link: '/post1'
    },
    {
      title: 'Learning Web Design',
      content: 'Want to become a web designer? Here are the key steps you should take to start designing beautifully structured web pages...',
      image: '/images/image1.jpg',
      link: '/post2'
    },
    {
      title: 'Building a Personal Website',
      content: 'I’ll guide you step-by-step on how to build your very own website using HTML, CSS, and modern frameworks...',
      image: '/images/image2.jpg',
      link: '/post3'
    },
  ];

  const featured = blogPosts[0]; // First post as featured (optional)

  return (
    <>
      <Navbar />

      {/* Featured Post */}
      <div className="container my-5">
        <div className="featured-post card bg-dark text-white border-0 shadow-lg">
          <img src={featured.image} className="card-img" alt={featured.title} />
          <div className="card-img-overlay d-flex flex-column justify-content-end p-4" style={{ background: 'rgba(0,0,0,0.4)' }}>
            <h2 className="card-title display-5">{featured.title}</h2>
            <p className="card-text">{featured.content}</p>
            <a href={featured.link} className="btn btn-primary mt-2">Explore Post</a>
          </div>
        </div>
      </div>

      {/* Latest Posts Grid */}
      <div className="container mb-5">
        <h2 className="text-center mb-5">📝 Latest Blog Posts</h2>
        <div className="row">
          {blogPosts.map((post, index) => (
            <div className="col-md-4 mb-4 d-flex" key={index}>
              <div className="card shadow-sm h-100 blog-card">
                <img
                  src={post.image || '/images/default.jpg'}
                  className="card-img-top"
                  alt={`Image for ${post.title}`}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text flex-grow-1">{post.content}</p>
                  <a href={post.link} className="btn btn-primary mt-2">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogPage;
