<template>
    <div id="film-list">
        <CardFilm
        v-for="(card, i) in film" 
        :key="i"
        :FilmCard="card"/> 
    </div>
</template>

<script>
import CardFilm from "./CardFilm.vue"


export default {
  name : "FilmList",
  components : {
    CardFilm
  },
  props : {
    film : Object
  },
    
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