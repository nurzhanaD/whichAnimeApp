<template>
  <div class="app">
    <nav>
      <router-link class="nav-link" to="/search">Search</router-link>
      <router-link class="nav-link" to="/random">Random</router-link>
      <router-link class="nav-link" to="/about">About us</router-link>
    </nav>
  </div>
  <router-view/>
</template>

<script>
</script>

<style>
@font-face {
  font-family: 'Bangers';
  src: url('./assets/Bangers/Bangers-Regular.ttf');
}
@font-face {
  font-family: 'Inconsolata';
  src: url('./assets/Inconsolata/static/Inconsolata/Inconsolata-Regular.ttf');
}
@font-face {
  font-family: 'Jura';
  src: url('./assets/Jura/static/Jura-Regular.ttf');
}
@font-face {
  font-family: 'Tapestry';
  src: url('./assets/Tapestry/Tapestry-Regular.ttf');
}
@font-face {
  font-family: 'Comfortaa';
  src: url('./assets/Comfortaa/static/Comfortaa-Regular.ttf');
}
* {
  margin:0;
  padding:0;
  font-family:Comfortaa;
  color:white;
}
nav {
  width:100vw;
  height:10vh;
  font-size:48px;
  display:flex;
  justify-content: space-around;
  align-items: center;
  background:black;
}
.nav-link {
  text-decoration: none;
}
.nav-link:active{
  text-decoration: none;
  color:blue;
}
</style>