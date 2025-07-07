import axios from "axios";

export const GET_POSTS_REQUEST_SENT = "GET_POSTS_REQUEST";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

export const getPostsRequestSent = () => ({ type: GET_POSTS_REQUEST_SENT });

export const getPostSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
});

export const getPostsFailure = (errorMessage) => ({
  type: GET_POSTS_FAILURE,
  payload: errorMessage,
});

// Also, when we are using redux thunk, we can retunr a function in our action

// This is a new action creator that works only with redux thunk middleware

export const getUserAsync = () => {
  return (dispatch) => {
    dispatch(getPostsRequestSent());
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        const posts = res.data;
        dispatch(getPostSuccess(posts));
      })
      .catch((err) => {
        const errorMessage = err.message;
        dispatch(getPostsFailure(errorMessage));
      });
  };
};
