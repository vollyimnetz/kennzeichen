<template>
    <v-container>
        <h3 class="my-9 pt-9">404 - Seite nicht gefunden</h3>

        <div class="links">
            <router-link :to="'/'">
                zurück zur Startseite
            </router-link>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>
