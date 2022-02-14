import axios from "axios";

import URL from "./config";

const request = axios.create({
    baseURL: URL,
});

const subscribe = (history = null) => {
    request.interceptors.request.use((config) => {
        let token = localStorage.getItem("token");

        config.headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Content-Type": "multipart/form-data",
        };

        if (token) {
            config.headers["x-access-token"] = token;
        }

        return config;
    });

    request.interceptors.response.use(
        (config) => config,
        (error) => {
            if (error?.response?.status === 401) {
                localStorage.removeItem("token");
                history.push("/");
            }

            if (error.response?.data) {
                console.log(error);
            }

            throw error;
        }
    );
};

export default { request, subscribe };