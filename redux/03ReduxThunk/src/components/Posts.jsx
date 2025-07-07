import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserAsync } from "../store/posts/postsAction";

const Posts = () => {
  const dispatch = useDispatch();
  const postsStore = useSelector((store) => store.postsStore);

  const handleClick = () => {
    dispatch(getUserAsync());
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>

      <button
        onClick={handleClick}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Get Posts from Server
      </button>

      {postsStore.isLoading && <h2 className="mt-4">Loading...</h2>}
      {postsStore.error && (
        <h2 className="text-red-500 mt-4">{postsStore.error}</h2>
      )}

      {!postsStore.isLoading && !postsStore.error && (
        <div className="mt-6 space-y-4">
          {postsStore.posts.map((post) => (
            <div key={post.id} className="border p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-gray-700">{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
