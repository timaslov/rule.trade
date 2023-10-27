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
        return await axios.get(url, config);
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
        params: parameters}

    try {
        return await axios.post(url, body, config)
    } catch(error) {
        throw error
    }
}