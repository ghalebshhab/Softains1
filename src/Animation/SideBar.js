import React, { useState } from "react";
import {
  FiHome,
  FiUser,
  FiSettings,
  FiMail,
  FiBell,
  FiCalendar,
  FiFileText,
  FiPieChart,
  FiHelpCircle,
  FiLogOut,
  FiMenu,
  FiX,
} from "react-icons/fi";
import "./Sidebar.css";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { icon: <FiHome />, text: "Dashboard", active: true },
    { icon: <FiUser />, text: "Profile" },
    { icon: <FiFileText />, text: "Projects" },
    { icon: <FiPieChart />, text: "Analytics" },
    { icon: <FiCalendar />, text: "Calendar" },
    { icon: <FiMail />, text: "Messages", badge: 3 },
    { icon: <FiBell />, text: "Notifications", badge: 7 },
    { icon: <FiSettings />, text: "Settings" },
    { icon: <FiHelpCircle />, text: "Help & Support" },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button className="mobile-menu-btn" onClick={toggleSidebar}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* User profile section */}

        {/* Navigation menu */}
        <nav className="sidebar-nav">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className={item.active ? "active" : ""}>
                <a href="#">
                  {item.icon}
                  <span>{item.text}</span>
                  {item.badge && <span className="badge">{item.badge}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout button */}
        <div className="sidebar-footer">
          <a href="#" className="logout-btn">
            <FiLogOut />
            <span>Logout</span>
          </a>
        </div>
      </div>
    </>
  );
};
export default SideBar;
