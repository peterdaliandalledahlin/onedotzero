<template>
    <v-container>  
        <v-row>
            <v-col
            v-for="image in images"
            :key="image.id"
            class="d-flex child-flex"
            cols="4"
            >
            <v-img
                :src="image.src"
                :lazy-src="image.src"
                aspect-ratio="1"
                class="grey lighten-2"
            >
                <template v-slot:placeholder>
                <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                >
                    <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                    ></v-progress-circular>
                </v-row>
                </template>
            </v-img>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data(){
        return {
            images: [
                {id: 1, src: require('../assets/brygga.jpg')},
                {id: 2, src: require('../assets/helikopter.jpg')},
                {id: 3, src: require('../assets/kraftstation.jpg')},
                {id: 4, src: require('../assets/ljus.jpg')},
                {id: 5, src: require('../assets/mandarinand.jpg')},
                {id: 6, src: require('../assets/orgel.jpg')},
                {id: 7, src: require('../assets/port.jpg')},
                {id: 8, src: require('../assets/studenttag.jpg')},
                {id: 9, src: require('../assets/synth.jpg')},
                {id: 10, src: require('../assets/trabat.jpg')},
                {id: 11, src: require('../assets/valkomstdrink.jpg')},
                {id: 12, src: require('../assets/verkstad.jpg')},
            ]
        }
    }
}
</script>

<style>

</style>