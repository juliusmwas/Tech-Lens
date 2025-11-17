// src/Components/Pages/SingleArticlePage.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ArticlesNavbar from "../Homepage/ArticlesNavbar";
import { HiOutlineBookOpen } from "react-icons/hi";
import { FaRegCalendarAlt, FaRegClock, FaRegCommentDots } from "react-icons/fa";
import { PiHandsClappingLight } from "react-icons/pi";
import ReactMarkdown from "react-markdown"; // for dev.to markdown rendering

export default function SingleArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchArticle = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`http://localhost:5000/api/articles/${id}`);
      setArticle(res.data);
    } catch (err) {
      console.error("Failed to fetch article:", err);
      setError(err.response?.data?.message || "Failed to load article");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, [id]);

  const formatDate = (isoDate) =>
    new Date(isoDate).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  if (loading) return <div className="p-6 text-center">Loading article...</div>;
  if (error) return <div className="p-6 text-red-600 text-center">{error}</div>;
  if (!article) return null;

  return (
    <>
      <ArticlesNavbar />

      <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8">
          {/* Article Header */}
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <div className="flex items-center gap-4 text-gray-600 text-sm mb-6">
            <div className="flex items-center gap-1">
              <HiOutlineBookOpen size={16} /> {article.author}
            </div>
            <div className="flex items-center gap-1">
              <FaRegCalendarAlt size={16} /> {formatDate(article.date)}
            </div>
            <div className="flex items-center gap-1">
              <FaRegClock size={16} /> {article.readTime || "—"}
            </div>
            <div className="flex items-center gap-1">
              <PiHandsClappingLight size={16} /> {article.claps || 0}
            </div>
          </div>

          {article.image && (
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 object-cover rounded mb-6"
            />
          )}

          {/* Article Body */}
          <div className="prose max-w-full">
            {article.body ? (
              <ReactMarkdown>{article.body}</ReactMarkdown>
            ) : (
              <p>{article.excerpt}</p>
            )}
          </div>

          {/* Back & More Articles */}
          <div className="mt-8 flex justify-between">
            <Link to="/articles" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              Back to Articles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
