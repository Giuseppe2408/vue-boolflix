<template>
  <div id="app">
    <MyHeader 
    :filmHeader="filmHeader"
    @mysearch="ricevoChiamata"
    :filmUser="filmUser"/>
    <main>
      <FilmList :film="film"/>
    </main>
    
  
  </div>
</template>

<script>
import axios from "axios"
import MyHeader from './components/MyHeader.vue'
import FilmList from './components/FilmList.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    FilmList
  },
  data(){
        return {
            apiUrl : "https://api.themoviedb.org/3/search/movie?api_key=012e5b454b81c2bb2e5ad12bff9b77ee&language=en-US&query=movies&page=1&include_adult=false",
            film: [],
            filmUser : ""
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
    },
    methods : {
      ricevoChiamata(searchText){
        this.filmUser = searchText
      }
    }
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
