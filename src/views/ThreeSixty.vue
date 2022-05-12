<template>
  <v-container>
    <h1>360 bilder - tagna i olika miljöer i Enköping</h1>
    <v-row class="mt-3">
      <v-col v-for="image in images" :key="image.id" cols="12" sm="4" lg="3">
          <v-card
            class="mx-auto"
            max-width="344"
            :to="image.link"
            :href="image.url"
            target="_blank"
          >
            <v-img
              :src="image.src"
              height="200px"
              class="relative filter"
            ></v-img>

            <v-icon
              size="50"
              color="deep-purple accent-2"
              class="absolute"
            >
              mdi-rotate-360
            </v-icon>

            <v-card-title>
              {{ image.name }}
            </v-card-title>

            <v-card-subtitle>
              {{ image.title }}
            </v-card-subtitle>
<!--
            <v-card-actions>
              <v-btn
                :to="image.link"
                color="orange lighten-2"
                text
              >
                Se bild!
              </v-btn>

              <v-spacer></v-spacer>
                Läs mer!
              <v-btn
                icon
                @click="image.action= !image.action"
                class="ml-1"
              >
                <v-icon>{{ image.action ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
-->
            <v-expand-transition>
              <div v-show="image.action">
                <v-divider></v-divider>

                <v-card-text>
                  {{ image.description }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'threesixty',
  components: {},
  data() {
        return {
            images: [
                { id: 1, src: require('../assets/card_img.webp'), icon: 'mdi-file-document-edit', title: '360 grader från kyrktornet', name: 'Kyrkan', description: 'Använd musen eller piltangenterna på datorn för att se dig om i bilden.', action: this.church, link:'/church', phone1: '', phone2: '', email: ''},
                { id: 2, src: require('../assets/card_img.webp'), icon: 'mdi-file-document-edit', title: '360 grader på vår berömda drömpark', name: 'Drömparken', description: 'Använd musen eller piltangenterna på datorn för att se dig om i bilden.', action: this.dreampark, link:'/dreampark', phone1: '',phone2: '', email: ''},
                { id: 3, src: require('../assets/card_img.webp'), icon: 'mdi-file-document-edit', title: 'Dr. Westerlunds mottagning', name: 'Dr. Westerlund', description: 'Använd musen eller piltangenterna på datorn för att se dig om i bilden.', action: this.westerlund, link:'/westerlundska', phone1: '', phone2: '', email: ''},
                { id: 4, src: require('../assets/card_img.webp'), icon: 'mdi-file-document-edit', title: 'Servicepoolens hus på Myran', name: 'Servicepoolen', description: 'Använd musen eller piltangenterna på datorn för att se dig om i bilden.', action: this.servicepoolen, link:'/servicepoolen', phone1: '', phone2: '', email: ''},
                { id: 5, src: require('../assets/card_img.webp'), icon: 'mdi-file-document-edit', title: 'Exempel på virtuell tur invändigt på OneDotZero', name: 'Virtuell tur på 1.0', description: 'Använd musen eller piltangenterna på datorn för att se dig om i bilden.', action: this.onedotzero, url: 'https://onedotzero.se/3d/index.htm', link:'', phone1: '', phone2: '', email: ''},
            ],
            church: false,
            dreampark: false,
            westerlund: false,
            servicepoolen: false,
            summerjob: false,
            excel: false,
        }
    },
    methods: {
      
    },
    watch: {

    }
}
</script>

<style scoped>
.mx-auto {
  cursor: pointer;
}
.filter {
  filter: hue-rotate(180deg);
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
  bottom: 35%;
  left: 75%;
}
</style>