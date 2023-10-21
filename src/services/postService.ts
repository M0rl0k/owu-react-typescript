import axios from "axios";

import {IRes} from "../interfaces/axiosResType";
import {IPost} from "../interfaces/postInterface";
import {urls} from "../consts/urls";

const baseURL = 'https://jsonplaceholder.typicode.com';

const axiosInstance = axios.create({baseURL});

const postService = {
    getAll: ():IRes<IPost[]> => axiosInstance.get(urls.posts.base),
    getByID : (id:number):IRes<IPost> => axiosInstance.get(`${urls.posts.base}/${id}`)
}


export {postService}