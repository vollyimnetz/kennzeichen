<template>
    <v-btn small @click="doAppReload">
        <span v-html="versionDate"></span> <v-icon small class="mx-2">mdi-autorenew</v-icon>
    </v-btn>
</template>

<script>
export default {
    components:{
    },
    data: () => ({
    }),
    computed: {
        versionDate() {
            let value = APP_VERSION_DATE
            if(value!=='DYNAMIC') {
                value = new Date(value);
                value = '<span class="date">'+ ('0'+value.getDate()).slice(-2)+'.'+('0'+(value.getMonth()+1)).slice(-2)+'.'+value.getFullYear()+'</span> <span class="time">'+('0'+value.getHours()).slice(-2)+':'+('0'+value.getMinutes()).slice(-2)+'</span>';
            }
            return value;
        }
    },
    methods: {
        doAppReload() {
            location.reload();
        }
    }
}
</script>