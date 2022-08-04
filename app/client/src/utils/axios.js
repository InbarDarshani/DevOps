//Setup axios http requests
import axios from "axios";
let instanceConfig;

if (process.env.NODE_ENV === "development") {
    instanceConfig = axios.create({
        baseURL: "http://localhost:3000/",
        timeout: 20000,
        withCredentials: true,
        headers: {
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        },
    });
}
else {
    instanceConfig = axios.create({
        baseURL: window.location + "api/",
        timeout: 20000,
        withCredentials: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        },
    });
}

const instance = instanceConfig;
export default instance;