import { useEffect } from "react";
import React from "react";
import Timeline from "../components/timeline";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
const Dashboard = () => {
  useEffect(() => {
    document.title = "Instagram";
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      <div className="grid">
        <Timeline />
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
