var age;

age= Number(prompt("Entrez votre age svp :"));

if(age >= 18){
    document.write("Adulte");
}
else if(age >=12 && age <=17){
    document.write("Adolescent");
}


else if ( age < 12 ) {
    document.write("Enfant");
}