<template>
  <div>
    <h1>Gesammelte Kennzeichen</h1>
    <h5>gestartet am {{startedAt}}</h5>
    <v-list>
      <v-list-item-group>
        <v-list-item v-for="item in alreadyFound" :key="item.id">
          <v-list-item-content>
            <v-list-item-title>{{item.kennzeichen.id}}</v-list-item-title>
            <v-list-item-subtitle>{{item.kennzeichen.location}}</v-list-item-subtitle>
            <v-list-item-subtitle>{{item.kennzeichen.state}}</v-list-item-subtitle>
            <v-list-item-subtitle>{{item.kennzeichen.district}}</v-list-item-subtitle>
            <v-list-item-subtitle>{{item.date}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {

  computed: {
    ...mapGetters({
      alreadyFound: 'sammeln/alreadyFound',
      startedAt: 'sammeln/startedAt',
    })
  }
}
</script>