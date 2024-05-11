<template>
    <v-list-item>
        <v-list-item-title>{{kennzeichen.id}}</v-list-item-title>
        <v-list-item-subtitle>{{kennzeichen.location}}, {{kennzeichen.state}}, {{kennzeichen.district}}</v-list-item-subtitle>
        <v-list-item-subtitle><i>{{dateOutput}}</i></v-list-item-subtitle>
        <v-btn class="mt-5" @click="removeItem" color="secondary" size="small"><v-icon start>mdi-close</v-icon> aus Liste entfernen</v-btn>
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
        return kennzeichen.find(elem => elem.id === this.item.kennzeichen);
    },
    dateOutput() {
        return this.dateHelper.format(this.item.foundAt, 'HH:mm \'Uhr, am\' dd.MM.yyyy');
    },
  },
  methods: {
    removeItem() {
      this.$store.dispatch('collectGame/remove', this.item.kennzeichen);
    }
  },
}
</script>