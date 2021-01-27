<template>
<div class="container linear-gradient mt-5 text-center" id="logged">
        <h1 class="mb-5">Vos informations</h1>
        <h1>Bonjour, {{prenom}} {{nom}} !!!</h1><br>
        <h2>De {{ville}}</h2><br>
        <h2>Courriel: {{courriel}}</h2><br>
        <h2>Sexe: {{sexe}}</h2><br>    
</div>
</template>

<script>
 
export default {
    name: 'logged',
    data: function () {
        return {
        nom: "Vadim",
        prenom: "Lityuk",
        courriel: "vlityuk@gmail.com",
        sexe: "homme",
        ville: "Quebec",
        };
    },
    props: ["test"],
}
</script>

<style scopped>
    .linear-gradient {
        background: linear-gradient(white,#E56525, #75CCD2,#273370);
    }
</style>