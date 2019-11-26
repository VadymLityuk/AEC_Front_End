var prix;
var rabais;
var prixrabais;
var prixfinale;

prix = Number(prompt("Entrez votre prix"));
rabais = 0.12;
if (prix >=500){
    prixrabais = prix * rabais;
    prixfinale = prix - prixrabais;
    document.write("Vous avez d'escompte votre prix finalle est : " + prixfinale);
}
else{
    document.write("Le prix finalle est :" + prix );
}