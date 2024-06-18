import type { ILoginRequest, IloginResponse } from "@/models/login";
import { api } from "./api";
import type { IAxiosPromise } from "@/models/axiosPromise";

export default {
    async callLogin(request: ILoginRequest): IAxiosPromise<IloginResponse> {
        return await api.post("/api/player/v2/login", request);
    }
}