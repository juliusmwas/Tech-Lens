import { PiHandsClappingThin } from "react-icons/pi";
import { FaRegCommentDots } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Articles() {

           


    return(
        <section id="articles">
            <div className="grid justify-items-center text-3xl font-medium mt-5 mb-10">
                <h1 >Featured  Articles</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-5 mb-5 p-3">
                

                <div className="max-w-sm mx-auto p-4 bg-slate-100 rounded-xl shadow-sm">
                    <div 
                        className="relative p-8 rounded-lg mb-4 flex justify-center items-center h-48"
                        style={{ 
                        backgroundImage: "url('/AI.png')", 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        }}
                    >
                        <div className="absolute top-4 left-4 flex space-x-2">
                        <span className="bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">AI</span>
                        <span className="bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">Machine Learning</span>
                        </div> 
                    </div>

                  
                    <div className="text-gray-600">
                        <p className="text-sm mb-1"><span className="font-medium text-gray-800"></span>Ethan Caldwell</p>
                        {/* Title */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">How LLMs Are Shaping the Future</h2>
                        {/* Description */}
                        <p className="text-sm text-gray-500">The rise of generative models is transforming software...</p>
                    </div>

                    <div className="flex items-center gap-4 py-2">
                        <p className="text-xs lg:text-sm text-gray-600" >8h ago</p>
                        <PiHandsClappingThin className="text-xs lg:text-sm text-gray-600 cursor-pointer" />
                        <FaRegCommentDots className="text-xs lg:text-sm text-gray-600 cursor-pointer" />
                    </div>

                </div>
                
                <div className="max-w-sm mx-auto p-4 bg-slate-100 rounded-xl shadow-sm">
                    <div 
                        className="relative p-8 rounded-lg mb-4 flex justify-center items-center h-48"
                        style={{ 
                        backgroundImage: "url('/AI.png')", 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        }}
                    >
                        <div className="absolute top-4 left-4 flex space-x-2">
                        <span className="bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">AI</span>
                        <span className="bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">Machine Learning</span>
                        </div> 
                    </div>

                  
                    <div className="text-gray-600">
                        <p className="text-sm mb-1"><span className="font-medium text-gray-800"></span>Ethan Caldwell</p>
                        {/* Title */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">How LLMs Are Shaping the Future</h2>
                        {/* Description */}
                        <p className="text-sm text-gray-500">The rise of generative models is transforming software...</p>
                    </div>

                    <div className="flex items-center gap-4 py-2">
                        <p className="text-xs lg:text-sm text-gray-600" >8h ago</p>
                        <PiHandsClappingThin className="text-xs lg:text-sm text-gray-600 cursor-pointer" />
                        <FaRegCommentDots className="text-xs lg:text-sm text-gray-600 cursor-pointer" />
                    </div>

                </div>

                <div className="max-w-sm mx-auto p-4 bg-slate-100 rounded-xl shadow-sm">
                    <div 
                        className="relative p-8 rounded-lg mb-4 flex justify-center items-center h-48"
                        style={{ 
                        backgroundImage: "url('/AI.png')", 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        }}
                    >
                        <div className="absolute top-4 left-4 flex space-x-2">
                        <span className="bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">AI</span>
                        <span className="bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">Machine Learning</span>
                        </div> 
                    </div>

                  
                    <div className="text-gray-600">
                        <p className="text-sm mb-1"><span className="font-medium text-gray-800"></span>Ethan Caldwell</p>
                        {/* Title */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">How LLMs Are Shaping the Future</h2>
                        {/* Description */}
                        <p className="text-sm text-gray-500">The rise of generative models is transforming software...</p>
                    </div>

                    <div className="flex items-center gap-4 py-2">
                        <p className="text-xs lg:text-sm text-gray-600" >8h ago</p>
                        <PiHandsClappingThin className="text-xs lg:text-sm text-gray-600 cursor-pointer" />
                        <FaRegCommentDots className="text-xs lg:text-sm text-gray-600 cursor-pointer" />
                    </div>

                </div>

                <div className="max-w-sm mx-auto p-4 bg-slate-100 rounded-xl shadow-sm">
                    <div 
                        className="relative p-8 rounded-lg mb-4 flex justify-center items-center h-48"
                        style={{ 
                        backgroundImage: "url('/AI.png')", 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        }}
                    >
                        <div className="absolute top-4 left-4 flex space-x-2">
                        <span className="bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">AI</span>
                        <span className="bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">Machine Learning</span>
                        </div> 
                    </div>

                  
                    <div className="text-gray-600">
                        <p className="text-sm mb-1"><span className="font-medium text-gray-800"></span>Ethan Caldwell</p>
                        {/* Title */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">How LLMs Are Shaping the Future</h2>
                        {/* Description */}
                        <p className="text-sm text-gray-500">The rise of generative models is transforming software...</p>
                    </div>

                    <div className="flex items-center gap-4 py-2">
                        <p className="text-xs lg:text-sm text-gray-600" >8h ago</p>
                        <PiHandsClappingThin className="text-xs lg:text-sm text-gray-600 cursor-pointer" />
                        <FaRegCommentDots className="text-xs lg:text-sm text-gray-600 cursor-pointer" />
                    </div>

                </div>

            </div>
        
            <div className="grid justify-items-center">
                  <Link     to="/Articlespage" 
                            className="px-4 py-2 bg-slate-800 text-white font-semibold rounded-lg shadow-md mt-5 mb-10 transition duration-300"> Explore All Articles →</Link>
            </div>
             

        

        </section>
    );
};