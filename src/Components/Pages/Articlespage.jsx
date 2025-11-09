import ArticlesNavbar from "../Homepage/ArticlesNavbar";
import { motion } from "framer-motion";
import { HiOutlineBookOpen } from "react-icons/hi";
import { FaRegCalendarAlt, FaRegClock, FaRegCommentDots } from "react-icons/fa";
import { PiHandsClappingLight } from "react-icons/pi";
import { Link } from "react-router-dom";



const articles = [
  {
    id: 1,
    title: "Mastering the MERN Stack — From Beginner to Deployer",
    excerpt:
      "Learn how to build, secure, and deploy full-stack apps using MongoDB, Express, React, and Node.js. Perfect for modern developers.",
    author: "Julius Mwangi",
    date: "November 8, 2025",
    readTime: "6 min read",
    claps: 24,
    comments: 8,
    image:
      "https://images.unsplash.com/photo-1581091012184-7f3a2b5a57c4?auto=format&fit=crop&w=900&q=80",
    tags: ["MERN", "Full-Stack", "Guide"],
  },
  {
    id: 2,
    title: "Understanding React Hooks Like a Pro",
    excerpt:
      "React Hooks changed the way developers think about components. Let’s dive deep into useState, useEffect, and custom hooks.",
    author: "Julius Mwangi",
    date: "November 3, 2025",
    readTime: "5 min read",
    claps: 15,
    comments: 5,
    image:
      "https://images.unsplash.com/photo-1633356122544-3b9fa2b4e9c7?auto=format&fit=crop&w=900&q=80",
    tags: ["React", "Frontend", "Hooks"],
  },
  {
    id: 3,
    title: "Securing Your Node.js API the Right Way",
    excerpt:
      "Security is not optional. Learn how to protect your Express routes, handle JWT tokens safely, and prevent common attacks.",
    author: "Julius Mwangi",
    date: "October 28, 2025",
    readTime: "7 min read",
    claps: 32,
    comments: 11,
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=900&q=80",
    tags: ["Node.js", "Security", "Backend"],
  },
];

export default function ArticlesPage() {
  return (
    <>
      <ArticlesNavbar />

      <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
              Explore the Latest Insights
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Deep dives, tutorials, and professional advice from the world of modern web development.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
            <Link to={`/article/${article.id}`} className="block">
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6 flex flex-col min-h-[300px]">
                  <div>
                    <div className="flex gap-2 mb-3 flex-wrap">
                      {article.tags.map((tag) => (
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
                      <span>{article.author}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <FaRegCalendarAlt size={13} className="text-slate-500" />
                        <span>
                          {new Date(article.date).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <FaRegClock size={13} className="text-slate-500" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Social Interaction */}
                  <div className="mt-2 flex items-center justify-between text-gray-500 text-sm">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1 hover:text-blue-600 transition">
                        <PiHandsClappingLight size={15} /> {article.claps}
                      </button>
                      <button className="flex items-center gap-1 hover:text-blue-600 transition">
                        <FaRegCommentDots size={15} /> {article.comments}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
