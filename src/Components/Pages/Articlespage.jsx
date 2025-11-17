// src/Components/Pages/ArticlesPage.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import ArticlesNavbar from "../Homepage/ArticlesNavbar";
import { HiOutlineBookOpen } from "react-icons/hi";
import { FaRegCalendarAlt, FaRegClock, FaRegCommentDots } from "react-icons/fa";
import { PiHandsClappingLight } from "react-icons/pi";

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [meta, setMeta] = useState({ page: 1, limit: 9, total: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [fetching, setFetching] = useState(false);

  // Fetch articles from backend
  const fetchArticles = async (page = 1, q = "", append = false) => {
    setFetching(true);
    setError("");
    try {
      const res = await axios.get("http://localhost:5000/api/articles", {
        params: { page, limit: meta.limit, q },
      });

      const newArticles = res.data.data || [];
      setArticles((prev) => (append ? [...prev, ...newArticles] : newArticles));
      setMeta(res.data.meta || { page, limit: meta.limit, total: 0 });
    } catch (err) {
      console.error("Fetch articles error:", err);
      setError(err.response?.data?.message || "Failed to load articles");
    } finally {
      setLoading(false);
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchArticles(1, "");
  }, []);

  const onSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchArticles(1, query);
  };

  const loadMore = () => {
    fetchArticles(meta.page + 1, query, true);
  };

  const formatDate = (isoDate) =>
    new Date(isoDate).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  return (
    <>
      <ArticlesNavbar />

      <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-1">
                Explore the Latest Insights
              </h1>
              <p className="text-gray-600 max-w-2xl">
                Tutorials, deep dives, and articles from the web and our users.
              </p>
            </div>

            {/* Search + Refresh */}
            <div className="flex gap-3 items-center">
              <form onSubmit={onSearch} className="flex gap-2">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="px-3 py-2 border rounded-md w-56"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-slate-800 text-white rounded-md"
                >
                  Search
                </button>
              </form>

              <button
                onClick={() => fetchArticles(meta.page, query)}
                className="px-3 py-2 bg-white border rounded-md hover:bg-gray-50"
                disabled={fetching}
              >
                Refresh
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 text-red-700 p-3 rounded mb-6">{error}</div>
          )}

          {/* Loading skeleton */}
          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: meta.limit }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md p-6 animate-pulse"
                >
                  <div className="bg-gray-200 h-44 rounded mb-4" />
                  <div className="h-4 bg-gray-200 rounded mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-3/4" />
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* Articles Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => {
                  const isUserArticle = article.id.length === 24; // MongoDB ObjectId
                  const CardContent = (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 relative"
                    >
                      {/* External badge */}
                      {!isUserArticle && (
                        <span className="absolute top-3 right-3 bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                          External
                        </span>
                      )}

                      <img
                        src={article.image || "/default-article.jpg"}
                        alt={article.title}
                        className="w-full h-48 object-cover"
                      />

                      <div className="p-6 flex flex-col min-h-[300px]">
                        <div>
                          <div className="flex gap-2 mb-3 flex-wrap">
                            {(article.tags || []).map((tag) => (
                              <span
                                key={tag}
                                className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">
                            {article.title}
                          </h2>
                          <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                        </div>

                        {/* Footer */}
                        <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between text-gray-600 text-xs">
                          <div className="flex items-center gap-2">
                            <HiOutlineBookOpen size={15} className="text-slate-500" />
                            <span>{article.author || "Unknown"}</span>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <FaRegCalendarAlt size={13} className="text-slate-500" />
                              <span>{formatDate(article.date)}</span>
                            </div>

                            <div className="flex items-center gap-1">
                              <FaRegClock size={13} className="text-slate-500" />
                              <span>{article.readTime || "—"}</span>
                            </div>
                          </div>
                        </div>

                        {/* Social Interaction */}
                        <div className="mt-2 flex items-center justify-between text-gray-500 text-sm">
                          <div className="flex items-center gap-4">
                            <button className="flex items-center gap-1 hover:text-blue-600 transition">
                              <PiHandsClappingLight size={15} /> {article.claps ?? 0}
                            </button>
                            <button className="flex items-center gap-1 hover:text-blue-600 transition">
                              <FaRegCommentDots size={15} /> {article.comments ?? 0}
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );

                  return isUserArticle ? (
                    <Link
                      to={`/article/${article.id}`}
                      key={article.id}
                      className="block"
                    >
                      {CardContent}
                    </Link>
                  ) : (
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={article.id}
                      className="block"
                    >
                      {CardContent}
                    </a>
                  );
                })}
              </div>

              {/* Load More */}
              {meta.page * meta.limit < meta.total && (
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={loadMore}
                    className="px-6 py-2 bg-slate-800 text-white rounded-md"
                    disabled={fetching}
                  >
                    Load More Articles
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
