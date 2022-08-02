import axios from "axios";

let instanceConfig;

if (process.env.NODE_ENV === "production") {
  instanceConfig = axios.create({
    baseURL: process.env.API,
    timeout: 20000,
  });
}
else {
  instanceConfig = axios.create();
}

const instance = instanceConfig;

export default instance;
