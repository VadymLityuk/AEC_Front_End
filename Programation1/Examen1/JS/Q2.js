// Faire le code qui permet de lire au clavier la valeur de la variable âge et afficher tranche d'âge en fonction de l'âge.
// Pour faire ce choix, utiliser la table suivante
// Créer par Vadym Lityuk  en 5.12.2019 //

var age;

age = Number(prompt("Entrez l'age de la  personne : "));

if ( age >= 0 && age <= 12 ){
    document.write ( "Enfant ");
}
else if ( age >=13 && age <= 17){
    document.write ( "Adolescent");
}
   else if ( age >= 18 && age <= 54){
       document.write ("Adulte");
}
   else if ( age >= 55 && age < 120 ){
       document.write ("Senior");
}
   else if (age >= 120 ){
       document.write ("félicitation vous êtes encore en vie!!!!");
}
else {
    document.write("Pas encore né");
}
