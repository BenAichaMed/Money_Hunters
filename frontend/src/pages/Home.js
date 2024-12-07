import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Introduction from "../components/intro/Intro";
import "../styles/home.css";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-content">
        <Introduction />
      </div>
    </div>
  );
}

export default Home;
