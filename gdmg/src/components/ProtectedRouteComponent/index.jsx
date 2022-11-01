import React from "react";
import {useNavigate, Route, Outlet, Navigate} from "react-router-dom";
import AuthService from "../../service/auth/authService";


function ProtectedRoute() {
    
    const navigate = useNavigate()
    console.log(AuthService.isAuthenticated());
    console.log("this", AuthService.isAuthenticated());
  
    return (AuthService.isAuthenticated()?<Outlet/>:<Navigate to="/signin"></Navigate>);
  }
  
  export default ProtectedRoute;