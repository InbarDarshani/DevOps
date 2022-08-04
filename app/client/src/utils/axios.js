//Setup axios http requests
import axios from "axios";
let instanceConfig;

if (process.env.NODE_ENV === "development") {
    instanceConfig = axios.create({
        //Default React base url is http://localhost:3000/ 
        //Request will be proxied to the url appears in package.json - the default node server http://localhost:5000/
        baseURL: "http://localhost:3000",
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
        baseURL: process.env.REACT_APP_API,
        timeout: 20000,
        withCredentials: true,
        headers: {
            "Access-Control-Allow-Origin": process.env.REACT_APP_API,
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