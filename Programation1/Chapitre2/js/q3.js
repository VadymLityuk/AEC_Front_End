 //  Lire deux nombres, si les deux nombres sont plus grands que 9 écrire le mot « BONJOUR » et si tel n’est pas le cas écrire « BONSOIR »

 var nb1;
 var nb2;

 nb1 = Number (prompt("Entrez le nombre 1 : "));
 nb2 = Number (prompt ("Entrez le nombre 2 : "));

 if (nb1 > 9 && nb2 > 9 ) {
     document.write ("Bonjour") ;
 }

 else if ( nb1 < 9 && nb2 < 9 ) {
    document.write ("Bonsoir") ;
 }

