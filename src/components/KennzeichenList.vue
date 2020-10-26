<template>
  <div class="kennzeichenWrap container">

    <h1>Deutsche Kennzeichen</h1>
    <v-text-field outlined v-model="search" placeholder="Kennzeichen" clearable></v-text-field>
    <div v-if="searchResult.length>0">
      <ul class="list-unstyled">
        <li v-for="item in searchResult" :key="item.id">
          <h1>{{item.id}}</h1>
          <div>{{item.location}}</div>
          <div>{{item.state}}</div>
          <div>{{item.district}}</div>
        </li>
      </ul>
    </div>
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
    searchResult() {
      let that = this;
      if(this.search.length===0) return [];
      return this.data.filter(elem => {
        return elem.id.toLowerCase().indexOf( that.search.toLowerCase() ) > -1;
      })
    }
  }
}
</script>
