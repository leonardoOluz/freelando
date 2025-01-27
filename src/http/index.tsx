import axios from "axios";
import { ArmazenadorToken } from "../utils/ArmazenadorToken";

const http = axios.create({
  baseURL: "http://localhost:8080"
});

http.interceptors.request.use(function (config) {
  const token = ArmazenadorToken.acessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
}, function (error) {
  return Promise.reject(error);
})

export default http;