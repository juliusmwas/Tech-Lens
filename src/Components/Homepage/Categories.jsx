import { useEffect, useRef } from "react";


export default function  Categories(){
    const scrollRef = useRef(null);

useEffect(() => {
  if (window.innerWidth < 768 && scrollRef.current) {
    const scrollContainer = scrollRef.current;

    const interval = setInterval(() => {
      if (!scrollContainer) return;
      scrollContainer.scrollLeft += 1;
      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth
      ) {
        scrollContainer.scrollLeft = 0; // loop back to start
      }
    }, 30);

    return () => clearInterval(interval);
  }
}, []);



    return(
        <section id="#categories" className="bg-slate-200 lg:p-4">
            <div>
                <div className="grid text-center justify-items-center ">
                    <p className="m-5 lg:mb-5 text-sm lg:text-lg font-medium">Explore Different Categories</p>
                </div>

                <div
                    ref={scrollRef}
                    className="
                        flex overflow-x-auto whitespace-nowrap gap-3 sm:gap-4 px-4 pb-3 scroll-smooth
                        scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent
                        lg:flex-wrap lg:justify-center lg:overflow-visible lg:scrollbar-hide
                    "
                    >
                     <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition">
                        <span>🚀</span>
                        <p className="text-xs  text-gray-700">Tech Trends</p>
                    </div>

                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition">
                        <span>🔒</span>
                        <p className="text-xs  text-gray-700">Cybersecurity</p>
                    </div>

                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition">
                        <span>📊</span>
                        <p className="text-xs  text-gray-700">Data Science</p>
                    </div>

                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition">
                        <span>🎨</span>
                        <p className="text-xs  text-gray-700">Design & UX</p>
                    </div>

                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition">
                        <span>☁️</span>
                        <p className="text-xs  text-gray-700">Cloud & DevOps</p>
                    </div>

                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition">
                        <span className="text-xs">🤖</span>
                        <p className="text-xs text-gray-700">AI & Machine Learning</p>
                    </div>

                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition">
                        <span>💻</span>
                        <p className="text-xs  text-gray-700">Web Development</p>
                    </div>
                    
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition">
                        <span>⚙️</span>
                        <p className="text-xs  text-gray-700">Tools & Productivity</p>
                    </div>

                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition">
                        <span>💡</span>
                        <p className="text-xs  text-gray-700">Startups & Innovation</p>
                    </div>                
                    
                </div>
                
            </div>
            
            
        </section>
    );
}