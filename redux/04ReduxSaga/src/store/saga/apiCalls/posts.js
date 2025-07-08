import axios from "axios"

const postUrl = 'https://jsonplaceholder.typicode.com/posts'

export const getUserAsyncCall = () => {
    return axios.get(postUrl);
}