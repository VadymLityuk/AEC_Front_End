var options=[ "INFORMATIQUE","ADMINISTRATION","HISTOIRE","GENIE","GEOGRAPHIE","BUREAUTIQUE"];
var i;
var choix;
var respond ;


choix = prompt("Entrez le nom de cour = ").toUpperCase();

 for ( i=0; i< options.length; i++) {
     if ( choix === options[i] ){
         respond = "OUI" ;
         break;
     }
     else {
         respond = "no";
     }


 }

 document.write(respond );

