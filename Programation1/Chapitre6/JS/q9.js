var numbers = [];
var i;
var pluspetite ;
var plusgrand;

for ( i=0; i<10 ;i++){
    numbers[i] = Number(prompt("Entrez une nombre de 1 a 10 :"));

    if ( i === 0){
        pluspetite = numbers[0];
        plusgrand = numbers[0];
    }

      if ( numbers[i] < pluspetite ){
        pluspetite = numbers[i];

    }
      else if ( numbers[i] > plusgrand ) {
        plusgrand = numbers[i];


    }

}

document.write( "plus petite nombre =" + pluspetite + "<br>");
document.write( "plus grand nombre =" + plusgrand + "<br>");

