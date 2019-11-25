var A;
var B;
var C;

A = Number(prompt("Entrez un nombre: "));
B = Number(prompt("Entrez un nombre: "));
C = Number(prompt("Entrez un nombre: "));

if (A < B && A<C){
    if(B > C ){
        document.write("le plus petit nombre est : " + A);
        document.write("Le plus grand nombre est : " + B);
    }
    else{
        document.write("le plus petit nombre est : " + A);
        document.write("Le plus grand nombre est : " + C);
    }
}

else if (B< A && B<C){
    if ( A > C ){
        document.write("le plus petit nombre est : " + B);
        document.write("Le plus grand nombre est : " + A);
    }
    else{
        document.write("le plus petit nombre est : " + B);
        document.write("Le plus grand nombre est : " + C);
    }
}

else if (C < A && C < B ) {
    if(A > B){
        document.write("le plus petit chiffre est : " + C);
        document.write("Le plus grand chiffre est : " + B);
    }
    else{
        document.write("le plus petit chiffre est : " + C);
        document.write("Le plus grand chiffre est : " + B);
    }

}
else{
    document.write("Erreur");

}