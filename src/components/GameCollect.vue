<template>
  <div>
    <h1>Gesammelte Kennzeichen</h1>
    <p class="mb-10">Sammele alle Kennzeichen.</p>
    <div v-if="!startedAt">
      <v-btn @click="startGame" color="primary" >Spiel starten</v-btn>
    </div>
    <div v-else>
      <h5>gestartet am {{dateHelper.format(startedAt)}}</h5>

      <v-alert color="info" v-if="alreadyFound.length===0">noch keine Kennzeichen gefunden</v-alert>
      <v-list v-else>
        <GameCollectItem v-for="item in alreadyFound" :key="item.id" :item="item"></GameCollectItem>
      </v-list>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { dateHelper } from './date.helper';
import GameCollectItem from './GameCollectItem.vue';
export default {
  components: { GameCollectItem },
  data: () => ({
    dateHelper
  }),
  computed: {
    ...mapGetters({
      alreadyFound: 'collectGame/alreadyFound',
      startedAt: 'collectGame/startedAt',
    })
  },
  methods: {
    startGame() {
      this.$store.dispatch('collectGame/startGame');
    }
  }
}
</script>