<template>
  <li class="my-5">
    <h1>{{item.id}}</h1>
    <div>{{item.location}}</div>
    <div>{{item.state}}</div>
    <div>{{item.district}}</div>
    <v-btn @click="collect(item)" color="primary" v-if="!isCollected">sammeln</v-btn>
    <v-chip v-else color="success"><v-icon start>mdi-check</v-icon> gesammelt</v-chip>
  </li>
</template>

<script>
import kennzeichen from './kennzeichen.json';
export default {
  props: {
    item: { type: Object, required: true }
  },
  data: () => ({
  }),
  computed:{
    isCollected() {
      return this.$store.getters['collectGame/isCollected'](this.item.id);
    }
  },
  methods: {
    collect(item) {
      this.$store.dispatch('collectGame/add', item.id);
    },
  }
}
</script>