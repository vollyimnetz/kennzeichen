<template>
  <div id="app">
    <v-app>
      <v-main>
        <!--
        <div id="nav">
          <router-link to="/">Home</router-link>
        </div>
        -->
        <router-view/>
        <v-footer padless fixed dark>
          <v-card class="flex" flat tile>
            <v-card-text class="py-2 white--text text-center">
              <app-version></app-version>
            </v-card-text>
          </v-card>
        </v-footer>
      </v-main>
    </v-app>
  </div>
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
.kennzeichenWrap { margin-top:5vh; 
  .v-input { max-width: 12em; margin:0 auto !important; 
    input { text-align: center;}
  }
}
</style>
