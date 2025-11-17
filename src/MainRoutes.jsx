import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import App from "./App";
import DashboardApp from "./Dashboard/DashboardApp";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Routes from Landing App */}
        <Route path="/*" element={<App />} />

        {/* Routes from CMS App */}
        <Route path="/cms/*" element={<DashboardApp />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
