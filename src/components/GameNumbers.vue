<template>
  <div>
    <h1>Nummern-Spiel</h1>
    <p>Suche aufsteigend die Nummern auf Nummernschildern.</p>
    <div v-if="!startedAt">
      <v-btn color="primary" @click="newGame">neues Spiel starten</v-btn>
    </div>
    <div v-else>
      <h5>gestartet am {{dateHelper.format(startedAt)}}</h5>
      <v-layout class="flex-column justify-center align-center ga-3">

        <v-chip class="mt-10" label color="primary" size="x-large" variant="outlined"><strong>{{currentNumber}}</strong></v-chip>

        <v-btn @click="nextNumber" color="primary">gefunden</v-btn>
        <div class="mb-10" v-if="currentNumber>1"><small>letzte Nummer gefunden am {{dateHelper.format(lastChange, 'dd.MM.yyyy \'um\' HH:mm \'Uhr\'')}}</small></div>


        <div class="mt-10">
          <v-btn color="default" size="small" @click="lastNumber">Nummer -1</v-btn>
          <v-btn color="default" size="small" @click="setNumber">Nummer direkt eingeben</v-btn>
          <v-btn color="default" size="small" @click="restart">neues Spiel starten</v-btn>
        </div>
      </v-layout>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { dateHelper } from './date.helper';
export default {
  data: () => ({
    dateHelper
  }),
  computed: {
    ...mapGetters({
      lastChange: 'numberGame/lastChange',
      startedAt: 'numberGame/startedAt',
      currentNumber: 'numberGame/currentNumber',
    })
  },
  methods: {
    nextNumber() {
      this.$store.dispatch('numberGame/increase');
    },
    lastNumber() {
      this.$store.dispatch('numberGame/decrease');
    },
    newGame() {
      this.$store.dispatch('numberGame/startGame');
    },
    async restart() {
      if(await window.confirm('Neues Spiel starten?')) {
        this.$store.dispatch('numberGame/startGame');
      }
    },
    async setNumber() {
      const number = parseInt(window.prompt('Nummer eingeben'));
      if(number) {
        this.$store.dispatch('numberGame/setNumber', number);
      }
    }
  }

}
</script>