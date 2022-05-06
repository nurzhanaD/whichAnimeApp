<template>
    <main>
        <p class="main-title">About our project / О нашем проекте</p>
        <div class="about-card">
            <p class="title">Search anime and randomizer</p>
            <p class="main-text">
                If you ser suffering from not knowing what do you want to watch and you feel like you watched everything on the Internet,
                try out our randomizer or try to find something with our search anime.
            </p>
            <br>
            <p class="title">Поиск аниме и рандомайзер</p>
            <p class="main-text">
                Если вы не знаете, какое аниме вам посмотреть и вам кажется, что вы посмотрели все, что есть в интернете,
                то попробуйте наш поиск аниме или рандомайзер, чтобы вам попалось предназначенное вам судьбой аниме.
            </p>
        </div>
            <img class="ghost" src="https://cdn-icons-png.flaticon.com/512/1499/1499992.png">
    </main>
</template>
<style scoped>
main {
    width:100vw;
    height:90vh;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: black;
}
.about-card {
    width:600px;
    height:350px;
    border:4px solid white;
    border-radius: 15px;
    margin-top:50px;
    background-color:#9581d6;
    padding:25px;
}
.main-title {
    font-size:52px;
    font-weight: 800;
}
.title {
    font-size: 32px;
    font-weight: 600;
    text-align: center;
}
.main-text{
    font-size: 20px;
    margin-top:20px;
}
.ghost {
    margin-top:15px;
    width:150px;
}
</style>