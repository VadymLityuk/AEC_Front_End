<template>
      <div class="icon-bar">
      <router-link to="/" class="active"> home
                        <span class="far__glitch "></span>
                        <span class="far__label">home__</span></router-link> |
      <router-link to="/contact" class="active"> <span class="far__content" > Contact</span>
                        <span class="far__glitch"></span>
                        <span class="far__label">Contact__</span></router-link> |
      <router-link to="/inscription" class="active">Inscription
         <span class="far__glitch"></span>
                        <span class="far__label">inscription_</span></router-link> |
      <router-link to="/login" class="active">L0g In
                        <span class="far__glitch"></span>
                        <span class="far__label">L0g_ In__</span></router-link>
      </div>
  
</template>
<script>
    export default {
    name: "Header",
    };
</script>
<style scoped>

</style>