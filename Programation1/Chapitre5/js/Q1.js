
class JoueurHockey {
       constructor(nom,nbButs,nbPasses) {
         this.nom = nom;
         this.nbButs = nbButs;
         this.nbPasses = nbPasses;
     }
           Total() {
        return( this.nbButs + this.nbPasses );
     }
}
    let sydney = new JoueurHockey("Sydney Crosy","454 buts","787 passes");
    let mario = new JoueurHockey("Mario Lemieux","690 buts","1033 passes");
    let jaromir = new JoueurHockey("Jaromir Jagr","766 buts","1155 passes");

class Equipe {
     constructor(joueur1, joueur2, joueur3) {
        this.joueur1 = joueur1;
        this.joueur2 = joueur2;
        this.joueur3 = joueur3;
    }

          AfficherAlignement() {
        return(" Players: "+ this.joueur1.nom + ", " +  this.joueur2.nom + ", " + this.joueur3.nom + "<br>");
    }

          AfficherPointsTotaux() {
        return("Total des goals: " + (this.joueur1.Total() +" ," + this.joueur2.Total() + "," + this.joueur3.Total()))
    }
}

let equipe1 = new Equipe(sydney, mario, jaromir);

let playersEquipe1 = equipe1.AfficherAlignement();
document.write(playersEquipe1);

let totalpointsEquipe1 = equipe1.AfficherPointsTotaux();
document.write(totalpointsEquipe1);












