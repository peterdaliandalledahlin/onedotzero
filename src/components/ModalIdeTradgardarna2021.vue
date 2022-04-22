<template>
  <v-container>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500"
      >

        <v-card>
          <v-card-title class="text-h6 black lighten-2">
            Idéträdgårdarna, Enköping 2021
          </v-card-title>

          <v-card-text>
            <LazyYoutube src="https://www.youtube.com/watch?v=HQw6QY3nyVI&t=2s" />
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>


<script>
import LazyYoutube from 'vue-lazytube'
  export default {
      name: 'modal-ide-tradgardarna-2021',
      components: {
        LazyYoutube,
      },
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>

<style>

</style>