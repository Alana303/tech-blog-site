import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { supabase } from '../supabaseClient';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <div className="container mt-5 text-center">
      <div className="card shadow-sm p-5">
        <h1 className="mb-3">🎉 Welcome to Your Dashboard</h1>
        <p className="lead">You are logged in as <strong>{user?.email}</strong></p>
        <p>Explore our latest tech blog posts, learn new skills, and stay updated with the industry trends.</p>
        <button className="btn btn-outline-danger mt-4" onClick={handleLogout}>
          <i className="fas fa-sign-out-alt me-2"></i> Logout
        </button>
      </div>
    </div>
  );
}
