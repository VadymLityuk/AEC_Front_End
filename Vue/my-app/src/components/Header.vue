<template>
      <div class="icon-bar">
      <router-link to="/"> home
                        <span class="far__glitch"></span>
                        <span class="far__label">home__</span></router-link> |
      <router-link to="/contact"> <span class="far__content" > Contact</span>
                        <span class="far__glitch"></span>
                        <span class="far__label">Contact__</span></router-link> |
      <router-link to="/inscription">Inscription
         <span class="far__glitch"></span>
                        <span class="far__label">inscription_</span></router-link> |
      <router-link to="/login">L0g In
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
#nav {
  padding: 30px;
  text-align: center;
   font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>