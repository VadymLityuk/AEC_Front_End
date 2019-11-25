
var nb ;

nb = (prompt("Entrez la noumbre: "));

if (nb<= 60) {
    document.write("E");
}
else if (nb >60 && nb <= 70 ){
    document.write("D");
}
else if( nb >70 && nb<= 80 ){
    document.write(" C");
}
else if (nb >80 && nb <= 90){
    document.write("B");
}
else {
    document.write(" A");
}
