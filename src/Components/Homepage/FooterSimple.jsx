import { RiCameraLensAiLine } from "react-icons/ri";
import { Link } from "react-router-dom";


export default function NavbarSimple() {
  return (
    <nav className="flex justify-between p-4 shadow-sm items-center bg-slate-700 text-slate-200">
      <div className="flex items-center gap-2">
        <RiCameraLensAiLine className="text-2xl text-blue-700" />
        <h1 className="font-bold text-xl">TechLens</h1>
      </div>

      <ul className="flex items-center gap-5 text-sm font-medium">
        <Link to="/" className="hover:text-blue-700">Home</Link>
        <li><a href="">Terms of Use</a></li>
        <li><a href="">Privacy Policy</a></li>
      </ul>
    </nav>
  );
}
