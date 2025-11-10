import { useState, useEffect } from "react";
import axios from "axios";
import { FaTwitter, FaGithub, FaLink } from "react-icons/fa";
import ProfileNavbar from "../Homepage/ProfileNavbar";
import FooterSimple from "../Homepage/FooterSimple";
import { Link } from "react-router-dom";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("Articles");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sessionExpired, setSessionExpired] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    bio: "",
    twitter: "",
    github: "",
    website: "",
  });
  const [avatar, setAvatar] = useState(null);
  const [preview, setPreview] = useState(null);
  const [saving, setSaving] = useState(false);

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
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserData(res.data);
        setFormData({
          username: res.data.username || "",
          email: res.data.email || "",
          bio: res.data.bio || "",
          twitter: res.data.twitter || "",
          github: res.data.github || "",
          website: res.data.website || "",
        });
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const token = localStorage.getItem("token");
      const formDataToSend = new FormData();

      for (let key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      if (avatar) formDataToSend.append("avatar", avatar);

      const res = await axios.put("http://localhost:5000/api/user/me", formDataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setUserData(res.data.user);
      setShowModal(false);
    } catch (error) {
      console.error("Profile update failed:", error);
      alert("Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <>
        <ProfileNavbar />
        <div className="text-center py-40 text-gray-500">Loading profile...</div>
        <FooterSimple />
      </>
    );
  }

  if (sessionExpired) {
    return (
      <>
        <ProfileNavbar />
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
        <ProfileNavbar />
        <div className="text-center py-40 text-red-500">
          Failed to load user data.
        </div>
        <FooterSimple />
      </>
    );
  }

  const articles = []; // placeholder

  return (
    <>
      <ProfileNavbar />
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

          <button
            onClick={() => setShowModal(true)}
            className="mt-5 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
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

      {/* ✅ Edit Profile Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 w-96 relative">
            <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className="w-full border rounded-lg px-3 py-2"
              />
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Bio"
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                type="text"
                name="twitter"
                value={formData.twitter}
                onChange={handleChange}
                placeholder="Twitter URL"
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                type="text"
                name="github"
                value={formData.github}
                onChange={handleChange}
                placeholder="GitHub URL"
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Website"
                className="w-full border rounded-lg px-3 py-2"
              />

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Change Avatar
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full"
                />
                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="mt-2 w-20 h-20 rounded-full object-cover"
                  />
                )}
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {saving ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <FooterSimple />
    </>
  );
}
