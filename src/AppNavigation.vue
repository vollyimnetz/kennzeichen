<template>
  <v-app-bar v-if="!isHome" density="compact">

    <v-toolbar class="mainToolbar" density="compact" color="white">
      <v-spacer></v-spacer>
      <v-toolbar-items>
          <v-btn :href="$router.resolve({ name:'home' }).href" color="primary" variant="text">
            zurück
          </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components:{  },
  data: () => ({
  }),
  computed: {
    isHome() {
      return this.$route.name === 'home';
    }
  },
  methods: {

  }
}
</script>