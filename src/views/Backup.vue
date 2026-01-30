<template>
  <div class="backup">
    <h1>Backup</h1>

    <p>Hier können Sie ein Backup Ihrer Daten erstellen oder ein bestehendes Backup wiederherstellen.</p>
    <v-layout class="mt-10 d-flex flex-column justify-center align-center ga-3">
      <v-btn color="primary" @click="createBackup">Backup erstellen</v-btn>

      <v-alert type="success" v-if="backupCompleted">Backup erfolgreich wiederhergestellt!</v-alert>
      <v-alert type="error" v-if="error">{{error}}</v-alert>
      <v-btn v-if="!backupCompleted" color="secondary" @click="$refs.fileInput.$el.querySelector('input').click()">Backup wiederherstellen</v-btn>
      <v-file-input
        ref="fileInput"
        class="d-none"
        label="Backup wiederherstellen"
        accept=".json,application/json"
        @change="restoreBackup"
      ></v-file-input>
    </v-layout>

  </div>
</template>

<script>
import downloadjs from 'downloadjs';
import { format } from 'date-fns';
export default {
  components: {  },
  data: () => ({
    backupCompleted: false,
    error: null,
  }),
  methods: {
    async createBackup() {
      let backupdata = {
        collectGame: await this.$store.dispatch('collectGame/getBackup'),
        numberGame: await this.$store.dispatch('numberGame/getBackup'),
      };
      const jsonString = JSON.stringify(backupdata, null, 2);

      const blob = new Blob([jsonString], {
        type: "application/json;charset=utf-8"
      });

      downloadjs( blob, "kennzeichen_backup_"+ format(new Date(), "yyyy-MM-dd_HH-mm-ss") +".json", "application/json");
    },
    async restoreBackup(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const backupData = JSON.parse(e.target.result);
          console.log('imported backup data:', backupData);

          await this.$store.dispatch('collectGame/restoreBackup', backupData.collectGame);
          await this.$store.dispatch('numberGame/restoreBackup', backupData.numberGame);
          this.backupCompleted = true;

        } catch (error) {
          this.error = 'Fehler beim Wiederherstellen des Backups: ' + error.message;
        }
      };
      reader.readAsText(file);
    }
  }

}
</script>
