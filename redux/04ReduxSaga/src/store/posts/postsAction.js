

export const GET_POST_ASYNC = "GET_POST_ASYNC";
export const GET_POSTS_REQUEST_SENT = "GET_POSTS_REQUEST";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

export const getPostAsync = () => ({ type: GET_POST_ASYNC });

export const getPostsRequestSent = () => ({ type: GET_POSTS_REQUEST_SENT });

export const getPostSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
});

export const getPostsFailure = (errorMessage) => ({
  type: GET_POSTS_FAILURE,
  payload: errorMessage,
});

