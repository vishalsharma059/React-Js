import React, { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { PostListContext } from "../context/PostContext";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);
  return (
    <div className="relative bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-md border w-full max-w-lg mx-auto mt-16">
      <div className="absolute top-3 right-3 flex items-center gap-2">
        <div className="bg-blue-100 text-blue-600 px-3 py-1 text-xs rounded-full shadow-sm">
          👍 {post.reactions.likes}
        </div>
        <button
          onClick={() => deletePost(post.id)}
          className="text-red-500 hover:text-red-700 transition"
          title="Delete Post"
        >
          <FaTrashAlt className="text-sm" />
        </button>
      </div>

      <h1 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h1>
      <p className="text-gray-700 mb-4">{post.body}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-300 text-gray-800 text-xs px-3 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Post;
