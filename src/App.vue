<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
*{
  font-family: 'Raleway', sans-serif;
}
.bolder{
  font-weight: 600;
}
.body{
   min-height: calc(100vh - 250px);
   margin-bottom: 40px;
}
@media only screen and (max-width: 600px) {
  h1.title{
    font-size: 26px;
  }
}
</style>


