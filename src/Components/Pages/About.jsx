import NavbarSimple from "../Homepage/NavbarSimple";
import FooterSimple from "../Homepage/FooterSimple"
import { TbBulb } from "react-icons/tb";
import { DiGoogleAnalytics } from "react-icons/di";
import { FaUsers } from "react-icons/fa";
import { LuClipboardPenLine } from "react-icons/lu";





export default function About() {
  return (
    <>
      <NavbarSimple />
      <section id="about">

        <div className="p-8 grid justify-items-center mt-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Every Innovation Begins with a Lens.</h1>
          <p className="text-gray-700">TechLens is a home for bold ideas, human stories, and the technology shaping tomorrow. <br />
            Here, thinkers, creators, and developers share insights that go beyond the <br />
            surface turning code, design, and discovery into inspiration.</p>

            <div className="grid grid-cols-2 gap-5 mt-10">
              <div className="bg-slate-100 rounded-xl shadow-sm p-4 w-100 text-center">
                <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
                <p className="text-gray-600 text-sm">To make technology simple, inspiring, and accessible.
                  We share ideas, lessons, and stories that help people learn, build, and grow.
                </p>
              </div>

              <div className="bg-slate-100 rounded-xl shadow-sm p-4 w-100 text-center">
                <h2 className="text-xl font-semibold mb-3">Our Vision</h2>
                <p className="text-gray-600 text-sm">To become the most trusted and inspiring destination for modern tech storytelling — where learning feels human, discovery feels exciting, and every voice can make an impact.
                </p>
              </div>
              
            </div>

            <div className="grid justify-items-center text-center w-100 mt-10">
              <p className="text-gray-600 text-sm">We believe technology isn’t just about tools — it’s about the people behind them.
                  It’s about learning, experimenting, failing, and creating again.
                  At TechLens, every article, tutorial, and story aims to demystify complex ideas and celebrate the thinkers driving innovation forward.
                  In a digital world that rewards speed and clicks, we value clarity over noise, depth over hype, and creativity over competition.
              </p>
            </div>

            <div className="mt-7">
              <h2 className="text-2xl font-semibold mb-7">What You’ll Find Here</h2>

              <div className="flex py-5 justify-evenly px-10 gap-5">
                <div className="bg-slate-100 shadow-sm rounded-xl grid justify-items-center text-center p-3">
                    <LuClipboardPenLine  className="text-6xl text-blue-600 mt-3 mb-4" />
                    <h2 className="text-lg font-semibold mb-1">Deep Tech Explorations</h2>
                    <p className="text-gray-600 text-sm">Clear breakdowns of emerging tools and frameworks.</p>
                </div>

                <div className="bg-slate-100 shadow-sm rounded-xl grid justify-items-center text-center p-3">
                    <DiGoogleAnalytics className="text-7xl text-blue-600 mt-3 mb-4" />
                    <h2 className="text-lg font-semibold mb-1">Industry Insights</h2>
                    <p className="text-gray-600 text-sm">Follow trends that matter, filtered through a human lens.</p>
                </div>

                <div className="bg-slate-100 shadow-sm rounded-xl grid justify-items-center text-center p-3">
                    <FaUsers  className="text-7xl text-blue-600 mt-3 mb-4" />
                    <h2 className="text-lg font-semibold mb-1">Community Voices</h2>
                    <p className="text-gray-600 text-sm">Stories from developers, designers, and creators worldwide.</p>
                </div>

                <div className="bg-slate-100 shadow-sm rounded-xl grid justify-items-center text-center p-3">
                    <TbBulb className="text-7xl text-blue-600 mt-3 mb-4" />
                    <h2 className="text-lg font-semibold mb-1">Innovative Ideas</h2>
                    <p className="text-gray-600 text-sm">Clear breakdowns of emerging tools and frameworks.</p>
                </div>
                

              </div>
            </div>

            <div className="px-40 rounded-xl  mt-8 bg-gradient-to-r from-blue-400 to-slate-600 py-12">
              <div className="max-w-3xl mx-auto grid justify-items-center text-center px-4">
                <h1 className="text-3xl font-bold mb-4 text-white">Join Our Growing Community</h1>
                <p className="text-white mb-6">
                  Got an idea, an experience, or a story that could spark someone’s next step? 
                  Whether you’re exploring new tech,  reflecting on a lesson, or simply sharing what you’ve learned — this is your space to inspire and connect.
                </p>
                <button className="bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-900 transition">
                  Share Your Article
                </button>
              </div>
            </div>


        </div>
      </section>

      <FooterSimple />

    </>
  );
}
