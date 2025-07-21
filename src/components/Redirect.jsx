// src/components/Redirect.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

export default function Redirect() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/login'); // or '/homepage' if you prefer
    } else {
      navigate('/signup');
    }
  }, [user, navigate]);

  return null;
}
