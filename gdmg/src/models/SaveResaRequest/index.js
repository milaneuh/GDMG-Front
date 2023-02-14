export class SaveResaRequest{
    date_debut;
    date_fin;
    montant_regle;
    reste_percevoir;
    taxe_sejour;
    menage;
    chauffage;
    serviettes;
    nb_adultes;
    nb_enfants;
    nb_bebe;
    nb_animaux;
    prec_resa;
    prec_enfants;
    prec_animaux;
    nom;
    prenom;
    mail;
    adresse;
    code_postal;
    ville;
    pays;
    telephone;
    status;

    build(date_debut,date_fin,montant_regle,reste_percevoir,taxe_sejour,menage,chauffage,serviettes,nb_adultes,nb_enfants,nb_bebe,nb_animaux,prec_resa,prec_enfants,prec_animaux,nom,prenom,mail,adresse,code_postal,ville,pays,telephone,status){
        this.date_debut = date_debut;
        this.date_fin = date_fin;
        this.montant_regle = montant_regle;
        this.reste_percevoir = reste_percevoir;
        this.taxe_sejour = taxe_sejour;
        this.menage = menage;
        this.chauffage = chauffage;
        this.serviettes = serviettes;
        this.nb_adultes = nb_adultes;
        this.nb_enfants = nb_enfants;
        this.nb_animaux = nb_animaux;
        this.nb_bebe = nb_bebe;
        this.prec_enfants = prec_enfants;
        this.prec_animaux = prec_animaux;
        this.prec_resa = prec_resa;
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.code_postal = code_postal;
        this.ville = ville;
        this.pays = pays;
        this.telephone = telephone;
        this.status = status;
    }
}