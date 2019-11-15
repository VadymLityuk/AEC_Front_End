//  Un marchand décide d’accorder une réduction de 15% à tout acheteur, si le montant total de ses achats est plus grand que 200.00$

var prix = prompt("Entrez le prix de l'item") ;
var rabais = prix * 0.15 ;
var prixReduit = prix - rabais ;

 if(prix < 200) {
    document.write ("Le prix reduit de votre achat sera :" + prix ) ;
}

 if(prix > 200) {
    document.write ("Vouse saves rabais a 15%* : " + prixReduit ) ;
}


















