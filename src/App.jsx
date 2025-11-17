import { Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Services from "./pages/Services";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import HomeDashboard from "./pages/HomeDashboard.jsx";
import PrivateRoute from "./components/PrivateRoute";
import DashboardApp from "./Dashboard/DashboardApp.jsx";
import { useDispatch } from "react-redux";
import { AxiosIntance } from "./config/Axios.Intance.jsx";
import { addUser, removeUser } from "./features/reducers/AuthSlice.jsx";
import { useEffect } from "react";
import { initAuth } from "./features/actions/AuthAction";


function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  // ✅ Fetch authenticated user if token exists
  useEffect(() => {
    dispatch(initAuth());
  }, [dispatch]);

  useEffect(() => {
    const handler = () => {
      dispatch(removeUser());
      // optionally redirect to /login here using useNavigate
    };

    window.addEventListener("unauthorized", handler);
    return () => window.removeEventListener("unauthorized", handler);
  }, [dispatch]);


  // ✅ Hide Navbar & Footer on protected dashboard routes
  const hideNavbarFooter =
    location.pathname.startsWith("/user-dashboard") ||
    location.pathname.startsWith("/cms");

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* 👇 Conditionally render Navbar */}
      {!hideNavbarFooter && <Navbar />}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home-dashboard" element={<HomeDashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />

          {/* Private / Dashboard Routes */}
          <Route
            path="/user-dashboard/*"
            element={
              <PrivateRoute>
                <DashboardApp />
              </PrivateRoute>
            }
          />
        </Routes>
      </AnimatePresence>

      {/* 👇 Conditionally render Footer */}
      {!hideNavbarFooter && <Footer />}
      <ThemeToggle />
    </div>
  );
}

export default App;
