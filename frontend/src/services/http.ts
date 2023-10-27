import axios, { AxiosResponse } from "axios";
import {store} from "../store";

export async function getRequest(path: string, parameters?: Record<string, unknown>): Promise<AxiosResponse> {
    const token: string = store.getters.user ? store.getters.user.accessToken : '';
    const url: string = import.meta.env.VITE_BASE_URL + path;
    const config = {
        headers: { Authorization: `Bearer ${token}` },
        params: parameters
    };

    try {
        const response = await axios.get(url, config);
        console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
}

export async function postRequest(path: string, body: Record<string, unknown>,
                                  parameters?: Record<string, unknown>): Promise<AxiosResponse> {
    const token: string = store.getters.user ? store.getters.user.accessToken : '';
    const url: string = import.meta.env.VITE_BASE_URL + path;
    const config = {
        headers: {Authorization: `Bearer ${token}`},
        params: parameters
    };

    try {
        const response = await axios.post(url, body, config);
        console.log(response);
        return response;
    } catch(error) {
        throw error
    }
}