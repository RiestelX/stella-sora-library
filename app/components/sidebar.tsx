import { NavLink, Link } from "react-router-dom";
import {
  Compass,
  Disc,
  BookOpen,
  BarChart3,
  Info,
} from "lucide-react";
import logo from "/icons/game-icon.webp";

export default function Sidebar() {
  const links = [
    { name: "Trekker", to: "/trekker", icon: <Compass size={18} /> },
    { name: "Disc", to: "/disc", icon: <Disc size={18} /> },
    { name: "Guide", to: "/guide", icon: <BookOpen size={18} /> },
    { name: "Tier List", to: "/tier-list", icon: <BarChart3 size={18} /> },
    { name: "About", to: "/about", icon: <Info size={18} /> },
  ];

  return (
    <aside className="h-screen w-60 bg-[#18181d] text-gray-200 flex flex-col p-5">
      <Link
        to="/"
        className="flex items-center gap-3 border-b border-gray-700 pb-4 mb-4 hover:opacity-90 transition-opacity">
        <img
          src={logo}
          alt="Stella Sora logo"
          className="w-9 h-9 rounded-full object-cover"
        />
        <h1 className="text-lg font-semibold text-[#6dd3ff]">
          Stella Sora Library
        </h1>
      </Link>

      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-3 rounded-md text-[15px] font-medium transition-all duration-200 ${
                isActive
                  ? "text-[#6dd3ff] bg-[#23242b]"
                  : "text-gray-300 hover:text-[#6dd3ff] hover:bg-[#23242b]"
              }`
            }
          >
            {link.icon}
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}