// src/Components/Pages/ArticlesPage.jsx
import { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import ArticlesNavbar from "../Homepage/ArticlesNavbar";
import { HiOutlineBookOpen } from "react-icons/hi";
import { FaRegCalendarAlt, FaRegClock, FaRegCommentDots } from "react-icons/fa";
import { PiHandsClappingLight } from "react-icons/pi";

/**
 * ArticlesPage
 * - Fetches initial merged list from backend /api/articles
 * - Separates userArticles (Mongo ObjectId) & publicArticles (dev.to)
 * - Refresh loads next dev.to page (fresh public content)
 * - Load More appends more public content
 * - Search (submit) filters currently loaded articles (title/excerpt/tags/author)
 * - User articles are displayed pinned on top (merged, but pinned)
 */

export default function ArticlesPage() {
  const navigate = useNavigate();

  // main lists
  const [userArticles, setUserArticles] = useState([]); // pinned top (from your DB)
  const [publicArticles, setPublicArticles] = useState([]); // from dev.to (paged)
  const [displayedArticles, setDisplayedArticles] = useState([]); // merged view

  // control state
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState("");

  // paging for public dev.to requests
  const [publicPage, setPublicPage] = useState(1);
  const PUBLIC_PER_PAGE = 9;

  // search state
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // meta for UI (we'll approximate totals)
  const [meta, setMeta] = useState({ page: 1, limit: PUBLIC_PER_PAGE, total: 0 });

  // Util: detect mongo id (24 hex chars)
  const isMongoId = (id) => typeof id === "string" && /^[0-9a-fA-F]{24}$/.test(id);

  // Merge function: pins user articles first then public articles
  const mergeAndSetDisplayed = useCallback(
    (users, publicA) => {
      const merged = [...users, ...publicA];
      setDisplayedArticles(merged);
      setMeta((m) => ({ ...m, total: merged.length }));
    },
    [setDisplayedArticles, setMeta]
  );

  // Fetch initial merged list from your backend (this should include user articles)
  const fetchInitial = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get("http://localhost:5000/api/articles");
      // backend returns { data: [articles], meta: {...} }
      const all = res.data?.data || [];
      // split: user articles are those with mongo ObjectId (24 chars)
      const users = all.filter((a) => isMongoId(a.id) || isMongoId(a._id));
      const publicA = all.filter((a) => !isMongoId(a.id) && !isMongoId(a._id));
      // normalize id field
      const normalizedUsers = users.map((a) => ({ ...a, id: a.id || a._id }));
      const normalizedPublic = publicA.map((a) => ({ ...a, id: a.id || a._id }));
      setUserArticles(normalizedUsers);
      setPublicArticles(normalizedPublic);
      mergeAndSetDisplayed(normalizedUsers, normalizedPublic);
      // publicPage remains 1
      setPublicPage(1);
    } catch (err) {
      console.error("Failed to fetch initial articles:", err);
      setError(err.response?.data?.message || "Failed to load articles from backend");
    } finally {
      setLoading(false);
    }
  };

  // Fetch public articles directly from dev.to (page param),
  // used by Refresh and Load More so you get fresh public content.
  const fetchPublicFromDevTo = async (page = 1) => {
    setFetching(true);
    setError("");
    try {
      const res = await axios.get("https://dev.to/api/articles", {
        params: { per_page: PUBLIC_PER_PAGE, page },
      });
      // map to our shape
      const mapped = (res.data || []).map((a) => ({
        id: String(a.id),
        title: a.title,
        excerpt: a.description || a.summary || "",
        author: a.user?.name || a.user?.username,
        image: a.cover_image || "/default-article.jpg",
        date: a.published_at || a.created_at,
        tags: Array.isArray(a.tags) ? a.tags : (a.tags ? String(a.tags).split(",") : []),
        claps: a.positive_reactions_count ?? 0,
        comments: a.comments_count ?? 0,
        url: a.url || a.canonical_url || `https://dev.to/${a.user?.username}/${a.slug}`,
      }));
      return mapped;
    } catch (err) {
      console.error("Failed to fetch dev.to articles:", err);
      setError("Failed to fetch public articles (dev.to).");
      return [];
    } finally {
      setFetching(false);
    }
  };

  // Refresh: load the next public page and replace publicArticles with it (so "fresh" content)
  const handleRefresh = async () => {
    const nextPage = publicPage + 1;
    setFetching(true);
    const freshPublic = await fetchPublicFromDevTo(nextPage);
    if (freshPublic.length) {
      setPublicArticles(freshPublic);
      setPublicPage(nextPage);
      mergeAndSetDisplayed(userArticles, freshPublic);
    } else {
      setError("No new public articles were fetched.");
    }
    setFetching(false);
  };

  // Load More: append the next public page to existing publicArticles
  const handleLoadMore = async () => {
    const nextPage = publicPage + 1;
    setFetching(true);
    const more = await fetchPublicFromDevTo(nextPage);
    if (more.length) {
      const updatedPublic = [...publicArticles, ...more];
      setPublicArticles(updatedPublic);
      setPublicPage(nextPage);
      mergeAndSetDisplayed(userArticles, updatedPublic);
    } else {
      setError("No more public articles available.");
    }
    setFetching(false);
  };

  // Search (on submit): filter current loaded user+public articles (client-side)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setIsSearching(true);
    setLoading(true);
    setError("");
    // normalize query
    const q = (query || "").trim().toLowerCase();
    if (!q) {
      // if empty search -> show merged lists
      mergeAndSetDisplayed(userArticles, publicArticles);
      setIsSearching(false);
      setLoading(false);
      return;
    }

    const matches = (list) =>
      list.filter((a) => {
        if (!a) return false;
        const hay = `${a.title || ""} ${a.excerpt || ""} ${(a.tags || []).join(" ")} ${a.author || ""}`.toLowerCase();
        return hay.includes(q);
      });

    const filteredUsers = matches(userArticles);
    const filteredPublic = matches(publicArticles);

    // Keep user posts pinned on top (even filtered)
    mergeAndSetDisplayed(filteredUsers, filteredPublic);
    setIsSearching(false);
    setLoading(false);
  };

