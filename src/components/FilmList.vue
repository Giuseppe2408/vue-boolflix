<template>
    <div>
        <CardFilm v-for="(card, index) in film" 
        :key="index"
        :FilmCard="card"/>
    </div>
</template>

<script>
import axios from "axios"
import CardFilm from "./CardFilm.vue"


export default {
  name : "FilmList",
  components : {
    CardFilm
  },
    data(){
        return {
            apiUrl : "https://api.themoviedb.org/3/search/movie?api_key=012e5b454b81c2bb2e5ad12bff9b77ee&language=en-US&query=netflix&page=1&include_adult=false",
            film: [],
            userTxt : ""
        }
    },
    created(){
        axios.get(this.apiUrl)
        .then(result => {
            this.film = result.data.response;
            console.log(result);   
        })
        .catch((error)=>{
            console.log("Errore", error);
        })
        
    }
    
}
    
</script>


<style scoped lang="scss">

</style>