import React from "react";
import Sidebar from "./sidebar";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";

const SideBarButton = ({ title, icon, to }) => {
  const location = useLocation();

  const whenActive = location.pathname === to;
  
  const btnActiveClass = whenActive ? "btn-icon active": "btn-icon";
  

  return (
    <Link to={to}>
      <div className={btnActiveClass}>
        <div className="icon-icon">{icon}</div>
        <p className="icon-title">{title}</p>
      </div>
    </Link>
  );
};

export default SideBarButton;