// Navigate to article detail (internal route OR external redirect)
const openArticle = (article, event) => {
  const id = article.id;
  const isUser = isMongoId(id);

  if (isUser) {
    // Your own article → show SingleArticle page
    navigate(`/article/${id}`);
  } else {
    // External article → open dev.to link in new tab
    if (article.url) {
      window.open(article.url, "_blank", "noopener noreferrer");
    } else {
      // fallback: try your backend fetch
      navigate(`/article/${id}`);
    }
  }
};


  // Format date helper
  const formatDate = (d) => {
    try {
      return new Date(d).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });
    } catch {
      return d || "";
    }
  };

  // initial load
  useEffect(() => {
    fetchInitial();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // If userArticles or publicArticles change, update displayed list (keeps pinned behavior)
  useEffect(() => {
    mergeAndSetDisplayed(userArticles, publicArticles);
  }, [userArticles, publicArticles, mergeAndSetDisplayed]);

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
              <form onSubmit={handleSearchSubmit} className="flex gap-2">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles (title, tag, excerpt)..."
                  className="px-3 py-2 border rounded-md w-56"
                />
                <button type="submit" className="px-3 py-2 bg-slate-800 text-white rounded-md">
                  Search
                </button>
              </form>

              <button
                onClick={handleRefresh}
                className="px-3 py-2 bg-white border rounded-md hover:bg-gray-50"
                disabled={fetching}
                title="Refresh public articles to next page"
              >
                Refresh
              </button>
            </div>
          </div>

          {/* Error */}
          {error && <div className="bg-red-50 text-red-700 p-3 rounded mb-6">{error}</div>}

          {/* Loading */}
          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: meta.limit }).map((_, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-md p-6 animate-pulse">
                  <div className="bg-gray-200 h-44 rounded mb-4" />
                  <div className="h-4 bg-gray-200 rounded mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-3/4" />
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* Articles Grid (user articles always first) */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedArticles.map((article) => {
                  const id = article.id || article._id;
                  const isUser = isMongoId(id);
                  const Card = (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 relative cursor-pointer"
                      onClick={() => openArticle(article)}
                    >
                      {/* tag for external */}
                      {!isUser && (
                        <span className="absolute top-3 right-3 bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                          External
                        </span>
                      )}

                      <img src={article.image || "/default-article.jpg"} alt={article.title} className="w-full h-48 object-cover" />

                      <div className="p-6 flex flex-col min-h-[300px]">
                        <div>
                          <div className="flex gap-2 mb-3 flex-wrap">
                            {(article.tags || []).slice(0, 4).map((tag) => (
                              <span key={tag} className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">{article.title}</h2>
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

                        {/* Social */}
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

                  // if you'd rather open public dev.to articles in a new tab, change this to <a href={article.url} ...>{Card}</a>
                  return (
                    <div key={id} className="block">
                      {Card}
                    </div>
                  );
                })}
              </div>

              {/* Load More (only loads more public content) */}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={handleLoadMore}
                  className="px-6 py-2 bg-slate-800 text-white rounded-md"
                  disabled={fetching}
                >
                  {fetching ? "Loading..." : "Load More Articles"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
