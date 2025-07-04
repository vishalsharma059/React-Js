import React, { useContext, useRef } from "react";
import { PostListContext } from "../context/PostContext";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postDescElement = useRef();
  const reactionElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postDesc = postDescElement.current.value;
    const reactions = reactionElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postDescElement.current.value = "";
    reactionElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postDesc, reactions, tags);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-700 px-4">
      <form
        className="p-6 bg-white rounded-xl shadow-md w-full max-w-lg space-y-5"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Create a New Post
        </h2>

        {/* User ID */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="userId"
          >
            User ID
          </label>
          <input
            id="userId"
            ref={userIdElement}
            type="text"
            placeholder="Your User ID"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Title */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="title"
          >
            Post Title
          </label>
          <input
            id="title"
            ref={postTitleElement}
            type="text"
            placeholder="How are you feeling today..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Description */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="description"
          >
            Post Description
          </label>
          <textarea
            id="description"
            ref={postDescElement}
            rows="4"
            placeholder="Tell me more about it..."
            className="w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Reactions */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="reactions"
          >
            Reactions
          </label>
          <input
            id="reactions"
            ref={reactionElement}
            type="number"
            placeholder="Number of reactions"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Tags */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="tags"
          >
            Tags
          </label>
          <input
            id="tags"
            ref={tagsElement}
            type="text"
            placeholder="Enter tags separated by space"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
