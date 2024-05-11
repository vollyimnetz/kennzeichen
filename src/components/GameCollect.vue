<template>
  <div>
    <h1>Gesammelte Kennzeichen</h1>
    <p class="mb-10">Sammele alle Kennzeichen.</p>
    <div v-if="!startedAt">
      <v-btn @click="startGame" color="primary" >Spiel starten</v-btn>
    </div>
    <div v-else>
      <v-card variant="outlined" color="info" class="mb-3">
        <v-card-text>
          <h5>gestartet am {{dateHelper.format(startedAt)}}</h5>
          <h5>{{alreadyFound.length}} von {{kennzeichen.length}} <v-chip color="primary" v-if="percentage>0.1"><v-icon start>mdi-arrow-right-bold-circle</v-icon> {{percentage}} %</v-chip></h5>
        </v-card-text>
      </v-card>

      <v-alert color="info" v-if="alreadyFound.length===0">noch keine Kennzeichen gefunden</v-alert>
      <v-list v-else>
        <GameCollectItem class="my-5" v-for="item in alreadyFound" :key="item.id" :item="item"></GameCollectItem>
      </v-list>

      <v-btn @click="restart" class="mt-10" color="secondary" size="small"><v-icon start>mdi-refresh</v-icon>Spiel neu starten</v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { dateHelper } from './date.helper';
import GameCollectItem from './GameCollectItem.vue';
import kennzeichen from './kennzeichen.json';
export default {
  components: { GameCollectItem },
  data: () => ({
    dateHelper,
    kennzeichen
  }),
  computed: {
    ...mapGetters({
      alreadyFound: 'collectGame/alreadyFound',
      startedAt: 'collectGame/startedAt',
    }),
    percentage() {
      //caclulate percentage of found kennzeichen, with one decimal
      return Math.round( this.alreadyFound.length / this.kennzeichen.length * 1000 ) / 10;
    }
  },
  methods: {
    startGame() {
      this.$store.dispatch('collectGame/startGame');
    },
    restart() {
      if(window.confirm('Neues Spiel starten?')) {
        this.$store.dispatch('collectGame/startGame');
      }
    }
  }
}
</script>