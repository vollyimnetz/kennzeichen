<template>
  <div class="home">
    <kennzeichen-list></kennzeichen-list>

    <a :href="$router.resolve({ name: 'number-game'}).href" @click.prevent="$router.push({name: 'number-game'})">Nummern Spiel</a>
  </div>
</template>

<script>
import KennzeichenList from '../components/KennzeichenList.vue'

export default {
  components: { KennzeichenList }
}
</script>
