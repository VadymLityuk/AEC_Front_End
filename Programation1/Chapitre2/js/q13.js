var nb1;
var nb2;

nb1 = Number(prompt("Entrez le numero A : "));
nb2 = Number(prompt("Entrez le numero B : "));

if (nb1 > nb2){
    document.write("Le A est plus grand :" + nb1);
    document.write("Le B est plus petite: " + nb2 );

}
else if (nb1 < nb2){
    document.write("Le B est plus grand: " + nb2);
    document.write("Le est plus petite : " + nb1 );
}
else{
    document.write("Erreur");
}