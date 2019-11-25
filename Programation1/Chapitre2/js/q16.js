var nb1;
var nb2;
var resulta;
var produit;
nb1 = Number(prompt("Entrez un nombre: "));
nb2 = Number(prompt("Entrez un 2ieme nombre : "));

if (nb1 >=10 && nb2 >=10){
    resulta = nb1 + nb2;
    document.write("La somme de vos nombres est : " + resulta);
}
else if (nb1 < 10 && nb2 < 10){
    produit = nb1 * nb2;
    document.write("Le produit de vos nombres est: " + produit);
}
else if (nb1 >10 && nb2 <10){
    var resulta2;
    resulta2 = nb1 - nb2 ;
    document.write("La difference entre les deux nombres est: " + resulta2);
}

else{
    var resulta3;
    resulta3 = nb2 - nb1;
    document.write("La difference entre les deux nombres est : " + resulta3);
}