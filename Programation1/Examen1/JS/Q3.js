

var prixpizza ;
var legumes ;
var choixlegumes;
var pepperoni;
var choixpepperoni;
var sauce ;
var choixsauce;
var prixtotale ;
var tps;
var tvq;
var prixaveclestaxes ;
prixpizza  = 10;

legumes = prompt("Voulez-vous ajouter des légumes dans votre pizza OUI ou NON");
pepperoni = prompt ("Voulez-vous ajouter du pepperoni dans votre pizza  OUI ou NON");
sauce =  Number (prompt ("Combien les sauces voulez-vous ajouter ? SVP  remarqué vous que le prix de la sauce 1$ par personnes" ));

if ( legumes.toUpperCase() === "OUI"){
    legumes = 5;
    choixlegumes = "légumes ajoutés à la commande, ";
}
else if ( legumes.toUpperCase() === "NON") {
    legumes = 0;
    choixlegumes = " sans légumes,  ";
}
else {
    choixlegumes = "erreur";
}
if ( pepperoni.toUpperCase() === "OUI"){
    pepperoni = 10;
    choixpepperoni = " pepperoni ajoutés à la commande , ";
}
else if ( pepperoni.toUpperCase() === "NON") {
    pepperoni = 0;
    choixpepperoni = " sans pepperoni, ";
}
else {
    choixpepperoni = "Erreur" ;
}
if ( sauce > 1 ){

        choixsauce = "  sauce ajoutés à la commande , ";
}
else {

    choixsauce = "  sans sauce,  ";
}

prixtotale  = prixpizza+legumes+pepperoni+sauce ;
tps = prixtotale*0.05;
tvq = prixtotale*0.0975;
prixaveclestaxes = prixtotale+tps+tvq ;


document.write ( "  Le prix de base de la Pizza au fromage est de 10$  :   ");
document.write  ( choixlegumes+choixpepperoni+choixsauce);
document.write("Le prix totale de votre commande avant les taxes est de : " + prixtotale );
document.write ("  ,Le prix totale avec TPS et TVQ est de :  " + prixaveclestaxes);




