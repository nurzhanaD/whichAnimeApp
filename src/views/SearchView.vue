<template>
    <div class="search">
        <header>
            <span class="anime-str">Search <span class="anime-str2">ANIME</span></span>
            <form class="search-form" @submit.prevent="getData">
              <input type="text" class="input" placeholder="Search for anime..." v-model="search_query">
              <button type="submit" class="btn">Search</button>
            </form>
        </header>
        <main>
          <div class="cards">
            <CardComponent v-for="item in info" :key="item" :item="item"/>
          </div>
        </main>
    </div>
</template>

<script>
import axios from 'axios';
import CardComponent from '../components/CardComponent.vue'

export default {
  components:{
    CardComponent
  },
  data() {
    return{
      search_query:'',
      info:[]
    }
  },
  methods: {
    async getData() {
       await axios
      .get(`https://api.jikan.moe/v4/anime?q=${this.search_query}`)
      .then(res => {this.info = res.data.data})
    }
  }
}
</script>

<style scoped>
header {
  width:100vw;
  height:20vh;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.search {
  background-color: black;
}
.anime-str {
  font-size: 48px;
}
.anime-str2 {
  font-size: 52px;
  color:#9581d6;
}
.input {
  width:600px;
  height:50px;
  border:4px solid white;
  background-color:#9581d6;
  border-radius:15px;
  font-size:24px;
}
.input::placeholder{
  color:white;
}
.btn {
  width:150px;
  height:54px;
  border:4px solid white;
  border-radius:15px;
  font-size:24px;
  position:relative;
  left:10px;
  background-color:#9581d6;
}
.btn:active {
  border:4px solid blue;
  color:blue;
}
.cards {
  width:100vw;
  height:70vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  overflow:scroll;
}
</style>