<template>
  <v-container>
    <h1>Portfolio - ett urval av arbeten OneDotZero gjort.</h1>
    <v-row class="mt-3">
      <v-col v-for="education in educations" :key="education.id" cols="12" sm="4" lg="3">
          <v-card
            class="mx-auto"
            max-width="344"
            :href="education.link"
            target="_blank"
            :to="education.url"
          >
            <v-img
              :src="education.src"
              height="200px"
              class="relative filter"
            ></v-img>

            <v-icon
              size="50"
              color="green darken-2"
              class="absolute"
            >
              mdi-folder
            </v-icon>

            <v-card-title>
              {{ education.name }}
            </v-card-title>

            <v-card-subtitle>
              {{ education.title }}
            </v-card-subtitle>
<!--
            <v-card-actions>
              <v-btn
                :href="education.link"
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
                class="ml-1"
              >
                <v-icon>{{ education.action ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
-->
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
  </v-container>
</template>

<script>

export default {
  name: 'portfolio',
  components: {},
  data() {
        return {
            educations: [
                { id: 1, src: require('../assets/card_img.webp'), title: 'Ett interaktivt seminarium', name: 'IPS', description: 'Ett interaktivt seminarium om IPS-projektet i Enköping. I samverkan med Region Uppsala och Enköpings kommun.', action: this.ips, link:'http://utbildning.onedotzero.se/ips', phone1: '', phone2: '', email: ''},
                { id: 2, src: require('../assets/card_img.webp'), icon: 'mdi-file-document-edit', title: 'Förflyttning med personlyft', description: 'Kursen riktar sig till dig som arbetar i Enköpings kommun och i ditt arbete behöver hjälpa brukare med personförflyttning. Kursens syfte är att förbereda dig för den praktiska utbildningen, där du kommer få prova på att både lyfta andra och själv bli lyft. I slutet av denna kurs kommer ett kunskapstest som du måste bli godkänd på innan du är redo för den praktiska utbildningen. När du har blivit godkänd på testet ska du anmäla det till din arbetsledare.', name: 'Personlyft', action: this.lyft1, link:'http://utbildning.onedotzero.se/lyft1', phone1: '+46708964947',phone2: '070-896 49 47', email: 'per@panhard.se'},
                { id: 3, src: require('../assets/card_img.webp'), icon: 'mdi-fire-extinguisher', title: 'Du måste vara inloggad på AD kontot', name: 'Interaktiv brandutbildning', description: 'Kursen riktar sig till dom som arbetar i Enköpings kommunen.', action: this.lyft2, link:'https://guider.enkoping.se/', phone1: '', phone2: '', email: ''},
                { id: 4, src: require('../assets/card_img.webp'), icon: 'mdi-file', title: 'Blanketthjälp', name: 'Söka sommarjobb.', description: 'Filmerna riktar sig till de som fått feriearbete i Enköpings kommun. Hur du fyller i ansökan innan du börjar arbeta. Och efter avslutat arbete fyller i en utvärderingslapp.', action: this.summerjob, link:'http://utbildning.onedotzero.se/sommarjobb', phone1: '', phone2: '', email: ''},
                { id: 5, src: require('../assets/card_img.webp'), icon: 'mdi-file-excel', title: 'Formler & tabeller', name: 'Excel', description: 'Olika typer av Excelarbeten från enklare till avancerade formler & datavisualisering.', action: this.excel, link:'', phone1: '', phone2: '', email: ''},
                { id: 6, src: require('../assets/card_img.webp'), icon: 'mdi-fire-extinguisher', title: 'Kort innehållsfilm från Grundläggande brandutbildning', name: 'Brandutbildning', description: 'Olika typer av Excelarbeten från enklare till avancerade formler & datavisualisering.', action: this.brand, link:'', url: '/brand', phone1: '', phone2: '', email: ''},
            ],
            ips: false,
            lyft1: false,
            lyft2: false,
            summerjob: false,
            excel: false,
            brand: false,
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
.relative {
  position: relative;
}
.absolute {
  position: absolute;
  bottom: 35%;
  left: 75%;
}
</style>