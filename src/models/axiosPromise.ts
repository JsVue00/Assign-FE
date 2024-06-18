import type { IApiResponse } from "./apiResponse";

interface IAxiosResponse<T> {
    data: IApiResponse<T>;
}

export type IAxiosPromise<T> = Promise<IAxiosResponse<T>>;