
var respond ;
var user = prompt("Entrez le nome d'utilisateur");
var pass = prompt("Entrez le password");



if ( user === "admin"&& pass === "12345"  ) {
  document.write ("Bonjour Admin ");

}

else if ( user != "admin" && pass != "12345"){
    document.write ("Votre nom d’utilisateur ou votre mot de passe est invalide");
}










