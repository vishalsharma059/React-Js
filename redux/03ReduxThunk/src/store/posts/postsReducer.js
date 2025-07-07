import {
  GET_POSTS_REQUEST_SENT,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
} from "./postsAction";

const initialValue = {
  isLoading: false,
  posts: [],
  error: "",
};

const postsReducer = (store=initialValue, action) => {
  switch (action.type) {
    case GET_POSTS_REQUEST_SENT:
      return {
        ...store,
        isLoading: true,
      };

    case GET_POSTS_SUCCESS:
      return {
        ...store,
        isLoading: false,
        posts: action.payload,
        error: "",
      };

    case GET_POSTS_FAILURE:
      return {
        ...store,
        isLoading: false,
        posts: [],
        error: action.payload,
      };

    default:
      return store;
  }
};

export default postsReducer;
