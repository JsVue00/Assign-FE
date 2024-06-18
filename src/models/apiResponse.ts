export interface IApiResponse<T> {
    ErrorCode: number;
    Message: string;
    Data: T;
}