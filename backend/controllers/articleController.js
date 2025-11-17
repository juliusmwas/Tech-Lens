// controllers/articleController.js
import axios from "axios";
import Article from "../models/Article.js";

// List all articles (public API + user articles)
export const listAllArticles = async (req, res) => {
  try {
    // 1. Fetch public API articles
    const publicRes = await axios.get("https://dev.to/api/articles?per_page=10");
    const publicArticles = publicRes.data.map((a) => ({
      id: a.id,
      title: a.title,
      excerpt: a.description,
      author: a.user.name,
      image: a.cover_image || "/default-article.jpg",
      date: a.published_at,
      tags: a.tags.split(",") || [],
      claps: a.positive_reactions_count,
      comments: a.comments_count,
      url: a.url,
    }));

    // 2. Fetch user articles from DB
    const userArticles = await Article.find().populate("author", "username").lean();

    const formattedUserArticles = userArticles.map((a) => ({
      id: a._id,
      title: a.title,
      excerpt: a.excerpt,
      author: a.author.username,
      image: a.image || "/default-article.jpg",
      date: a.createdAt,
      tags: a.tags || [],
      claps: a.claps || 0,
      comments: a.comments?.length || 0,
    }));

    // 3. Merge and sort by date descending
    const allArticles = [...formattedUserArticles, ...publicArticles].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    res.json({ data: allArticles, meta: { total: allArticles.length } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch articles" });
  }
};

// Get a single article by ID (from DB first, fallback to public API)
export const getArticle = async (req, res) => {
  const { id } = req.params;

  try {
    // Check if ID looks like a MongoDB ObjectId (user article)
    if (/^[0-9a-fA-F]{24}$/.test(id)) {
      const article = await Article.findById(id).populate("author", "username").lean();
      if (!article) return res.status(404).json({ message: "Article not found" });

      return res.json({
        id: article._id,
        title: article.title,
        excerpt: article.excerpt,
        author: article.author.username,
        image: article.image || "/default-article.jpg",
        date: article.createdAt,
        tags: article.tags || [],
        claps: article.claps || 0,
        comments: article.comments?.length || 0,
      });
    }

    // Otherwise, fetch from public API (dev.to)
    const publicRes = await axios.get(`https://dev.to/api/articles/${id}`);
    const a = publicRes.data;
    res.json({
      id: a.id,
      title: a.title,
      excerpt: a.description,
      author: a.user.name,
      image: a.cover_image || "/default-article.jpg",
      date: a.published_at,
      tags: a.tags.split(",") || [],
      claps: a.positive_reactions_count,
      comments: a.comments_count,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch article" });
  }
};
