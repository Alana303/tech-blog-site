import React, { useState } from 'react';
import { login } from '../auth';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Signup.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await login({ email, password });
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center bg-light flex-column" style={{ minHeight: '75vh', padding: '10px 0' }}>
      <div className="w-100 text-center mb-3">
        <h4 className="fw-bold text-dark">👋 Welcome back! Please log in to continue.</h4>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="card shadow w-100 px-3 py-3"
        style={{ maxWidth: '420px' }}
      >
        <h3 className="text-center mb-3">Login</h3>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="form-control mb-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="form-control mb-2"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btn btn-primary w-100 mb-2" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <div className="text-center small mt-2">
            Don’t have an account?{' '}
            <Link to="/signup" className="btn btn-outline-secondary btn-sm signup-link">
              Sign Up
            </Link>
          </div>

          {error && <div className="alert alert-danger mt-3 py-1">{error}</div>}
        </form>
      </motion.div>
    </div>
  );
}
