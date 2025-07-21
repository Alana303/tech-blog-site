// src/services/blog.js
import { supabase } from '../supabaseClient';

// Create a new blog post
export const createPost = async ({ title, content, email }) => {
  const { data, error } = await supabase.from('posts').insert([
    { title, content, author_email: email }
  ]);
  if (error) throw error;
  return data;
};

// Fetch all blog posts
export const fetchPosts = async () => {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
};
