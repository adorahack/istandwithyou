<template>
  <div class="header">
      <b-navbar toggleable="md" type="dark">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <router-link class="navbar-brand" to="/">
            <img src="../assets/logo.png" class="logo" />
        </router-link>
        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav class="ml-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/opinions">People's Opinions</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/results">Results</router-link>
                </li>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    <br />
    <h1 class="title text-center"> {{title}} </h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
}
</script>

<style scoped>
@media only screen and (max-width: 768px) {
  .navbar-dark .navbar-nav .nav-item{
    padding: 15px 0px;
  }
}
.navbar{
    background: black;
}
.navbar-dark .navbar-nav .nav-link{
    color: white;
    padding: 0px 15px;
}
.navbar-dark .navbar-nav .nav-link:hover{
    color: white;
    border-bottom: 2px solid white;
}
.logo{
    height: 39px;
    width: auto;
}
h1.title{
    font-family: 'Pacifico', cursive;
}
.navbar-dark .navbar-toggler{
    border: none;
    outline: none;
}
.header{
    margin-bottom: 60px;
}
</style>

