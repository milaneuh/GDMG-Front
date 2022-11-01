import axios from "axios";
import { API_URL, SIGNIN_URL, SIGNUP_URL } from "../../utils/constantesutils";


const register = (surname, name, email,role,password) => {
  return axios.post(API_URL + SIGNUP_URL, {
    surname,
    name,
    email,
    role,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + SIGNIN_URL, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.email) {
        localStorage.setItem("session", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("session");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("session"));
};

const isAuthenticated = () =>{
  const user = JSON.parse(localStorage.getItem("session"));
  if(user){
    return true;
  }else return false;
}

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};
const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  isAuthenticated
}

export default AuthService;