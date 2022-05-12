<template>
  <v-card>
        <v-card-title class="text-h6 black lighten-2">
        Ideträdgårdarna 2021
        </v-card-title>

        <v-card-text>
        <iframe width="100%" height="415" src="https://www.youtube.com/embed/HQw6QY3nyVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="primary"
            text
            @click="$router.go(-1)"
        >
            Tillbaka till filmer!
        </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'idetradgardarna-2021-movie'
}
</script>

<style>

</style>