import React from "react";
import { Link } from "react-router-dom";
import {
  FaConciergeBell,
  FaUserFriends,
  FaSync,
  FaPhoneAlt,
  FaTools,
  FaRegUser,
  FaFile,
  FaAngleRight,
  FaBars,
} from "react-icons/fa";
import { MdFastfood, MdOutlineDashboard } from "react-icons/md";
import "./Sidebar.css";
import { useState } from "react";

const SideBar = () => {
  const [open, setopen] = useState(false);
  // window.addEventListener("scroll", () => setopen(false));

  return (
    <>
      <FaBars className="menu-open" onClick={() => setopen(!open)} />
      <div className={open ? "sidebar-container active" : "sidebar-container"}>
        <div className="sidebar-header">
          <Link to="/dashboard">
            <p className="sidebar-title">HOTEL</p>
          </Link>
        </div>

        <ul className="sidebar-links">
          <li className="sidebar-link link-1">
            <Link to="/dashboard">
              <div>
                <MdOutlineDashboard className="sidebar-icon" />
                Dashboard
              </div>
            </Link>
          </li>
          <li className="sidebar-link link-1">
            <Link to="/frontdesk">
              <div>
                <FaConciergeBell className="sidebar-icon" />
                Front Desk
              </div>
            </Link>
          </li>

          <li className="sidebar-link">
            <div className="link">
              <FaSync className="sidebar-icon" />
              Progress
              <FaAngleRight className="sidebar-arrow" />
            </div>
            <ul className="sidebar-drop-ul">
              <li className="sidebar-drop-li">Today Page</li>
              <li className="sidebar-drop-li">Monthly View</li>
            </ul>
          </li>
          <li className="sidebar-link link-1">
            <Link to="/report">
              <div>
                <FaFile className="sidebar-icon" />
                Reports
              </div>
            </Link>
          </li>

          <li className="sidebar-link">
            <div>
              <FaPhoneAlt className="sidebar-icon" />
              Request
            </div>
          </li>
          <li className="sidebar-link">
            <Link to="/maintenance">
              <div>
                <FaTools className="sidebar-icon" />
                Maintanence
              </div>
            </Link>
          </li>
          <li className="sidebar-link">
            <Link to="/staff">
              <div>
                <FaUserFriends className="sidebar-icon" />
                Staff
              </div>
            </Link>
          </li>
          <li className="sidebar-link">
            <Link to="/restaurant">
              <div>
                <MdFastfood className="sidebar-icon" />
                Restaurant
              </div>
            </Link>
          </li>
          <li className="sidebar-link">
            <div>
              <FaRegUser className="sidebar-icon" />
              Corprate Booking
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
