import { takeEvery } from "redux-saga/effects";
import { GET_POST_ASYNC } from "../posts/postsAction";
import { handleGetPostsRequest } from "./handlers/users";

export function* watcherSaga() {
    yield takeEvery(GET_POST_ASYNC, handleGetPostsRequest);
}