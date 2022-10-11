export class Utilisateur{
    name;
    surname;
    mail;
    password;
    civilite;
    telephone;
    telephone2;
    role;
    newsletter;

   constructor(name,surname,mail,password,civilite,telephone,telephone2,role,newsletter){
    this.name = name;
    this.surname = surname;
    this.mail = mail;
    this.password = password;
    this.civilite = civilite;
    this.telephone = telephone;
    this.telephone2 = telephone2;
    this.role = role;
    this.newsletter = newsletter;
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