import axios from "axios";
import { API_URL, LOGIN_URL } from "../utils/constantesutils";


class ApiService {


  async login(mail, password) {
      let res = null 
      axios
      .post(API_URL + LOGIN_URL, { mail, password })
      .then((response) => {
        console.log(response)
       if (response.data.accessToken) {
          console.log(response.data.accessToken)
          //localStorage.setItem("user", JSON.stringify(response.data));
        }
      })
      .catch((error) =>
        console.log(error.response)
      );
    return res;


  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }
}

export default new ApiService();