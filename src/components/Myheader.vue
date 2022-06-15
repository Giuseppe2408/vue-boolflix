<template>

    <header>

        <img src="https://media-assets.wired.it/photos/615ef4b55ccc3b73fb14d5b2/master/pass/wired_placeholder_dummy.png" alt="logo netflix">  
        <span>{{filmUser}} </span>    
        <input 
        placeholder="search"
        v-model="userTxt" 
        type="search">
        <button @click="$emit('mysearch', userTxt)">cerca</button>
        
        
    </header>

</template>

<script>


export default {
  name: 'MyHeader',

  data(){
    return {
        userTxt : "",
    }
  },

  methods : {
    console(){
        console.log(this.userTxt);
    }
  }
    
}
</script>


<style scoped lang="scss">
    header {
        background-color: black;
        height: 100px;
        display: flex;
        justify-content: end;
        align-items: center;  

        img{
            width: 100px;
            height: 100px;
            object-fit: contain;
            margin-right: 80%;
        }
        
        span {
            color: white;
        }

        input {
            height: 40px;
            width: 40%;
        }

        button{
            background-color: transparent;
            width: 5%;
            margin-left: 20px;
            padding: 1px;
            color: white;
            font-size: 30px;

        }
        
        
    }
</style>