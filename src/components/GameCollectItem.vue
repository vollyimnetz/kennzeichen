<template>
  <v-list-item v-if="kennzeichen">
    <h2>{{kennzeichen.id}}</h2>
    <v-list-item-title><span v-html="kennzeichen.locationHtml"></span>, {{kennzeichen.state}}</v-list-item-title>
    <v-list-item-subtitle><i>{{dateOutput}}</i></v-list-item-subtitle>
    <v-btn class="mt-2" @click="removeItem" color="secondary" size="small"><v-icon start>mdi-close</v-icon> aus Liste entfernen</v-btn>
  </v-list-item>
</template>

<script>
import kennzeichen from './kennzeichen.json';
import { dateHelper } from './date.helper';
export default {
  props: {
    item: { type: Object, required: true }
  },
  data: () => ({
    dateHelper
  }),
  computed: {
    kennzeichen() {
        let result = kennzeichen.find(elem => elem.id === this.item.kennzeichen);
        if(!result) {
            console.warn('Kennzeichen not found:', this.item.kennzeichen);
        }
        return result;
    },
    dateOutput() {
        return this.dateHelper.format(this.item.foundAt, 'HH:mm \'Uhr, am\' dd.MM.yyyy');
    },
  },
  methods: {
    async removeItem() {
      if(await window.confirm('Eintrag wirklich entfernen?'))
        this.$store.dispatch('collectGame/remove', this.item.kennzeichen);
    }
  },
}
</script>