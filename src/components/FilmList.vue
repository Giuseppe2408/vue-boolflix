<template>
    <div id="film-list">
        <CardFilm
        v-for="(card, i) in film" 
        :key="i"
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
            apiUrl : "https://api.themoviedb.org/3/search/movie?api_key=012e5b454b81c2bb2e5ad12bff9b77ee&language=en-US&query=movies&page=1&include_adult=false",
            film: [],
            userTxt : ""
        }
    },
    created(){
        axios.get(this.apiUrl)
        .then(apiresult => {
            this.film = apiresult.data.results;
            console.log(apiresult);   
        })
        .catch((error)=>{
            console.log("Errore", error);
        })
    }
    
}
    
</script>


<style scoped lang="scss">
    #film-list{
        background-color: #1e2d3b;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        height: 100vh;
    }
        
</style>