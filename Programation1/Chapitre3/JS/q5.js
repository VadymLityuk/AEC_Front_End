

for ( var i =0; i <100 ; i++){
    var nb1 = 0;
    var nb2= 0;
    var  random =0;
    random = Math.floor(Math.random()*2);

    if (random === 1  ){
        nb1++;
        nb2++;
    }

    document.write (random + "," );

}
document.write (","  + nb1);
document.write ("," + nb2);