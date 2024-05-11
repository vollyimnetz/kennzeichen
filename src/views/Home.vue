<template>
  <div class="home">
    <kennzeichen-list></kennzeichen-list>

    <v-layout class="mt-10 d-flex flex-column justify-center align-center ga-3">
      <v-btn :href="$router.resolve({ name: 'number-game'}).href" @click.prevent="$router.push({name: 'number-game'})" color="secondary">Nummern Spiel</v-btn>
      <v-btn :href="$router.resolve({ name: 'collect-game'}).href" @click.prevent="$router.push({name: 'collect-game'})" color="secondary">Kennzeichen-Sammel-Spiel</v-btn>
    </v-layout>
  </div>
</template>

<script>
import KennzeichenList from '../components/KennzeichenList.vue'

export default {
  components: { KennzeichenList }
}
</script>
