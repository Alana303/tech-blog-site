// src/App.jsx
import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import './components/styles.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BlogPage from './components/BlogPage';
import Post1 from './components/Post1';
import Post2 from './components/Post2';
import Post3 from './components/Post3';
import About from './components/About';
import Contact from './components/Contact';
import Newsfeed from './components/Newsfeed';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Homepage from './components/Homepage';
import ProtectedRoute from './components/ProtectedRoute';
import Redirect from './components/Redirect';
import { useAuth } from './AuthContext';
import { supabase } from './supabaseClient';
import './index.css';
import './components/Signup.css'; // ✅ corrected import path

function App() {
  const location = useLocation();
  const { user, loading } = useAuth();

  const hideNavbarPaths = ['/signup', '/login'];
  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (loading) {
    return <p className="text-center mt-5">Loading App...</p>;
  }

  return (
    <>
      {shouldShowNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Redirect />} />

        {/* Auth */}
        <Route path="/signup" element={user ? <Navigate to="/dashboard" /> : <Signup />} />
        <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />

        {/* Protected */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Public */}
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newsfeed" element={<Newsfeed />} />
        <Route path="/post1" element={<Post1 />} />
        <Route path="/post2" element={<Post2 />} />
        <Route path="/post3" element={<Post3 />} />
      </Routes>

      {shouldShowNavbar && <Footer />}
    </>
  );
}

export default App;
