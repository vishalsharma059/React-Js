import React, { useState } from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import PostContext from "./context/PostContext";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <PostContext>
      <TopBar />

      <div className="flex pt-12 min-h-screen">
        <div className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] border-r bg-white z-10">
          <SideBar />
        </div>

        <div className="ml-64 flex flex-col w-full bg-gray-700 min-h-screen">
          <main className="flex-grow p-6">
            <Outlet />
          </main>

          <Footer />
        </div>
      </div>
    </PostContext>
  );
};

export default App;
