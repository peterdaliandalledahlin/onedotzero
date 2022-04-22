<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            OneDotZero
          </v-list-item-title>
          <v-list-item-subtitle>
            ...en del av Utbildningsförvaltningen
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>OneDotZero - 1.0</v-toolbar-title>
      
      <v-spacer></v-spacer>
      
      <v-img class="mr-3" :src="require('./assets/logotype.webp')" max-width="40" max-height="40"></v-img>
      <v-img class="mr-3" :src="require('./assets/logotype_enkopings_kommun.png')" max-width="40" max-height="40"></v-img>
  
    </v-app-bar>

    <v-main>
      <router-view />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue'
  export default {
    components: {
      Footer
    },
    data: () => ({
      drawer: null,
      items: [
          { title: 'Hem', icon: 'mdi-home', link: '/' },
          { title: 'Portfolio', icon: 'mdi-folder', link: '/portfolio' },
          { title: 'Filmer', icon: 'mdi-filmstrip', link: '/movies' },
          { title: 'Om oss', icon: 'mdi-information', link: '/about' },
          { title: '360 bilder', icon: 'mdi-rotate-360', link: '/threesixty' },
          { title: 'Aktuellt', icon: 'mdi-bell-ring', link: '#events'  },
          { title: 'Aktiviteter', icon: 'mdi-human-female-dance', link: '#activities' },
          { title: 'Hitta till oss', icon: 'mdi-map-marker', link: '/map' },
          { title: 'Kontakta oss', icon: 'mdi-account-box', link: '/contact' },
          { title: 'Galleri', icon: 'mdi-view-gallery', link: '/gallery' },
          { title: 'Ladda ner', icon: 'mdi-file-download', link: '#download' },
        ],
      }),
  }
</script>