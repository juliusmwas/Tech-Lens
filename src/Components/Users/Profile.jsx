import { FaTwitter, FaGithub, FaLink } from "react-icons/fa";
import NavbarSimple from "../Homepage/NavbarSimple";
import FooterSimple from "../Homepage/FooterSimple"

export default function Profile() {
  return (
    <>
    <NavbarSimple />
    <section className="max-w-6xl mx-auto mt-10 bg-white rounded-lg shadow-sm">
      {/* Banner */}
      <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-lg">
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

      {/* Tabs */}
      <div className="flex justify-center mt-8 border-b border-gray-200">
        <button className="px-6 py-3 font-medium text-blue-600 border-b-2 border-blue-600">
          Articles
        </button>
        <button className="px-6 py-3 text-gray-600 hover:text-blue-600">
          Comments
        </button>
        <button className="px-6 py-3 text-gray-600 hover:text-blue-600">
          Reading List
        </button>
      </div>

      {/* Articles */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 mb-5">
        {/* Article Card */}
        <div className="bg-gray-50 shadow-sm rounded-lg overflow-hidden hover:shadow-md transition">
          <img src="/ai.jpeg" className="w-full h-40 object-cover" alt="AI" />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-1">
              The Future of AI in Everyday Life
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Exploring how artificial intelligence will shape productivity and
              creativity in the next decade.
            </p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>❤️ 45 Likes</span>
              <span>💬 8 Comments</span>
            </div>
          </div>
        </div>

        {/* Article Card 2 */}
        <div className="bg-gray-50 shadow-sm rounded-lg overflow-hidden hover:shadow-md transition">
          <img
            src="/uiux.jpeg"
            className="w-full h-40 object-cover"
            alt="Design"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-1">
              Designing for Humans, Not Screens
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Why empathy and accessibility are the cornerstones of great UX.
            </p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>❤️ 62 Likes</span>
              <span>💬 14 Comments</span>
            </div>
          </div>
        </div>

        {/* Article Card 3 */}
        <div className="bg-gray-50 shadow-sm rounded-lg overflow-hidden hover:shadow-md transition">
          <img
            src="/devops.jpeg"
            className="w-full h-40 object-cover"
            alt="DevOps"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-1">
              Cloud & DevOps: Building Resilient Systems
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              From containers to CI/CD — how modern DevOps empowers
              collaboration and uptime.
            </p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>❤️ 39 Likes</span>
              <span>💬 6 Comments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
     <FooterSimple />
    </>
  );
}
