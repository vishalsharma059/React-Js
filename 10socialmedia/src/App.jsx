import React, { useState } from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import PostContext from "./context/PostContext";

const App = () => {
  const [selectTab, setSelectTab] = useState("Home");

  return (
    <PostContext>
      {/* Fixed TopBar */}
      <TopBar />

      <div className="flex pt-12 min-h-screen">
        {/* Fixed Sidebar below TopBar */}
        <div className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] border-r bg-white z-10">
          <SideBar selectTab={selectTab} setSelectTab={setSelectTab} />
        </div>

        {/* Main Content */}
        <div className="ml-64 flex flex-col w-full bg-gray-700 min-h-screen">
          <main className="flex-grow p-6">
            {selectTab === "Home" ? <PostList /> : <CreatePost />}
          </main>

          {/* Sticky footer at bottom */}
          <Footer />
        </div>
      </div>
    </PostContext>
  );
};

export default App;
