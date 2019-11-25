var surface;
var perimetre;
var longeur;
var largeur;

longeur = Number(prompt("Entrez la longeur de rectangle: "));
largeur = Number(prompt("Entrez la largeur de rectangle: "));
perimetre = (2*largeur) + (2*longeur);

if (perimetre >= 100){
    surface = longeur*largeur;
    document.write("La surface total de rectangle est: " + surface);
}

else {
    document.write("Erreur");
}