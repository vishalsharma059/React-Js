import React from "react";
import { FaBell, FaSearch, FaRegCommentDots, FaBars } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="w-full bg-gray-800 shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="text-2xl font-bold text-white">SocialSphere</div>

        <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full w-1/2">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-full text-sm"
          />
        </div>

        <div className="flex items-center space-x-4">
          <FaRegCommentDots className="text-white hover:text-orange-400 text-lg cursor-pointer" />
          <FaBell className="text-white hover:text-orange-400 text-lg cursor-pointer" />
          <img
            // src={profilePic}
            alt="profile"
            className="w-8 h-8 rounded-full object-cover border border-white cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
