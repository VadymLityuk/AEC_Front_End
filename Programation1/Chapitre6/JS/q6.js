var coin = [ ];
var choix = Number(prompt("Choisissez:\n1: Pile\n2: Face")) ;

for ( i = 0 ; i < 10 ; i++ ) {

    if (choix === "1")
    {
        coin[i]="Pile";
    }
    else if (choix === "2" )
    {
        coin[i]="Face";
    }
    document.write((i+1)+": "+ coin[i]+"<br>");
}
