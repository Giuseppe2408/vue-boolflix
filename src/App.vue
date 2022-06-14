<template>
  <div id="app">
    <MyHeader/>
    <main>
      <FilmList/>
    </main>
    
  
  </div>
</template>

<script>

import MyHeader from './components/MyHeader.vue'
import FilmList from './components/FilmList.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    FilmList
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
