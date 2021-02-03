<template>
    <div class="container mx-auto mt-5 linear-gradient">
      <h1>Connexion</h1>
      <div v-if="erreurs.length">
          <b>Corriger les erreurs suivantes:</b>
          <ul>
              <li v-for="erreur in erreurs" :key="erreur">
              {{erreur}}
              </li>
          </ul>
      </div>
          
      <form class="p-5" v-on:submit="checkForm" novalidate=true>               
          <div class="form-group">
              <label for="courriel">Courriel</label>
              <input v-model="courriel" required type="email" class="form-control" id="courriel" name="courriel" aria-describedby="email">
              <small id="emailHelp" class="form-text text-muted">Le courriel doit être valide</small>
          </div>
          
          <div class="form-group">
              <label for="pass">Password</label>
              <input v-model="pass" required type="password" class="form-control" id="pass" aria-describedby="passwordHelp">
              <small id="passwordHelp" class="form-text text-muted">!!</small>
          </div>
          <button type="submit" class="btn btn-primary mt-5">Connexion</button>
      </form>
    </div>
</template>

<script>
  
  export default {
    name: 'login',
    data: function () {
      return {
        erreurs: [],
        courriel: null,
        pass: null,
      };
    },
  methods: {
      //Fonction pour vérifier les champs requis
      checkForm: function (e) {
        //Vider le tableau des erreurs
        this.erreurs = [];
        //Si il n'y a aucune erreur l'attribut submit du formulaire est vrai
        if (this.courriel && this.pass) {
          return true;
        }
        if (!this.courriel) {
          this.erreurs.push("Votre courriel est requis");
        }
        if (!this.motDePasse) {
          this.erreurs.push("Votre mot de passe est requis");
        }
        //Empêche de rafraîchir la page lors du submit
        e.preventDefault();
      },
    },
  }
</script>
