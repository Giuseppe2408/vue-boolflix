<template>
  <div id="app">
    <Myheader 
    @mysearch="searchFilm"/>
    <main>
      <FilmList 
      :myNetflix="myNetflix"
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
    FilmList,
  },

  data(){
        return {
            apiUrl : [

              "https://api.themoviedb.org/3/search/movie?api_key=012e5b454b81c2bb2e5ad12bff9b77ee&language=it-EU&query=movie&page=1&include_adult=false",
              "https://api.themoviedb.org/3/search/tv?api_key=012e5b454b81c2bb2e5ad12bff9b77ee&language=it-EU&query=tv&page=1&include_adult=false"
              
            ],          
            myNetflix: [],
                      
        }
  },

  created(){
    this.filmList()        
  },

  methods : {
      filmList(){
        for (let index = 0; index < this.apiUrl.length; index++) {
          if (this.userTxt !== "") {
            let NewUrl = this.apiUrl[index] + "&query=" + this.userTxt;
            axios
            .get(NewUrl)
            .then(apiresult => {
              this.myNetflix = apiresult.data.results;
              console.log(apiresult);
              console.log("", this.myNetflix);
             
          })
          .catch((error)=>{
            console.log("Errore", error);
            
          })
          }
        }
        

        for (let i = 0; i < this.apiUrl.length; i++) {
            let defaultUrl = this.apiUrl[i]
            axios
            .get(defaultUrl)
            .then(apidefault => {
              this.myNetflix = apidefault.data.results;
              console.log(apidefault);
              console.log(this.myNetflix)
            }) 
          
        }
      },
        

      searchFilm(userText){
        this.userTxt = userText;
        console.log(this.userTxt);
        this.filmList()
      },
      
     
      
    }
            


}

</script>

<style lang="scss">
  // $fa-font-path: "node_modules/@fortawesome/fontawesome-free/WebFonts" !default;
  // @import "node_modules/@fortawesome/fontawesome-free/scss/fontawesome";
  // @import "node_modules/@fortawesome/fontawesome-free/scss/regular";
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
