<template>
  <v-app>
    <AppNavigation></AppNavigation>
    <v-layout>
      <v-main class="pt-10 mt-10">
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
        <AppVersion></AppVersion>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import AppNavigation from './AppNavigation.vue';
import AppVersion from './components/appVersion.vue';
export default {
  components:{
    AppVersion, AppNavigation
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
