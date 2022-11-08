import axios from "axios";
import TokenService from "./jwt/tokenService";
import { API_URL } from "../utils/constantesutils";

const instance = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  instance.interceptors.request.use(
    (config) => {
      const token = TokenService.getLocalAccessToken();
      if (token) {
        config.headers["Authorization"] = 'Bearer ' + token;  
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;
  
      if (originalConfig.url !== "/auth/signin" && err.response) {
        console.log("Token is expired");
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          console.log("Trying to get a new token with the access token");
          originalConfig._retry = true;
          let user = JSON.parse(localStorage.getItem('user'))
          try {
            console.log(TokenService.getLocalRefreshToken());
            console.log(TokenService.getLocalEmail());
            const rs = await instance.post("/auth/refresh", {
              refreshToken: TokenService.getLocalRefreshToken(),
              email: TokenService.getLocalEmail()
            });
  
            const { accessToken } = rs.data;
            console.log(rs.data);
            TokenService.updateLocalAccessToken(accessToken);
  
            return instance(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }
  
      return Promise.reject(err);
    }
  );
  
  export default instance;