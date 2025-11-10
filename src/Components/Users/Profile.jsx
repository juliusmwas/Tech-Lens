import { useState, useEffect } from "react";
import axios from "axios";
import { FaTwitter, FaGithub, FaLink } from "react-icons/fa";
import NavbarSimple from "../Homepage/NavbarSimple";
import FooterSimple from "../Homepage/FooterSimple";
import { Link, useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Articles");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sessionExpired, setSessionExpired] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setSessionExpired(true);
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get("http://localhost:5000/api/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(res.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        if (error.response?.status === 401) {
          localStorage.removeItem("token");
          setSessionExpired(true);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <>
        <NavbarSimple />
        <div className="text-center py-40 text-gray-500">Loading profile...</div>
        <FooterSimple />
      </>
    );
  }

  if (sessionExpired) {
    return (
      <>
        <NavbarSimple />
        <div className="text-center py-40 text-red-500">
          <p>Session expired or unauthorized. Please log in again.</p>
          <Link
            to="/login"
            className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Go to Login
          </Link>
        </div>
        <FooterSimple />
      </>
    );
  }

  if (!userData) {
    return (
      <>
        <NavbarSimple />
        <div className="text-center py-40 text-red-500">
          Failed to load user data.
        </div>
        <FooterSimple />
      </>
    );
  }

  const articles = []; // placeholder for later fetching user articles

  return (
    <>
      <NavbarSimple />
      <section className="mx-5 mt-10 bg-white rounded-lg shadow-sm">
        <div className="relative h-48 bg-gradient-to-r from-blue-400 to-purple-600 rounded-t-lg">
          <img
            src={userData.avatarUrl || "/default-avatar.jpg"}
            alt="Profile"
            className="absolute left-1/2 -bottom-12 transform -translate-x-1/2 w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>

        <div className="mt-16 text-center">
          <h1 className="text-2xl font-bold">{userData.username}</h1>
          <p className="max-w-xl mx-auto mt-3 text-gray-700 text-sm">
            {userData.bio || "No bio added yet."}
          </p>

          <div className="flex justify-center gap-4 mt-4 text-gray-600">
            {userData.twitter && (
              <a href={userData.twitter} className="hover:text-blue-500">
                <FaTwitter />
              </a>
            )}
            {userData.github && (
              <a href={userData.github} className="hover:text-gray-800">
                <FaGithub />
              </a>
            )}
            {userData.website && (
              <a href={userData.website} className="hover:text-blue-700">
                <FaLink />
              </a>
            )}
          </div>

          <button className="mt-5 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Edit Profile
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-8 text-center">
          <div>
            <p className="text-xl font-bold text-gray-800">{userData.articlesCount || 0}</p>
            <p className="text-sm text-gray-500">Articles</p>
          </div>
          <div>
            <p className="text-xl font-bold text-gray-800">{userData.commentsCount || 0}</p>
            <p className="text-sm text-gray-500">Comments</p>
          </div>
          <div>
            <p className="text-xl font-bold text-gray-800">{userData.followers?.length || 0}</p>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
          <div>
            <p className="text-xl font-bold text-gray-800">{userData.following?.length || 0}</p>
            <p className="text-sm text-gray-500">Following</p>
          </div>
        </div>

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

        <div className="p-8">
          {activeTab === "Articles" && (
            <div className="text-center text-gray-600 py-20">
              <p>No articles yet 📝</p>
            </div>
          )}
          {activeTab === "Comments" && (
            <div className="text-center text-gray-600 py-20">
              <p>{userData.commentsCount || 0} comments posted 💬</p>
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
