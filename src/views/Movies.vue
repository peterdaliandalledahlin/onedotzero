<template>
  <v-container>
    <h1>Filmer!</h1>
    
      <v-row class="mt-3">
      <v-col v-for="movie in movies" :key="movie.id" cols="12" sm="4" lg="3">
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              :src="movie.src"
              height="200px"
              class="relative filter"
            ></v-img>

            <v-icon
              size="50"
              color="cyan darken-3"
              class="absolute"
            >
              mdi-filmstrip
            </v-icon>

            <v-card-title>
              {{ movie.name }}
            </v-card-title>

            <v-card-subtitle>
              {{ movie.title }}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                :to="movie.link"
                color="orange lighten-2"
                text
              >
                Starta!
              </v-btn>
<!--
              <v-spacer></v-spacer>
                Läs mer!
              <v-btn
                icon
                @click="movie.action = !movie.action"
                class="ml-2"
              >
                <v-icon>{{ movie.action ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
-->
            </v-card-actions>
<!--
            <v-expand-transition>
              <div v-show="movie.action">
                <v-divider></v-divider>

                <v-card-text>
                  {{ movie.description }}
                </v-card-text>
              </div>
            </v-expand-transition>
-->
          </v-card>
      </v-col>
      </v-row>
<!--
      <v-layout row wrap>
        <v-flex>
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              :src="require('../assets/card_img.webp')"
              height="200px"
              class="relative filter"
            ></v-img>

            <v-icon
              size="50"
              color="green darken-2"
              class="absolute"
            >
              mdi-filmstrip
            </v-icon>

            <v-card-title>
              Idéträdgårdarna, Enköping 2021
            </v-card-title>

            <v-card-subtitle>
              Idéträdgårdarna, Enköping 2021
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                @click="modalIdeTradgardarna2021 = true"
                color="orange lighten-2"
                text
                
              >
                Starta!
              </v-btn>

              <v-spacer></v-spacer>
                Läs mer!
              <v-btn
                icon
                @click="readMoreIdeTradgardarna2021 = !readMoreIdeTradgardarna2021"
                class="ml-2"
              >
                <v-icon>{{ readMoreIdeTradgardarna2021 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="readMoreIdeTradgardarna2021">
                <v-divider></v-divider>

                <v-card-text>
                  Beskrivning om filmen "Idéträdgårdarna 2021
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              :src="require('../assets/sunshine.jpg')"
              height="200px"
            ></v-img>

            <v-card-title>
              Idéträdgårdarna, Enköping 2020
            </v-card-title>

            <v-card-subtitle>
              Idéträdgårdarna, Enköping 2020
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                @click="modalIdeTradgardarna2020 = true"
                color="orange lighten-2"
                text
                
              >
                Starta!
              </v-btn>

              <v-spacer></v-spacer>
                Läs mer!
              <v-btn
                icon
                @click="readMoreIdeTradgardarna2020 = !readMoreIdeTradgardarna2020"
                class="ml-2"
              >
                <v-icon>{{ readMoreIdeTradgardarna2020 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="readMoreIdeTradgardarna2020">

                <v-divider></v-divider>

                <v-card-text>
                  Beskrivning om filmen "Idéträdgårdarna 2020
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              :src="require('../assets/sunshine.jpg')"
              height="200px"
            ></v-img>

            <v-card-title>
              Drömparken, Enköping
            </v-card-title>

            <v-card-subtitle>
              Drömparken, Enköping
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                @click="modalDreampark = true"
                color="orange lighten-2"
                text
                
              >
                Starta!
              </v-btn>

              <v-spacer></v-spacer>
                Läs mer!
              <v-btn
                icon
                @click="readMoreDreampark = !readMoreDreampark"
                class="ml-2"
              >
                <v-icon>{{ readMoreIdeTradgardarna2020 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="readMoreDreampark">

                <v-divider></v-divider>

                <v-card-text>
                  En film om vår fina Drömpark.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-flex>
      </v-layout>
-->
<!-- 
    <v-dialog
      v-model="modalIdeTradgardarna2021"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Privacy Policy
        </v-card-title>

        <v-card-text>
          <iframe v-if="modalIdeTradgardarna2021" width="450" height="315" src="https://www.youtube.com/embed/HQw6QY3nyVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="modalIdeTradgardarna2021 = false"
          >
            Stäng
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
        v-model="modalIdeTradgardarna2020"
        width="500"
      >

        <v-card>
          <v-card-title class="text-h6 black lighten-2">
            Idéträdgårdarna, Enköping 2021
          </v-card-title>

          <v-card-text>
            <iframe v-if="modalIdeTradgardarna2020" width="450" height="315" src="https://www.youtube.com/embed/CoWjw7LAidQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="modalIdeTradgardarna2020 = false"
            >
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog
        v-model="modalDreampark"
        width="500"
      >

        <v-card>
          <v-card-title class="text-h6 black lighten-2">
            Drömparken
          </v-card-title>

          <v-card-text>
            <iframe v-if="modalDreampark" width="450" height="315" src="https://www.youtube.com/embed/z54NkPVnc8g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="modalDreampark = false"
            >
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog
        v-model="modalServicepoolen"
        width="500"
      >

        <v-card>
          <v-card-title class="text-h6 black lighten-2">
            Drömparken
          </v-card-title>

          <v-card-text>
            <iframe v-if="modalServicepoolen" width="450" height="315" src="https://www.youtube.com/watch?v=e2bb9Q4Ao5A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="modalServicepoolen = false"
            >
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>
-->
  </v-container>
</template>

<script>
//import LazyYoutube from 'vue-lazytube'
//import ModalIdeTradgardarna2021 from '../components/ModalIdeTradgardarna2021.vue'
//import ModalIdeTradgardarna2020 from '../components/ModalIdeTradgardarna2020.vue'

export default {
  name: 'movies',
  components: {  },
  data() {
        return {
            movies: [
                { id: 1, src: require('../assets/card_img.webp'), icon: 'mdi-filmstrip', title: 'Idéträdgårdarna, Enköping 2021', name: 'Idéträdgårdarna 2021', description: 'Beskrivning om filmen "Idéträdgårdarna 2021"', openModal: this.modalIdeTradgardarna2021, action: this.readMoreIdeTradgardarna2021, link:'/idetradgardarna-2021-movie', phone1: '', phone2: '', email: ''},
                { id: 2, src: require('../assets/card_img.webp'), icon: 'mdi-filmstrip', title: 'Idéträdgårdarna, Enköping 2020', name: 'Idéträdgårdarna 2020', description: 'Beskrivning om filmen "Idéträdgårdarna 2020"', openModal: this.modalIdeTradgardarna2020, action: this.readMoreIdeTradgardarna2020, link:'/idetradgardarna-2020-movie', phone1: '',phone2: '', email: ''},
                { id: 3, src: require('../assets/card_img.webp'), icon: 'mdi-filmstrip', title: 'Drömparken', name: 'Drömparken', description: 'Lite mer att läsa om Drömparken.', openmodal: this.modalDreampark, action: this.readMoreDreampark, link:'/dreampark-movie', phone1: '', phone2: '', email: ''},
                { id: 4, src: require('../assets/card_img.webp'), icon: 'mdi-filmstrip', title: 'Så här kör du bil till Servicepoolen', name: 'Servicepoolen', description: 'Lite mer att läsa om Servicepoolen', openmodal: this.modalServicepoolen, action: this.readMoreServicepoolen, link:'/servicepoolen-movie', phone1: '', phone2: '', email: ''},
                { id: 5, src: require('../assets/card_img.webp'), icon: 'mdi-filmstrip', title: 'Video filmad längs Enköpings cykelvänliga vägar', name: 'Enköping från sadeln', description: 'Lite mer att läsa om Servicepoolen', openmodal: this.modalBikeRide, action: this.readMoreBikeRide, link:'/bike-ride', phone1: '', phone2: '', email: ''},
            ],
            //modalIdeTradgardarna2021: false,
            //readMoreIdeTradgardarna2021: false,
            //modalIdeTradgardarna2020: false,
            //readMoreIdeTradgardarna2020: false,
            //modalDreampark: false,
            //readMoreDreampark: false,
            //openModal: false,
            //modalServicepoolen: false
        }
    },
    methods: {

    },
    watch: {
      
    }
}
</script>

<style scoped>
.v-card__title {
  font-size: 1.2rem !important;
}
.filter {
  filter: hue-rotate(90deg);
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
  bottom: 45%;
  left: 75%;
}
</style>