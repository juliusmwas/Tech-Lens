
import { RiCameraLensAiLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";


export default function ArticlesNavbar() {
  return (
    <nav className="flex justify-between p-4 shadow-sm items-center bg-gradient-to-r from-slate-200 via-white to-slate-300 text-slate-800">
      <div className="flex items-center gap-2">
        <RiCameraLensAiLine className="text-2xl text-blue-700" />
        <h1 className="font-bold text-xl">TechLens</h1>
      </div>

      <ul className="flex items-center px-10 gap-5 text-sm font-medium">
        <Link to="/" className="hover:text-blue-700">Home</Link>
        <Link to="/about" className="hover:text-blue-700">About</Link>
        <CgProfile className=" text-blue-700 text-2xl" />

      </ul>
    </nav>
  );
}
