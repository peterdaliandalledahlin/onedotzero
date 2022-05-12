<template>
<v-container>
    <v-sheet
  elevation="5"
>
    <v-banner class="my-4">
    Nu ska vi sätta dig på ett riktigt prov... Kan du hitta kaffekoppen på bilden? Du får inte fuska genom att Googla hur en kaffekopp ser ut!

  </v-banner>
</v-sheet>
    <img
        src="../assets/image-map.jpg"
        usemap="#workmap"
    />
    <map name="workmap">
        <area alt="" coords="510,224,46" shape="circle" @click.prevent="handleClick">
        <area alt="" coords="50,20,10" shape="circle" @click.prevent="handleClick">
        <!-- <area shape="rect" coords="24,44,270,350" alt="picsum" @click.prevent="handleClick"> -->
    </map>
    <v-snackbar
      v-model="snackbar"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar> 
</v-container>
</template>

<script>
export default {
    name: 'image-map',
    data(){
        return {
            snackbar: false,
            text: `Oj, du kände igen kaffekoppen...`,
        }
    },
    methods: {
        handleClick(){
            this.snackbar = true
        }
    }
}
</script>
<style>
area {
    cursor: pointer;
}
</style>