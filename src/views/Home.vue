<template>
  <v-container class="text-center">
    <h1>Välkommen till OneDotZero - 1.0</h1>
    <h3 class="mb-5">En del av Enköpings kommun, Utbildningsförvaltningen - Arbetsmarknadsenheten</h3>
    <video controls>
      <source :src="require('../assets/promo.mp4')" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <v-banner two-line>
      <v-avatar
        slot="icon"
        color="deep-purple accent-4"
        size="40"
      >
        <v-icon
          icon="mdi-lock"
          color="white"
        >
          mdi-email
        </v-icon>
      </v-avatar>

    Ni kan kontakta oss via mail på <a class="deep-purple--text" href="mailto:onedotzero@enkoping.se">onedotzero@enkoping.se</a>

    <template v-slot:actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Action
      </v-btn>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Action
      </v-btn>
    </template>
    </v-banner>
    <v-banner two-line>
      <v-avatar
        slot="icon"
        color="deep-purple accent-4"
        size="40"
      >
        <v-icon
          icon="mdi-lock"
          color="white"
        >
          mdi-cellphone
        </v-icon>
      </v-avatar>

    Ni kan kontakta oss på telefon på <a class="deep-purple--text" href="tel:+46171627070">0171-62 70 70</a>

    <template v-slot:actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Action
      </v-btn>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Action
      </v-btn>
    </template>
    </v-banner>
    <v-banner two-line>
      <v-avatar
        slot="icon"
        color="deep-purple accent-4"
        size="40"
      >
        <v-icon
          icon="mdi-lock"
          color="white"
        >
          mdi-account
        </v-icon>
      </v-avatar>

    Arbetsledare Peter Torvfelt <a class="deep-purple--text" href="tel:+46171625088">0171-62 50 88</a> | <a class="deep-purple--text" href="mailto:peter.torvfelt@enkoping.se">peter.torvfelt@enkoping.se</a>

    <template v-slot:actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Action
      </v-btn>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Action
      </v-btn>
    </template>
    </v-banner>
    <v-banner two-line>
      <v-avatar
        slot="icon"
        color="deep-purple accent-4"
        size="40"
      >
        <v-icon
          icon="mdi-lock"
          color="white"
        >
          mdi-account
        </v-icon>
      </v-avatar>

    Arbetsledare Peter Dahlin <a class="deep-purple--text" href="tel:+46171626325">0171-62 63 25</a> | <a class="deep-purple--text" href="mailto:peter.dahlin@enkoping.se">peter.dahlin@enkoping.se</a>

    <template v-slot:actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Action
      </v-btn>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Action
      </v-btn>
    </template>
    </v-banner>
    <!--
    <v-row class="mt-3">
      <v-col v-for="education in educations" :key="education.id" cols="12" sm="4" lg="3">
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              :src="education.src"
              height="200px"
            ></v-img>

            <v-card-title>
              {{ education.name }}
            </v-card-title>

            <v-card-subtitle>
              {{ education.title }}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                :to="education.link"
                color="orange lighten-2"
                text
                target="_blank"
              >
                Starta!
              </v-btn>

              <v-spacer></v-spacer>
                Läs mer!
              <v-btn
                icon
                @click="education.action= !education.action"
              >
                <v-icon>{{ education.action ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="education.action">
                <v-divider></v-divider>

                <v-card-text>
                  {{ education.description }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
      </v-col>
    </v-row>
    -->
  </v-container>
</template>

<script>
export default {
  name: 'home',
  components: {},
  data() {
        return {
            // educations: [
            //     { id: 1, src: require('../assets/ips.webp'), title: 'Ett urval av våra uppdrag', name: 'Portfolio', description: 'Ett urval av våra uppdrag', action: this.portfolio, link:'/portfolio', phone1: '+46736260079', phone2: '073-626 00 79', email: 'lisa@ekehult'},
            //     { id: 2, src: require('../assets/lyft1.webp'), icon: 'mdi-filmstrip', title: 'Filmer', description: 'Här kan du se ett urval av filmer vi filmat i och omkring Enköping.', name: 'Film', action: this.movies, link:'/movies', phone1: '+46708964947',phone2: '070-896 49 47', email: 'per@panhard.se'},
            //     { id: 3, src: require('../assets/lyft2.webp'), icon: 'mdi-file-excel', title: 'Olika former av Excelark med enkla eller avancerade formler.', name: 'Excel', description: 'Olika former av Excelark med enkla eller avancerade formler.', action: this.excel, link:'http://utbildning.onedotzero.se/lyft2', phone1: '+46702838373', phone2: '070-283 83 73', email: 'ninni.tam@gmail.com'},
            // ],
            //portfolio: false,
            //movies: false,
            //excel: false,
        }
    },
    methods: {
      
    },
    watch: {
      show(){
        console.log('first')
      }
    }
}
</script>

<style scoped>
video {
  outline: none;
  max-width: 100%;
  height: auto;
}
</style>