import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Compass,
  Disc,
  BookOpen,
  BarChart3,
  Info,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import logo from "/icons/game-icon.webp";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768; // md breakpoint
      setIsMobile(mobile);
      setIsCollapsed(mobile);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { name: "Trekker", to: "/trekker", icon: <Compass size={18} /> },
    { name: "Disc", to: "/disc", icon: <Disc size={18} /> },
    { name: "Guide", to: "/guide", icon: <BookOpen size={18} /> },
    { name: "Tier List", to: "/tier-list", icon: <BarChart3 size={18} /> },
    { name: "About", to: "/about", icon: <Info size={18} /> },
  ];

  return (
    <div className="relative">
      {/* Sidebar container */}
      <aside
        className={`h-screen bg-[#18181d] text-gray-200 flex flex-col px-2 pt-5 transition-all duration-300
        ${isCollapsed ? "w-20" : "w-60"}`}
      >
        {/* Logo */}
        <Link
          to="/"
          className={`flex items-center gap-3 border-b border-gray-700 pb-4 mb-4 hover:opacity-90 transition-opacity ${
            isCollapsed ? "justify-center" : ""
          }`}
        >
          <img
            src={logo}
            alt="Stella Sora logo"
            className="w-9 h-9 rounded-full object-cover"
          />
          {!isCollapsed && (
            <h1 className="text-lg font-semibold text-[#6dd3ff] whitespace-nowrap">
              Stella Sora Library
            </h1>
          )}
        </Link>

        {/* Nav links */}
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
                } ${isCollapsed ? "justify-center" : ""}`
              }
            >
              {link.icon}
              {!isCollapsed && <span>{link.name}</span>}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Floating Collapse Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`absolute top-4.5 z-20 bg-[#23242b] hover:bg-[#2f3139]
          text-gray-300 hover:text-[#6dd3ff] p-2 rounded-full shadow-md border border-gray-700
          transition-all duration-300
          ${isCollapsed ? "left-20" : "left-60"} -translate-x-1/2`}
      >
        {isCollapsed ? <ChevronRight size={22} /> : <ChevronLeft size={22} />}
      </button>
    </div>
  );
}
