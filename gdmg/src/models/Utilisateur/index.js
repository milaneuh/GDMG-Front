export class Utilisateur{
    surname;
    name;
    mail;
    password;
    role;

   constructor(surname,name,mail,password,role){
    this.name = name;
    this.surname = surname;
    this.mail = mail;
    this.password = password;
    this.role = role;
   }

   getName(){
    return this.name;
   }
   setName(name){
    this.name = name;
   }
   getSurname(){
        return this.surname;
   }
   setSurname(surname){
        this.surname = surname;
   }
}