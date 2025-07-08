import { call, put } from "redux-saga/effects";
import { getUserAsyncCall } from "../apiCalls/posts";
import { getPostSuccess, getPostsFailure, getPostsRequestSent } from "../../posts/postsAction";

export function* handleGetPostsRequest() {
    try {
        // First we set loading to true then call our api
        yield put(getPostsRequestSent());
        const response = yield call(getUserAsyncCall);

        // if success we can call our actions (dispatch)
        yield put(getPostSuccess(response.data));
    } catch (error) {
        const errorMessage = error.message;
        yield put(getPostsFailure(errorMessage));
    }
}