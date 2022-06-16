<template>
    
    <div id="my-film">
        <img :src="'https://image.tmdb.org/t/p/w342/' + FilmCard.poster_path" alt="">
        <div class="none">
            title: {{FilmCard.title}}
        </div>
        <div class="none">
            original-title: {{FilmCard.original_title}}
        </div>
        <div class="none">
            <lang-flag :iso="FilmCard.original_language"/>
        </div>
        <div class="none">
            vote:  {{Math.round(FilmCard.vote_average)/2}}
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
    FilmCard : Object,
    activeindex : Number,
  },

  methods : {
    
  }
  
}
</script>


<style scoped lang="scss">
    #my-film{
        flex-basis: 20%;
        color: white;
        i{
            font-size: 40px;
            color: white;
        }
        .none{
            display: none;
        }
        &:hover .none{
            display: block;
            cursor: pointer;
        }
    }
</style>