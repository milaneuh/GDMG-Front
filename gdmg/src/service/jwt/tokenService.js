const getLocalRefreshToken = () => {
    const user = JSON.parse(localStorage.getItem("session"));
    return user?.refreshToken;
  };
  
  const getLocalAccessToken = () => {
    const user = JSON.parse(localStorage.getItem("session"));
    return user?.token;
  };
  
  const updateLocalAccessToken = (token) => {
    let user = JSON.parse(localStorage.getItem("session"));
    user.token = token;
    localStorage.setItem("session", JSON.stringify(user));
  };

  const getLocalEmail = () =>{
    const user = JSON.parse(localStorage.getItem("session"));
    return user?.email;
  }
    
  const getUser = () => {
    return JSON.parse(localStorage.getItem("session"));
  };
  
  const setUser = (user) => {
    console.log(JSON.stringify(user));
    localStorage.setItem("session", JSON.stringify(user));
  };
  
  const removeUser = () => {
    localStorage.removeItem("session");
  };
  
  const TokenService = {
    getLocalRefreshToken,
    getLocalAccessToken,
    updateLocalAccessToken,
    getUser,
    setUser,
    removeUser,
    getLocalEmail
  };
  
  export default TokenService;