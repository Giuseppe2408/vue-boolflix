<template>
    
    <div id="my-film">
        <div class="position">
            <div class="img">
                <img :src="'https://image.tmdb.org/t/p/w342/' + FilmCard.poster_path" alt="">
            </div>
            
                <div class="text">
                    <div class="margin none">
                    <h2>Title: </h2> 
                    <span> {{FilmCard.title}}</span>
                    <span> {{FilmCard.name}}</span>
                </div>
                <div class="margin none">
                    <h2>Original-Title: </h2> 
                    <span> {{FilmCard.original_title}}</span>
                    <span> {{FilmCard.original_name}}</span>
                </div>
                <div class="margin none">
                    <lang-flag :iso="FilmCard.original_language"/>
                </div>

                <div>
                    <h2>Overview: </h2>
                    <span> {{FilmCard.overview}}</span>
                </div>

                <div class="margin none">
                    vote: 
                    <i class="yellow" v-for="i in Math.round(FilmCard.vote_average/2)"
                    :key="i"><font-awesome-icon 
                    icon="fa-solid fa-star" /></i>
                    <i v-for="i in 5 - Math.round(FilmCard.vote_average/2)"
                    :key="'A' + i" class="white"><font-awesome-icon icon="fa-solid fa-star"/></i>
                </div>
            </div>
            
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
  },

  methods : {
    
  }
  
}
</script>


<style scoped lang="scss">
    #my-film{
        flex-basis: 20%;
        color: white;
        overflow-y: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &:hover img{
            filter: brightness(30%);
        }

        
        .position{
            position: relative;
            
            &:hover .text {
                display: block;    
            }
            .text {
                // float: left;
                
                margin: 0;
                padding: 10px;
                width: 90%;
                height: 100%;
                color: white;          
                position: absolute;
                left: 0;
                top: 0;  
                display: none;
                
                    h2{
                        display: inline-block;
                    }
                    
                    i{
                    font-size: 40px;
                    color: white;
                    }
                    span{
                        font-size: 20px;
                    }
                    
                    // font awesome
                    .fa-star {
                        font-size: 20px;
                        
                    }
                    .yellow {
                        color: yellow;
                    }
                    .white {
                        color: white;          
                    }
                }
            
        }
        

        
        
        
    }
</style>