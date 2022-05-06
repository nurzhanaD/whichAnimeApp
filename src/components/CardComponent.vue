<template>
    <div class="card">
        <img :src="item.images.jpg.image_url" class="poster">
        <h3>{{item.title}}</h3>
    </div>
</template>

<script>
export default {
    props:['item']
}
</script>

<style scoped>
.card {
    width:300px;
    height:400px;
    display:flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
}
.poster {
    border-radius: 10px;
}
</style>
