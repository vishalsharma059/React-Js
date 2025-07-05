import Post from "./Post";

import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();

  return (
    <>
      {postList.length === 0 ? (
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

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
