import { AiOutlineGlobal } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa6";



export default function Publish(){
    return(
        <section id="#publish">
           <div className="flex flex-col p-3 bg-slate-200">
                <div className="flex items-center justify-center py-3 gap-10  rounded-lg">
                    <img 
                        src="/publish 2.jpeg" 
                        className="h-90 rounded-2xl  "
                    />
                    
                    <div className="text-center lg:text-left max-w-md h-90 ">
                        <p className="inline-block text-sm font-bold  bg-gradient-to-r from-blue-400 to-indigo-600 rounded-lg mb-10 py-1 px-3 text-white">Contribute & Inspire</p>
                        <h1 className="text-3xl font-bold text-gray-800 mb-3">Publish Your Tech Story</h1>
                        <p className="text-gray-600 mt-2">Have a great insight, tutorial, or opinion? Share your voice with thousands of readers who love innovation as much as you do.</p>

                        <div className="flex items-center gap-7 mt-4">
                            <button className="flex  items-center  gap-3 mt-4 px-2 py-1 bg-slate-600 text-white rounded-lg cursor-pointer">Start Writing <FaArrowRight /></button>
                            <button className="mt-4 px-2 py-1 bg-slate-200 border border-slate-600 text-slate-600 rounded-lg cursor-pointer">Learn More</button>
                        </div>
                    </div>

                </div>


                <div>
                    <h1>Why Publish on Techlens?</h1>

                    <div>
                        <div>
                            <span><AiOutlineGlobal /></span>
                            <h2>Global Reach</h2>
                            <p>Ge your articles featured in front of thousands tech professional learners worldwide.</p>
                        </div>
                    </div>
                </div>

           </div>
        </section>
    );
}