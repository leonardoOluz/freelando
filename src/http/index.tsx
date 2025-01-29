import axios, { AxiosError } from "axios";
import { ArmazenadorToken } from "../utils/ArmazenadorToken";
import { IData } from "../interface/IU";

const rotasIgnoradas = ["auth/login", "auth/refresh"]

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

const tentarRequisicaoNovoToken = async () => {
  const refreshToken = ArmazenadorToken.refreshToken;
  return axios.get<IData>("http://localhost:8080/auth/refresh", {
    headers: {
      Authorization: `Bearer ${refreshToken}`
    }
  }).then((resposta) => {
    ArmazenadorToken.definirTokens(
      resposta.data.access_token,
      resposta.data.refresh_token
    )
  })
}

const lidarComErro401 = async (error: AxiosError) => {
  await tentarRequisicaoNovoToken()
  .then(() => http(error.config!))
  return Promise.reject(error)
}

http.interceptors.response.use(
  (response) => response,
  function (error: AxiosError) {
    if (!rotasIgnoradas.includes(error.config!.url!) && error.response?.status === 401) {
      return lidarComErro401(error);
    }

    return Promise.reject(error)
  }
)

export default http;