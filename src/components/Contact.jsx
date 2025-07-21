import React, { useRef, useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import emailjs from '@emailjs/browser';
import './styles.css';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus('SUCCESS');
      form.current.reset();
    })
    .catch(() => setStatus('ERROR'));
  };

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h2 className="text-center mb-4">📬 Get in Touch</h2>
       <p className="text-center mb-5 white-text" style={{ maxWidth: '600px', margin: '0 auto' }}>
  We’d love to hear from you. Please fill out the form below and we'll respond as soon as possible.
</p>


        <form ref={form} onSubmit={sendEmail} className="contact-form mx-auto" style={{ maxWidth: 600 }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input id="name" name="user_name" type="text" className="form-control contact-input" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input id="email" name="user_email" type="email" className="form-control contact-input" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea id="message" name="message" rows="5" className="form-control contact-input" required />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary contact-btn">Send Message</button>
          </div>

          {status === 'SUCCESS' && (
            <div className="alert alert-success mt-4" role="alert">
              ✅ Message sent successfully!
            </div>
          )}
          {status === 'ERROR' && (
            <div className="alert alert-danger mt-4" role="alert">
              ❌ Something went wrong. Please try again.
            </div>
          )}
        </form>
      </div>
      <Footer />
    </>
  );
}
