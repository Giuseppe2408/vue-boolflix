<template>
  <div id="app">
    <Myheader 
    
    @mysearch="searchFilm"/>
    <main>
      <FilmList :film="film"
      />
    </main>
    
  
  </div>
</template>

<script>
import axios from "axios"
import Myheader from './components/Myheader.vue'
import FilmList from './components/FilmList.vue'

export default {
  name: 'App',
  components: {
    Myheader,
    FilmList
  },

  data(){
        return {
            apiUrl : [
              "https://api.themoviedb.org/3/search/movie?api_key=012e5b454b81c2bb2e5ad12bff9b77ee&language=it-EU&query=movie&page=1&include_adult=false",
              
            ],          
            film: [], 
                   
            
        }
  },

  created(){
    this.filmList()        
  },

  methods : {
      filmList(){
        if (this.userTxt !== "") {
          let NewUrl = this.apiUrl + "&query=" + this.userTxt;
          axios
          .get(NewUrl)
          .then(apiresult => {
            this.film = apiresult.data.results;
            console.log(apiresult);   
        })
        .catch((error)=>{
            console.log("Errore", error);
        })
        }
      },

      searchFilm(userText){
        this.userTxt = userText;
        console.log(this.userTxt);
        this.filmList()
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
