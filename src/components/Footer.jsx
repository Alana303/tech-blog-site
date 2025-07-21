import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <p className="mb-0">&copy; {new Date().getFullYear()} My Blog | Built with 💙 TechBlog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
