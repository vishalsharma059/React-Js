import React from "react";
import {
  FaHome,
  FaUserFriends,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const navLinks = [
  { icon: <FaHome />, label: "Home", to: "/" },
  { icon: <FaUserFriends />, label: "Create Post", to: "/create-post" },
  { icon: <FaEnvelope />, label: "Messages" },
  { icon: <FaCog />, label: "Settings" },
];

const SideBar = () => {
  return (
    <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 shadow-sm flex flex-col justify-between p-5 overflow-y-auto">
      {/* Top Section: Menu Items */}
      <div className="flex flex-col space-y-6">
        {navLinks.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            to={item.to}
          />
        ))}
      </div>

      <div className="pt-6 border-t border-gray-200">
        <NavItem
          icon={<FaSignOutAlt />}
          label="Logout"
          onClick={() => alert("Logging out...")}
        />
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, to, onClick }) => {
  const content = (
    <div
      onClick={onClick}
      className="flex items-center gap-3 px-3 py-2 rounded text-sm cursor-pointer transition duration-200 text-gray-700 hover:text-blue-600 hover:bg-blue-50"
    >
      <div className="text-lg">{icon}</div>
      <span>{label}</span>
    </div>
  );
  return to ? <Link to={to}>{content}</Link> : content;
};

export default SideBar;
