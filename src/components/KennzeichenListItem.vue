<template>
  <li class="my-5">
    <h1>{{item.id}}</h1>
    <div><span v-html="item.locationHtml"></span>, {{item.state}}</div>
    <div>{{item.district}}</div>
    <v-btn @click="collect(item)" color="primary" v-if="!isCollected">sammeln</v-btn>
    <v-chip v-else color="success"><v-icon start>mdi-check</v-icon> gesammelt</v-chip>
  </li>
</template>

<script>
export default {
  props: {
    item: { type: Object, required: true }
  },
  emits: ['collect'],
  data: () => ({
  }),
  computed:{
    isCollected() {
      return this.$store.getters['collectGame/isCollected'](this.item.id);
    }
  },
  methods: {
    async collect(item) {
      await this.$store.dispatch('collectGame/add', item.id);
      this.$emit('collect');
    },
  }
}
</script>