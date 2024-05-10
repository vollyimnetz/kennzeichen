<template>
  <v-app>
    <v-layout>
      <v-main>
        <!--
        <div id="nav">
          <router-link to="/">Home</router-link>
        </div>
        -->
        <router-view/>
      </v-main>
    </v-layout>
    <v-footer app theme="dark" class="px-0 AppFooter">
      <v-row justify="center" no-gutters>
        <app-version></app-version>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import appVersion from './components/appVersion.vue';
export default {
  components:{
    appVersion
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 500px;
  margin: 0 auto;
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
</style>
