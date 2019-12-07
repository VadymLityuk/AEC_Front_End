// Écrivez un programme qui demande,
// pour une inscription donnée, le nombre de personnes et affichera le montant de l’inscription à la fin //
// Créer par Vadym Lityuk  en 5.12.2019 //
var personnes;
var rabais;
var montant;
var prixrabais ;
var montantfinale ;

personnes = Number (prompt("Entrez le nombre des personnes :"));
if ( personnes < 10 ){
    montant = 50;
    document.write ("Vouse avez aucun rabais, votre montant pour une personne est : " + montant  );
}

 else if  ( personnes < 20 ) {
     montant = 50 ;
    rabais = montant * (5 / 100);
    prixrabais = montant - rabais;
    montantfinale = prixrabais*personnes;
    document.write ("Vous avez un rabais de 5%, prix pour une personne est : " + prixrabais);
    document.write("Votre prix totale pour le groupe est :  " + montantfinale);

}
  else  if  ( personnes < 30 ) {
      montant = 50;
      rabais = montant*( 10 / 100);
      prixrabais = montant - rabais ;
      montantfinale = prixrabais*personnes;
      document.write ("Vous avez un rabais de 10%, prix pour une personne est : " + prixrabais);
      document.write("Votre prix totale pour le groupe est :  " + montantfinale);

}
  else if ( personnes < 40 ){
     montant = 50;
     rabais = montant*( 15 / 100);
     prixrabais = montant - rabais ;
     montantfinale = prixrabais*personnes;
    document.write ("Vous avez un rabais de 15%, prix pour une personne est : " + prixrabais);
     document.write("  Votre prix totale pour le groupe est :  " + montantfinale);

 }
  else if (personnes >= 40 ){
     montant = 50;
     rabais = montant*( 20 / 100);
     prixrabais = montant - rabais ;
     montantfinale = prixrabais*personnes;
    document.write ("Vous avez un rabais de 20%, prix pour une personne est : " + prixrabais);
     document.write("Votre prix totale pour le groupe est :  " + montantfinale);

 }



