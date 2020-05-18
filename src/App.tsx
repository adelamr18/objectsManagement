import React from "react";
import ObjectsDashboard from "./views/objects-dashboard/objects-dashboard";
import Header from "./shared/components/header/header";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="header-container-outer">
        <Header />
      </div>
      <div className="dashboard-container-outer">
        <ObjectsDashboard />
      </div>
    </div>
  );
}

export default App;
