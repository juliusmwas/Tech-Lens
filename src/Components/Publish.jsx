import { AiOutlineGlobal } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa6";
import { HiOutlineBriefcase } from "react-icons/hi";
import { HiUserGroup } from "react-icons/hi2";
import { MdOutlineMailOutline } from "react-icons/md";





export default function Publish(){
    return(
        <section id="publish">
           <div className="flex flex-col p-3 bg-slate-200">
                <div className="flex items-center justify-center py-3 gap-15 ">
                    <img 
                        src="/publish 2.jpeg" 
                        className="h-90 rounded-2xl  "
                    />
                    
                    <div className="text-center lg:text-left max-w-md h-90 mt-4 ">
                        <p className="inline-block text-sm font-bold  bg-gradient-to-r from-blue-400 to-indigo-600 rounded-lg mb-10 py-1 px-3 text-white">Contribute & Inspire</p>
                        <h1 className="text-3xl font-bold text-gray-800 mb-3">Publish Your Tech Story</h1>
                        <p className="text-gray-600 text-sm mt-2">Have a great insight, tutorial, or opinion? Share your voice with thousands of readers who love innovation as much as you do.</p>

                        <div className="flex items-center gap-7 mt-4">
                            <button className="flex  items-center  gap-3 mt-4 px-2 py-1 bg-slate-600 text-white rounded-lg cursor-pointer">Start Writing <FaArrowRight /></button>
                            <button className="mt-4 px-2 py-1 bg-slate-200 border border-slate-600 text-slate-600 rounded-lg cursor-pointer">Learn More</button>
                        </div>
                    </div>

                </div>


                <div className=" p-3">
                    <h1 className="grid justify-items-center mt-8 text-2xl font-semibold">Why Publish on Techlens?</h1>

                    <div className="flex items-center justify-center  mt-10 gap-6">
                        {/* Card 1 */}
                        <div className=" grid justify-items-center text-center  p-6   w-64">
                            <span className="text-6xl text-blue-500 mt-2 mb-4"><AiOutlineGlobal /></span>
                            <h2 className="text-2xl font-medium mb-2">Global Reach</h2>
                            <p className="text-gray-600 text-sm">Get your articles featured in front of thousands of tech professionals worldwide.</p>
                        </div>

                        {/* Card 2 */}
                        <div className=" grid justify-items-center text-center  p-6  w-64">
                            <span className="text-6xl text-blue-500 mt-2 mb-4"><HiOutlineBriefcase /></span>
                            <h2 className="text-2xl font-medium mb-2">Build Your Brand</h2>
                            <p className="text-gray-600 text-sm">Showcase your expertise and grow a portfolio that gets noticed in the tech community.</p>
                        </div>

                        {/* Card 3 */}
                        <div className=" grid justify-items-center text-center  p-6  w-64">
                            <span className="text-6xl text-blue-500 mt-2 mb-4"><HiUserGroup /></span>
                            <h2 className="text-2xl font-medium mb-2">Community</h2>
                            <p className="text-gray-600 text-sm">Join a growing network of creators shaping the future of technology.</p>
                        </div>
                    </div>


                    <div className="grid justify-items-center mt-8">
                        <div className="bg-slate-400 inline-block w-90  p-6 shadow-sm rounded-xl">
                            <div className="flex items-center gap-5 mb-2">
                                <MdOutlineMailOutline className="text-lg" />
                                <p className="text-gray-600 text-sm">Stay in the loop</p>
                            </div>
                            <h2 className="text-slate-800 text-2xl font-semibold mb-3">Subscribe to Tech Lens</h2>
                            <p className="text-gray-600 text-sm mb-3">Get weekly insights, curated  tutorials, and the latest tech stories  straight to your inbox.</p>

                            <div className="flex items-center gap-3">
                                <input type="email"
                                placeholder="enter email address..."
                                className="bg-white rounded-sm px-2 py-1 text-sm" />
                                <button className=" px-3 py-1 bg-slate-600 text-sm text-white rounded-lg cursor-pointer">Subscribe</button>
                            </div>
                            </div>
                            
                    </div>


                </div>

           </div>
        </section>
    );
}