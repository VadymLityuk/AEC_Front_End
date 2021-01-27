<template>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/inscription">Inscription</router-link> |
      <router-link to="/login">Connexion</router-link>
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