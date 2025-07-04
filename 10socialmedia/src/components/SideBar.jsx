import React from "react";
import {
  FaHome,
  FaUserFriends,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const navLinks = [
  { icon: <FaHome />, label: "Home" },
  { icon: <FaUserFriends />, label: "Create Post" },
  { icon: <FaEnvelope />, label: "Messages" },
  { icon: <FaCog />, label: "Settings" },
];

const SideBar = ({ selectTab, setSelectTab }) => {
  return (
    <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 shadow-sm flex flex-col justify-between p-5 overflow-y-auto">
      {/* Top Section: Menu Items */}
      <div className="flex flex-col space-y-6">
        {navLinks.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={selectTab === item.label}
            onClick={() => setSelectTab(item.label)}
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

const NavItem = ({ icon, label, active, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-3 px-3 py-2 rounded text-sm cursor-pointer transition duration-200 ${
      active
        ? "bg-blue-100 text-blue-600 font-semibold"
        : "text-gray-700 hover:text-blue-600"
    }`}
  >
    <div className="text-lg">{icon}</div>
    <span>{label}</span>
  </div>
);

export default SideBar;
