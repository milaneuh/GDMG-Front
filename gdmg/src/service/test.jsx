import { redirect } from "react-router-dom";
import { Utilisateur } from "../models/Utilisateur";

export function connectUser(type,name,surname,civilite,mail,password,newsletter){
    console.log("connectUser()")
    const user = new Utilisateur(name,surname,mail,password,civilite,"","","ROLE_CLIENT",true);
    console.log(user);
}