import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRegClock, FaRegCalendarAlt, FaRegCommentDots } from "react-icons/fa";
import { PiHandsClappingLight } from "react-icons/pi";
import ArticlesNavbar from "../Homepage/ArticlesNavbar";

const articles = [
  {
    id: 1,
    title: "Mastering the MERN Stack — From Beginner to Deployer",
    content: `
      The MERN stack (MongoDB, Express, React, Node.js) is the modern developer’s toolkit
      for building fast, scalable full-stack web apps. In this guide, we’ll break down
      each layer, from setting up your Node.js API to deploying your React frontend on the cloud.

      ### 1. Understanding the Stack
      - **MongoDB** — A NoSQL database that stores data as JSON-like documents.
      - **Express.js** — A flexible Node.js framework for APIs.
      - **React.js** — A frontend library for building dynamic UIs.
      - **Node.js** — The runtime environment powering your backend logic.

      ### 2. Building a Project
      Create your backend routes, connect your database, and integrate them with your frontend using Axios or Fetch API.
    `,
    author: "Julius Mwangi",
    date: "2025-11-08",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1581091012184-7f3a2b5a57c4?auto=format&fit=crop&w=900&q=80",
    tags: ["MERN", "Full-Stack", "Guide"],
  },
  // ... other articles
];

export default function SingleArticlePage() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) return <p className="text-center mt-20">Article not found 😢</p>;

  return (
    <>
      <ArticlesNavbar />

      <motion.div
        className="min-h-screen bg-gray-50 pb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero Section */}
        <div className="relative w-full h-72 md:h-[400px] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8 text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">{article.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-200">
              <span>{article.author}</span>
              <span>•</span>
              <FaRegCalendarAlt />{" "}
              {new Date(article.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
              <span>•</span>
              <FaRegClock /> {article.readTime}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 mt-10">
          <div className="flex gap-2 mb-4 flex-wrap">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="prose prose-slate max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, "<br/>") }}
          />

          {/* Reaction Bar */}
          <div className="mt-10 flex items-center gap-6 text-slate-600">
            <div className="flex items-center gap-1 hover:text-slate-800 cursor-pointer">
              <PiHandsClappingLight size={16} /> <span>24</span>
            </div>
            <div className="flex items-center gap-1 hover:text-slate-800 cursor-pointer">
              <FaRegCommentDots size={16} /> <span>8</span>
            </div>
            <Link to="/" className="ml-auto text-slate-500 hover:text-slate-700 text-sm">
              ← Back to Articles
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
