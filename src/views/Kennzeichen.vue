<template>
  <div class="home">
    <kennzeichen-list></kennzeichen-list>
  </div>
</template>

<script>
// @ is an alias to /src
import KennzeichenList from '@/components/KennzeichenList.vue'

export default {
  name: 'Home',
  components: {
    KennzeichenList
  }
}
</script>
