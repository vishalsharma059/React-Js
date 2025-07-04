import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../context/PostContext";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addMultiPost } = useContext(PostListContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addMultiPost(data.posts);
        setLoading(false);
      });
    return () => {
      console.log("Cleaning up useEffect");
      controller.abort();
    };
  }, []);

  return (
    <>
      {loading && <LoadingSpinner />}
      {!loading && postList.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-20">
          <p className="font-semibold text-2xl text-white mb-4">
            You don't have any post!!
          </p>
          {/* <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded px-5 py-2 transition cursor-pointer"
            onClick={handleClick}
          >
            Get posts from server
          </button> */}
        </div>
      ) : (
        postList.map((post) => <Post key={post.id} post={post} />)
      )}
    </>
  );
};

export default PostList;
