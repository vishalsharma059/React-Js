import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-6 mt-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        {/* Left Side: Brand or Message */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} SocialSphere. All rights reserved.
        </p>

        {/* Right Side: Links */}
        <div className="flex space-x-4 mt-3 sm:mt-0">
          <a href="#" className="text-sm hover:text-blue-400 transition">
            About
          </a>
          <a href="#" className="text-sm hover:text-blue-400 transition">
            Privacy
          </a>
          <a href="#" className="text-sm hover:text-blue-400 transition">
            Terms
          </a>
          <a href="#" className="text-sm hover:text-blue-400 transition">
            Help
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
