import {AxiosResponse} from "axios";

export type IRes<Type> = Promise<AxiosResponse<Type>>;