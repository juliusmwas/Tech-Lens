import { RiCameraLensAiLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function ProfileNavbar() {
  return (
    <nav className="flex justify-between p-4 shadow-sm items-center bg-gradient-to-r from-slate-200 via-white to-slate-300 text-slate-800">
      <div className="flex items-center gap-2">
        <RiCameraLensAiLine className="text-2xl text-blue-700" />
        <h1 className="font-bold text-xl">TechLens</h1>
      </div>

      <ul className="flex items-center gap-5 text-sm font-medium">
        <Link to="/" className="hover:text-blue-700">Home</Link>
        <Link to="/about" className="hover:text-blue-700">About</Link>
        <button className=" px-3 py-1 rounded-lg border border-gray-400 font-medium cursor-pointer">Log Out</button>
        
      </ul>
    </nav>
  );
}
