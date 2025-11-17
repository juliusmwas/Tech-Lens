import { useEffect, useState } from "react";
import axios from "axios";
import { PiHandsClappingThin } from "react-icons/pi";
import { FaRegCommentDots } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Articles() {
  const [featured, setFeatured] = useState([]);

  const fetchFeatured = async () => {
    try {
      const res = await axios.get("https://dev.to/api/articles", {
        params: { per_page: 10, page: 1 },
      });

      // Filter only those with images + take first 4
      const mapped = res.data
        .filter((a) => a.cover_image) // 🔥 only articles with images
        .slice(0, 4)
        .map((a) => ({
          id: String(a.id),
          title: a.title,
          excerpt: a.description || "",
          author: a.user?.name || a.user?.username,
          image: a.cover_image,
          date: a.published_at || a.created_at,
          tags: Array.isArray(a.tag_list)
            ? a.tag_list
            : String(a.tags || "").split(","),
          claps: a.positive_reactions_count ?? 0,
          comments: a.comments_count ?? 0,
          url: a.url,
        }));

      setFeatured(mapped);
    } catch (err) {
      console.error("Failed fetching featured dev.to", err);
    }
  };

  const openExternal = (url) => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  const formatDate = (d) => {
    try {
      return new Date(d).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    } catch {
      return d;
    }
  };

  useEffect(() => {
    fetchFeatured();
  }, []);

  return (
    <section id="articles">
      <div className="grid justify-items-center text-3xl font-medium mt-12 mb-10">
        <h1>Featured Articles</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-5 mb-5 p-3">
        {featured.length > 0 ? (
          featured.map((article) => (
            <div
              key={article.id}
              onClick={() => openExternal(article.url)}
              className="cursor-pointer max-w-sm mx-auto p-4 bg-white border rounded-xl shadow-sm hover:shadow-lg transition-all"
            >
              <div
                className="relative rounded-lg mb-4 flex justify-center items-center h-48"
                style={{
                  backgroundImage: `url(${article.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute top-4 left-4 flex space-x-2">
                  {article.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-gray-700">
                <p className="text-sm mb-1 font-medium text-gray-900">
                  {article.author}
                </p>

                <h2 className="text-lg font-bold text-gray-900 mb-1 leading-tight">
                  {article.title}
                </h2>

                <p className="text-sm text-gray-500 line-clamp-2">
                  {article.excerpt}
                </p>
              </div>

              <div className="flex items-center gap-4 pt-3 text-gray-600 text-xs">
                <p>{formatDate(article.date)}</p>
                <PiHandsClappingThin />
                <span>{article.claps}</span>
                <FaRegCommentDots />
                <span>{article.comments}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-4">
            Loading featured content...
          </p>
        )}
      </div>

      <div className="grid justify-items-center">
        <Link
          to="/Articlespage"
          className="px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg shadow-md mt-6 mb-10 transition hover:bg-slate-700"
        >
          Explore All Articles →
        </Link>
      </div>
    </section>
  );
}
