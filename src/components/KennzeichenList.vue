<template>
  <div class="kennzeichenWrap container">

    <h1>Deutsche Kennzeichen</h1>
    <v-text-field v-model="search" placeholder="Kennzeichen eingeben" clearable @input="makeUppercase"></v-text-field>

    <v-slide-y-transition class="list-unstyled" group tag="ul">
      <KennzeichenListItem v-for="item in searchResult" :key="item.id" :item="item" @collect="search=''"></KennzeichenListItem>
    </v-slide-y-transition>
  </div>
</template>

<script>
import KennzeichenListItem from './KennzeichenListItem.vue';
import kennzeichen from './kennzeichen.json';
export default {
  components: { KennzeichenListItem },
  data: () => ({
    search:'',
    kennzeichen: kennzeichen.sort((a,b) => a.id.length - b.id.length )
  }),
  computed:{
    searchResult() {
      if(this.search===null || this.search.length===0) return [];
      return this.kennzeichen.filter(elem => {
        return elem.id.toUpperCase().indexOf( this.search.toUpperCase() ) > -1;
      })
    }
  },
  methods: {
    makeUppercase() {
      if(this.search===null) return;
      this.search = this.search.toUpperCase();
    }
  }
}
</script>


<style lang="scss">
.kennzeichenWrap {
  .v-input { max-width: 16em; margin:0 auto !important;
    input { text-align: center;}
  }
}
</style>