<template>
  <div id="app">
    <MyHeader 
    :filmHeader="film"
    @mysearch="ricevoChiamata"
    :filmUser="filmUser"/>
    <main>
      <FilmList :film="film"
      :filmListUser="filmUser"/>
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
            filteredfilm : [],
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
      },
      

      filtroCard(){
        this.filteredfilm = this.film.filter((element)=>{
        return element.text.toLowerCase().includes(this.filmUser.toLowerCase()) 
        })   
        
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
