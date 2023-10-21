import axios from "axios";

import {IRes} from "../interfaces/axiosResType";
import {ILaunch} from "../interfaces/launchInterface";
import {urls} from "../consts/urls";

const baseURL = 'https://api.spacexdata.com/v3';
const axiosInstance = axios.create({baseURL});

const launchesService = {
    getAll: ():IRes<ILaunch[]> => axiosInstance.get(urls.launches.base)
}

export {launchesService}