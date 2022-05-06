<template>
    <main>
      <div class="random-box">
        <div class="poster">
          <img :src="image_url" :alt="image_url">
        </div>
        <span class="anime-title">{{title}}</span>
        <button class="btn" @click="getRandomData">random</button>
      </div>
    </main>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      info:null,
      id:0,
      title:'',
      image_url:''
    }
  },
  methods: {
    getRandomData() {
      this.id = Math.floor(Math.random() * 1000) + 1
      axios
        .get(`https://api.jikan.moe/v4/anime/${this.id}`)
        .then(res => {
          this.info = res.data.data
            this.title = this.info.title
            this.image_url = this.info.images.jpg.image_url
            console.log(this.info.mal_id)
        })
    }
  }
}
</script>

<style scoped>
main {
  width:100vw;
  height:90vh;
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: black;
}
.random-box {
  width:450px;
  height:650px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
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
img {
  width:336px;
  height:457.5px;
  border:4px solid white;
  border-radius:15px;
}
.poster {
  width:336px;
  height:457.5px;
  border-radius:10px;
  border:4px solid black;
}
.anime-title {
  font-size:24px;
}
</style>