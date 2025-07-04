import { act, createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  addMultiPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  switch (action.type) {
    case "DELETE_POST":
      return currPostList.filter((post) => post.id !== action.payload.postId);

    case "ADD_POST":
      return [...currPostList, action.payload];
    
    case "ADD_MULTI_POST":
      return action.payload.posts;

    default:
      return currPostList;
  }
};

const PostContext = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    []
  );

  const addPost = (userId, postTitle, postDesc, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postDesc,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addMultiPost = (posts) => {
    dispatchPostList({
      type: "ADD_MULTI_POST",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostListContext.Provider
      value={{
        postList,
        addPost,
        addMultiPost,
        deletePost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};



export default PostContext;
