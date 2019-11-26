var nb;

nb = Number(prompt("Entrez un numero"));

if (nb <0) {
    document.write("negatif");
}
else if (nb >0){
    document.write("positif");
}
else{
    document.write("zero");
}