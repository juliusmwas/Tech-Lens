import { FaTwitter, FaGithub, FaLink } from "react-icons/fa";
import NavbarSimple from "../Homepage/NavbarSimple";
import FooterSimple from "../Homepage/FooterSimple";
import { HiOutlineBookOpen } from "react-icons/hi";
import { FaRegCalendarAlt, FaRegClock, FaRegCommentDots } from "react-icons/fa";
import { PiHandsClappingLight } from "react-icons/pi";
import { Link } from "react-router-dom"; 
import { useState } from "react"; 


export default function Profile() {
  const articles = [
    {
      id: 1,
      title: "The Future of AI in Everyday Life",
      excerpt:
        "Exploring how artificial intelligence will shape productivity and creativity in the next decade.",
      author: "Julius Mwangi",
      date: "November 8, 2025",
      readTime: "5 min read",
      image: "/ai.jpeg",
      tags: ["AI", "Future", "Innovation"],
      claps: 45,
      comments: 8,
    },
    {
      id: 2,
      title: "Designing for Humans, Not Screens",
      excerpt:
        "Why empathy and accessibility are the cornerstones of great UX design in the digital era.",
      author: "Julius Mwangi",
      date: "November 6, 2025",
      readTime: "4 min read",
      image: "/uiux.jpeg",
      tags: ["UX", "Design", "Accessibility"],
      claps: 62,
      comments: 14,
    },
    {
      id: 3,
      title: "Cloud & DevOps: Building Resilient Systems",
      excerpt:
        "From containers to CI/CD — how modern DevOps empowers collaboration and uptime.",
      author: "Julius Mwangi",
      date: "November 5, 2025",
      readTime: "6 min read",
      image: "/devops.jpeg",
      tags: ["Cloud", "DevOps", "Engineering"],
      claps: 39,
      comments: 6,
    },
  ];

  const [activeTab, setActiveTab] = useState("Articles");


  return (
    <>
      <NavbarSimple />
      <section className=" mx-5 mt-10 bg-white rounded-lg shadow-sm">
        {/* Banner */}
        <div className="relative h-48 bg-gradient-to-r from-blue-400 to-purple-600 rounded-t-lg">
          <img
            src="/profile-pic.jpeg"
            alt="Profile"
            className="absolute left-1/2 -bottom-12 transform -translate-x-1/2 w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="mt-16 text-center">
          <h1 className="text-2xl font-bold">Julius Mwangi</h1>
          <p className="text-gray-500">@julius_dev</p>
          <p className="max-w-xl mx-auto mt-3 text-gray-700 text-sm">
            Frontend Developer passionate about creating elegant UIs and exploring
            the intersection of technology, design, and human experience.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-4 text-gray-600">
            <a href="#" className="hover:text-blue-500">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-800">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-blue-700">
              <FaLink />
            </a>
          </div>

          <button className="mt-5 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Edit Profile
          </button>
        </div>

        {/* Stats */}
        <div className="flex justify-center mt-6 space-x-8 text-center">
          <div>
            <p className="text-xl font-bold text-gray-800">12</p>
            <p className="text-sm text-gray-500">Articles</p>
          </div>
          <div>
            <p className="text-xl font-bold text-gray-800">356</p>
            <p className="text-sm text-gray-500">Likes</p>
          </div>
          <div>
            <p className="text-xl font-bold text-gray-800">280</p>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
          <div>
            <p className="text-xl font-bold text-gray-800">194</p>
            <p className="text-sm text-gray-500">Following</p>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="flex justify-center mt-8 border-b border-gray-200">
          {["Articles", "Comments", "Reading List"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium transition ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Tab Content */}
        <div className="p-8">
          {activeTab === "Articles" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  to={`/article/${article.id}`}
                  className="block"
                >
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1">
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
                  </div>
                </Link>
              ))}
            </div>
          )}

          {activeTab === "Comments" && (
            <div className="text-center text-gray-600 py-20">
              <p>No comments yet 💬</p>
            </div>
          )}

          {activeTab === "Reading List" && (
            <div className="text-center text-gray-600 py-20">
              <p>Your reading list is empty 📚</p>
            </div>
          )}
        </div>


        
      </section>
      <FooterSimple />
    </>
  );
}
