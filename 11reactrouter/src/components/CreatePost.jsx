import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostListContext);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-700 px-4">
      <Form
        method="POST"
        className="p-6 bg-white rounded-xl shadow-md w-full max-w-lg space-y-5"
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
            name="userId"
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
            name="title"
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
            name="body"
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
            name="reactions"
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
            name="tags"
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
      </Form>
    </div>
  );
};

export const createPostAction = async (data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });

  return redirect("/");
};

export default CreatePost;
