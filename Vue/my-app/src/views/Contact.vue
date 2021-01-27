<template>
    <div id="pageContact" class="container-fluid">           
          <div v-if="erreurs.length">
            <b>Corriger les erreurs suivantes:</b>
            <ul>
              <li v-for="erreur in erreurs" :key="erreur">
                {{erreur}}
              </li>
            </ul>
          </div>
          <fieldset>
            <legend class="w-auto px-2"><h1>Demande d'informations</h1></legend>
            <form id="formContact" class="p-5" v-on:submit="checkForm" novalidate=true>       
                <div class="form-group">
                    <label for="courriel">Courriel</label>
                    <input v-model="courriel" required type="email" class="form-control" id="courriel" name="courriel" aria-describedby="email">
                    <small id="emailHelp" class="form-text text-muted">Le courriel doit être valide</small>
                </div>
                <div class="form-group">
                    <label for="confirmcourriel">Confirmation du courriel</label>
                    <input v-model="confirmCourriel" required type="email" class="form-control" id="confirmcourriel" 
                        placeholder="Entrer votre courriel de nouveau">
                </div>
                <div class="form-group">
                    <label for="motDePasse">Mot de passe</label>
                    <input v-model="motDePasse" required type="password" class="form-control" id="motDePasse" aria-describedby="passwordHelp">
                    <small id="passwordHelp" class="form-text text-muted">Ne partager pas votre mot de passe</small>
                </div>
                <div  class="form-group">
                    <label class="my-1 mr-2" for="subjects">Sujet</label>
                    <select required v-model="sujetChoisi" class="custom-select my-1 mr-sm-2" id="subjects">  
                        <option v-for="sujet in sujets" :key="sujet">{{sujet}}</option>
                    </select>                               
                </div>
                <div  class="form-group">
                    <label for="question">Écrire votre question</label>
                    <textarea v-model="question" required class="form-control" id="question" rows="3"></textarea>
                </div>                
                <button type="submit" class="btn btn-primary mt-5 mb-5">Soumettre</button>             
            </form>
          </fieldset>
    </div>
</template>

<script>
  
  export default {
    name: 'contact',
    data: function () {
        return {
        erreurs: [],
        sujets: [
            "Achat de planche",
            "Conseils techniques",
            "Cours d'initiation",
            "Cours de yoga sur planche",
            "Autres",
        ],
        courriel: null,
        confirmCourriel: null,
        motDePasse: null,
        sujetChoisi: null,
        question: null,
    };
  },
  methods: {
        checkForm: function (e) {
        this.erreurs = [];
        if (!this.courriel) {
            this.erreurs.push("Un courriel est requis");
        } else if (!this.checkEmail(this.courriel)) {
            this.erreurs.push("Un courriel valide est requis");
        }
        if (!this.confirmCourriel) {
            this.erreurs.push("Vous devez confirmer votre courriel");
        } else if (this.conrriel != this.courriel) {
            this.erreurs.push("Les deux courriels ne sont pas identiques");
        }
        if (!this.motDePasse) {
            this.erreurs.push("Un mot de passe est requis");
        }
        if (!this.sujetChoisi) {
            this.erreurs.push("Un sujet est requis");
        }
        if (!this.question) {
            this.erreurs.push("Une question est requise");
        }
        if (!this.erreurs.length) {
            return true;
        }
        e.preventDefault();
        },
        checkEmail: function (email) {
        var re = /[a-z]@[a-z].[a-z]/;
        return re.test(email);
        },
    },
  }
</script>

<style scoped>
    
    #pageContact{
    background-image: url("../assets/img/cyb.png");
    background-position: center;
    background-repeat: no-repeat;
    background-color: blue;
    background-size: cover;
    min-height: 100%;
    padding: 2%;
    }
    #formContact{
    width: 80%;
    margin: auto;
    }
    fieldset {
    font-size: 1.5rem;
    width: 90%;
    margin: auto;
    border: 1px dashed gray;
    border-radius: 15px;
    background-color: white;
    }
    legend {
    color: #008cba;
    }
    button {
    font-size: 1.5rem;
    float: right;
    background-color: #008cba;
    border: none;
    color: white;
    padding: 10px 20px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
    }
    button:hover {
    background-color: #c2f896;
    }
</style>