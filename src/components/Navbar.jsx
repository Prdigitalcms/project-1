import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
// import ThemeToggle from "../components/ThemeToggle"; // <-- naya import (path adjust karo)


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);

  // desktop nav link classes (underline + active color)
  const navLinkClasses = ({ isActive }) =>
    `
    relative px-3 py-1.5 text-m font-medium rounded-full
    transition-colors duration-150
    ${isActive
      ? "text-slate-500 dark:text-white"
      : "text-slate-700 dark:text-slate-200/90 hover:text-slate-200 dark:hover:text-white"}
    
    after:content-[''] after:absolute after:left-3 after:-bottom-0.5 
    after:h-[2px] after:rounded-full after:bg-gradient-to-r
    after:from-cyan-500 after:to-sky-500
    after:transition-all after:duration-200
    ${
      isActive
        ? "after:w-[60%]"
        : "after:w-0 hover:after:w-[60%]"
    }
  `;

  return (
    <nav className="w-full z-50 sticky top-0 
      bg-white/10 text-slate-900 
      dark:bg-gradient-to-b dark:from-black/95 dark:via-[#020617]/95 dark:to-[#020617]/90 
      backdrop-blur-xl 
      border-b border-slate-200/70 dark:border-cyan-500/10 
      shadow-md dark:shadow-[0_10px_40px_rgba(15,23,42,0.9)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* LOGO + BRAND */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Glow ring (dark mode) */}
              <div className="absolute inset-0 rounded-2xl 
                bg-gradient-to-tr from-cyan-400 via-sky-500 to-fuchsia-500 
                opacity-0 dark:opacity-70 
                blur-sm group-hover:blur-md group-hover:opacity-100 
                transition-all duration-300"
              />
              <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-2xl 
                bg-slate-100 dark:bg-slate-950 
                flex items-center justify-center overflow-hidden 
                border border-slate-300/80 dark:border-slate-600/70 
                shadow-[0_0_18px_rgba(148,163,184,0.6)] dark:shadow-[0_0_25px_rgba(15,23,42,0.9)]"
              >
                <img
                  src="https://i.pinimg.com/736x/39/18/e5/3918e55645680ff6443f09c6ebad18cb.jpg"
                  alt="PR Digital CMS Logo"
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-lg sm:text-2xl font-black tracking-tight leading-none 
                bg-gradient-to-r from-slate-900 via-cyan-600 to-fuchsia-600 
                dark:from-slate-50 dark:via-cyan-100 dark:to-fuchsia-100 
                bg-clip-text text-transparent"
              >
                PR DIGITAL CMS
              </span>
              <span className="hidden sm:block text-[11px] tracking-[0.22em] uppercase 
                text-slate-500 dark:text-slate-400/90"
              >
                Music Distribution Studio
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-5">
            {[
              { to: "/", label: "Home" },
              { to: "/home-dashboard", label: "Dashboard" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={navLinkClasses}
              >
                {item.label}
              </NavLink>
            ))}

            {isLoggedIn ? (
              <Link
                to="/cms"
                className="px-4 py-2 text-sm font-semibold 
                  text-slate-50 bg-gradient-to-r from-cyan-500 to-sky-500 
                  rounded-full 
                  shadow-[0_0_22px_rgba(56,189,248,0.65)] 
                  hover:shadow-[0_0_32px_rgba(56,189,248,0.95)] 
                  hover:brightness-110 transition-all duration-200"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-semibold 
                  text-slate-900 bg-white 
                  rounded-full hover:bg-slate-100 
                  transition-all duration-150 shadow-sm"
              >
                Login
              </Link>
            )}

            <Link
              to="/signup"
              className="px-4 py-2 text-sm font-semibold rounded-full 
                border border-slate-300 dark:border-slate-600/80 
                bg-slate-900/5 dark:bg-slate-900/70 
                text-slate-900 dark:text-slate-100 
                hover:bg-slate-100 dark:hover:bg-slate-800/90 
                hover:border-cyan-400/70 transition-all duration-150"
            >
              Sign Up
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-900 dark:text-slate-100 
              p-2 rounded-full border 
              border-slate-300 dark:border-slate-700/70 
              bg-white/80 dark:bg-slate-900/80 
              hover:bg-slate-100 dark:hover:bg-slate-800 
              transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="md:hidden 
            bg-white/95 text-slate-900 
            dark:bg-[#020617]/98 dark:text-slate-100 
            backdrop-blur-2xl 
            border-t border-slate-200/70 dark:border-slate-800/70 
            shadow-[0_18px_40px_rgba(15,23,42,0.45)] dark:shadow-[0_18px_40px_rgba(15,23,42,0.95)]"
        >
          <div className="px-4 pt-3 pb-4 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-lg text-sm font-medium
                hover:bg-slate-100 dark:hover:bg-slate-800/70"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/home-dashboard"
              className="block px-3 py-2 rounded-lg text-sm font-medium
                hover:bg-slate-100 dark:hover:bg-slate-800/70"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-lg text-sm font-medium
                hover:bg-slate-100 dark:hover:bg-slate-800/70"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-lg text-sm font-medium
                hover:bg-slate-100 dark:hover:bg-slate-800/70"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-lg text-sm font-medium
                hover:bg-slate-100 dark:hover:bg-slate-800/70"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            {isLoggedIn ? (
              <Link
                to="/cms"
                className="mt-2 block px-3 py-2 rounded-lg text-sm font-semibold 
                  text-slate-50 bg-gradient-to-r from-cyan-500 to-sky-500 
                  shadow-[0_0_20px_rgba(56,189,248,0.6)]"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
            ) : (
              <div className="mt-2 flex flex-col gap-2">
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-lg text-sm font-semibold 
                    text-slate-900 bg-white hover:bg-slate-100"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-3 py-2 rounded-lg text-sm font-semibold 
                    text-slate-100 border border-slate-300 dark:border-slate-700 
                    bg-slate-900/80 hover:bg-slate-800"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      )}
        {/* <ThemeToggle /> */}

    </nav>
    
  );
}
