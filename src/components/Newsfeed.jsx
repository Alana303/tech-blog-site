import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Footer from './Footer';
import './styles.css';
export default function Newsfeed() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");       // for search input
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  // Fetch top headlines initially or by search query
  const fetchNews = async (searchQuery = "") => {
    setLoading(true);
    setError(null);
    try {
      const url = searchQuery
        ? `https://newsapi.org/v2/everything?q=${encodeURIComponent(searchQuery)}&pageSize=9&apiKey=${apiKey}`
        : `https://newsapi.org/v2/top-headlines?country=us&pageSize=9&apiKey=${apiKey}`;

      const response = await axios.get(url);
      setArticles(response.data.articles || []);
    } catch (err) {
      setError("Failed to fetch news. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  // On component mount, fetch top headlines
  useEffect(() => {
    fetchNews();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      fetchNews(query);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Latest Tech News</h2>

      {/* Search form */}
      <form onSubmit={handleSearch} className="mb-4 d-flex justify-content-center">
        <input
          type="text"
          placeholder="Search news here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="form-control w-50"
          style={{ maxWidth: "400px" }}
        />
        <button type="submit" className="btn btn-success ms-2">
          Search
        </button>
      </form>

      {/* Loading & error states */}
      {loading && <p className="text-center">Loading news...</p>}
      {error && <p className="text-center text-danger">{error}</p>}

      {/* News cards grid */}
      <div className="row">
        {!loading &&
          articles.length === 0 && (
            <p className="text-center">No articles found.</p>
          )}

        {articles.map((article, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img
                src={
                  article.urlToImage
                    ? article.urlToImage
                    : "https://placehold.co/600x400?text=No+Image"
                }
                alt={article.title || "News image"}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title" title={article.title}>
                  {article.title.length > 60
                    ? article.title.slice(0, 60) + "..."
                    : article.title}
                </h5>
                <p className="card-text flex-grow-1" title={article.description}>
                  {article.description
                    ? article.description.length > 120
                      ? article.description.slice(0, 120) + "..."
                      : article.description
                    : "No description available."}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-primary mt-auto"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
