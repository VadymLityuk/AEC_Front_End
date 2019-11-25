var sexe;
var age;
var prix = 5555;
var prime;

age = Number(prompt("Entrez votre l'age : "));
sexe = prompt("H (masculin) ou F (feminin)");
if (sexe.toUpperCase() === "H"){
    if (age <25){
        prime = prix *(5/100);
        document.write("<p class='vert'>Le prix d'assurance est" + prime +"</p>");
    }
    else{
        prime = prix *(3/100);
        document.write ( "<p class='vert'>Le prix d'assurance est :" + prime +"</p>");
    }

}
else if  (sexe.toUpperCase() === "F") {
    if (age < 25) {
        prime = prix * (3 / 100);
        document.write( "<p class='magenta'>Le prix d'assurance est" + prime +"</p>");
    } else {
        prime = prix * (2 / 100);
        document.write("<p class='magenta'>Le prix d'assurance est:" + prime + "</p>");
    }
}
else {
    document.write("Il y a une erreur");
}
