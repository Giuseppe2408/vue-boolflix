<template>
    
    <div id="my-film">
        <img :src="'https://image.tmdb.org/t/p/w342/' + FilmCard.poster_path" alt="">
        <div>
            title: {{FilmCard.title}}
        </div>
        <div>
            original-title: {{FilmCard.original_title}}
        </div>
        <div>
            <lang-flag :iso="FilmCard.original_language"/>
        </div>
        <div>
            vote: {{FilmCard.vote_average}}
        </div>
            
    </div>
</template>

<script>
import LangFlag from "vue-lang-code-flags"

export default {
  name : "CardFilm",
  components : {
    LangFlag 
  },

  props : {
    FilmCard : Object
  }
  
}
</script>


<style scoped lang="scss">
    #my-film{
        flex-basis: 20%;
        color: white;
    }
</style>