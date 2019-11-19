

var hour = prompt("Entrez le nombre d'heure ");
var salary = hour*15;
var overtime = salary + 2 ;

if ( salary > 40 ) {
    document.write ("Votre salaire est " + overtime  );

}

else if ( salary < 40 ) {
    salary = hour ;
}
