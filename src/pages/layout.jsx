import React from "react";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import MainSection from "../components/MainSection/MainSection";
import "./layout.css";
const Layout = () => {
  return (
    <div className="layout">
      <LeftSidebar />
      <MainSection />
    </div>
  );
};

export default Layout;
