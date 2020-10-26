<template>
  <div id="app"><!--
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 500px;
  margin: 5% auto;
}

.list-unstyled {
  list-style: none;
  margin: 0;
  padding: 0;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.kennzeichenWrap {
  .v-input { max-width: 8em; margin:0 auto !important; font-size:1.5em; }
}
</style>
