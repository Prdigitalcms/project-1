// DashboardApp.jsx
import { useState } from "react";
import {
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router";

import {
  Youtube,
  Music,
  HelpCircle,
  FileText,
  Users,
  Tags,
  Sun,
  Moon,
  DollarSign,
  User as UserIcon,
  Save,
} from "lucide-react";

import { ThemeProvider, useTheme } from "./components/ThemeProvider";
import { FormStorageManager } from "./components/FormStorageManager";

import PrivateDashboard from "./pages/PrivateDashboard";
import Support from "./pages/Support";
import Legal from "./pages/Legal";
import MyArtists from "./pages/MyArtists";
import Labels from "./pages/Labels";
import CallerTune from "./pages/CallerTune";
import ReleaseVideo from "./pages/ReleaseVideo";
import ReleaseMusic from "./pages/ReleaseMusic";
import CreateRelease from "./pages/CreateRelease";
import Finance from "./pages/Finance";
import UserProfile from "./pages/UserProfile";

import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../features/reducers/AuthSlice";
import { logOutUserApi } from "../features/actions/AuthAction";

// ================= THEME TOGGLE (optional) =================
function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg text-gray-400 hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-blue-400" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-400" />
      )}
    </button>
  );
}

// ================= SIDEBAR (RESPONSIVE) =================
function Sidebar({ isOpen, onClose }) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showFormManager, setShowFormManager] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const profilePhoto = user?.dp;
  const initials =
    (user?.fullName && user.fullName[0]) ||
    (user?.email && user.email[0]) ||
    "U";

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { name: "Dashboard", path: "/cms", icon: null },
    { name: "Release Music", path: "/cms/release-music", icon: Music },
    { name: "Labels", path: "/cms/labels", icon: Tags },
    { name: "My Artists", path: "/cms/my-artists", icon: Users },
    { name: "User Profile", path: "/cms/user-profile", icon: UserIcon },
  ];

  const handleCreate = () => {
    navigate("/cms/create-release");
    onClose?.();
  };

  const handleLogout = async () => {
    try {
      dispatch(removeUser(null));
      await dispatch(logOutUserApi());
      navigate("/");
    } catch (e) {
      console.log("logout error", e);
    }
  };

  return (
    <>
      {/* 🔹 Mobile backdrop */}
      <div
        className={`fixed inset-0 z-30 bg-black/40 md:hidden transition-opacity ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* 🔹 Sidebar drawer */}
      <div
        className={`
          fixed left-0 top-0 h-full w-64 z-40
          bg-[#05071b] border-r border-gray-800
          p-4
          transform transition-transform duration-200
          -translate-x-full md:translate-x-0
          ${isOpen ? "translate-x-0" : ""}
        `}
      >
        {/* User info */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-700">
          {profilePhoto ? (
            <img
              src={profilePhoto}
              alt={user?.fullName || "Profile"}
              className="w-10 h-10 rounded-full object-cover border border-gray-700"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-sm font-semibold text-white">
              {initials.toUpperCase()}
            </div>
          )}
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">
              {user?.fullName || "User"}
            </span>
            <span className="text-xs text-gray-400">{user?.email || ""}</span>
          </div>
        </div>

        {/* Menu */}
        <nav className="space-y-2 mt-4">
          <button
            onClick={handleCreate}
            className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg px-4 py-2 flex items-center gap-2 hover:from-pink-600 hover:to-red-600 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            <span className="text-lg">+</span> Create
          </button>

          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive(item.path)
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                  : "text-gray-300 hover:bg-white/5 hover:scale-105"
              }`}
            >
              {item.icon && <item.icon className="w-5 h-5" />}
              {item.name}
            </Link>
          ))}

          <button
            onClick={handleLogout}
            className="w-full mt-10 bg-gradient-to-r from-red-700 to-red-500 text-white rounded-lg px-4 py-2 flex items-center gap-2 hover:from-red-800 hover:to-red-600 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            Logout
          </button>
        </nav>
      </div>

      {/* Form manager (agar use karna ho) */}
      <FormStorageManager
        isOpen={showFormManager}
        onClose={() => setShowFormManager(false)}
      />
    </>
  );
}

// ================= MAIN DASHBOARD APP =================
function DashboardApp() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#020518] text-white flex">
        {/* Sidebar (mobile + desktop) */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Right side content */}
        <div className="flex-1 flex flex-col min-h-screen md:ml-64 ml-0">
          {/* Top bar */}
          <header className="sticky top-0 z-20 flex items-center justify-between bg-[#020518]/95 backdrop-blur px-3 sm:px-6 py-3 border-b border-gray-800">
            {/* Hamburger only on mobile */}
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-700"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <div className="space-y-1">
                <span className="block h-0.5 w-5 bg-gray-100" />
                <span className="block h-0.5 w-5 bg-gray-100" />
                <span className="block h-0.5 w-5 bg-gray-100" />
              </div>
            </button>

            <h1 className="text-sm sm:text-base font-semibold">Dashboard</h1>

            <div className="flex items-center gap-2">
              <ThemeToggleButton />
            </div>
          </header>

          {/* Main content */}
          <main className="flex-1 px-3 sm:px-6 py-4 sm:py-6 overflow-y-auto">
            {/* Yaha /cms/* ke nested routes */}
            <Routes>
              {/* /cms */}
              <Route index element={<PrivateDashboard />} />
              {/* /cms/support */}
              <Route path="support" element={<Support />} />
              {/* /cms/legal */}
              <Route path="legal" element={<Legal />} />
              {/* /cms/my-artists */}
              <Route path="my-artists" element={<MyArtists />} />
              {/* /cms/labels */}
              <Route path="labels" element={<Labels />} />
              {/* /cms/caller-tune */}
              <Route path="caller-tune" element={<CallerTune />} />
              {/* /cms/release-video */}
              <Route path="release-video" element={<ReleaseVideo />} />
              {/* /cms/release-music */}
              <Route path="release-music" element={<ReleaseMusic />} />
              {/* /cms/create-release */}
              <Route path="create-release" element={<CreateRelease />} />
              {/* /cms/finance */}
              <Route path="finance" element={<Finance />} />
              {/* /cms/user-profile */}
              <Route path="user-profile" element={<UserProfile />} />
            </Routes>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default DashboardApp;
