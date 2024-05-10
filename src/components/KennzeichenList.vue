<template>
  <div class="kennzeichenWrap container">

    <h1>Deutsche Kennzeichen</h1>
    <v-text-field v-model="search" placeholder="Kennzeichen eingeben" clearable @input="makeUppercase"></v-text-field>

    <v-slide-y-transition class="list-unstyled" group tag="ul">
      <li v-for="item in searchResult" :key="item.id">
        <h1>{{item.id}}</h1>
        <div>{{item.location}}</div>
        <div>{{item.state}}</div>
        <div>{{item.district}}</div>
        <v-btn @click="collect(item)">sammeln</v-btn>
      </li>
    </v-slide-y-transition>

  </div>
</template>

<script>
import baseData from './kennzeichen.json';
export default {
  name: 'KennzeichenList',
  data: () => ({
    search:'',
    data: baseData
  }),
  computed:{
    orderedData() {
      return this.data.sort((a,b) => a.id.length - b.id.length );
    },
    searchResult() {
      if(this.search===null || this.search.length===0) return [];
      return this.orderedData.filter(elem => {
        return elem.id.toUpperCase().indexOf( this.search.toUpperCase() ) > -1;
      })
    }
  },
  methods: {
    makeUppercase() {
      if(this.search===null) return;
      this.search = this.search.toUpperCase();
    },
    collect(item) {
      this.$store.commit('collectGame/add', item);
    }
  }
}
</script>


<style lang="scss">
.kennzeichenWrap { margin-top:5vh;
  .v-input { max-width: 16em; margin:0 auto !important;
    input { text-align: center;}
  }
}
</style>