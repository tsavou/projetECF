<script setup>

import { RouterLink, } from 'vue-router';
</script>

<template>
    <div class="container">

        <img src="../assets/images/logo-clean3000.png" alt="">
        <div class="center">

            <H1>Bienvenue sur le portail de gestion de vos avis de passage</H1>
            <RouterLink to="/generate">Générer votre avis de passage</RouterLink>
        </div>

        <img src="../assets/images/cleaning.jpg" alt="">


    </div>
</template>

<style scoped>
.container {
    display: flex;
    margin: 80px 0 0 0;
}

.center {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
}

.center a{
    text-decoration: none;
    color: #fff;
    background-color: #74B857;
    padding: 1em;
    border-radius: 10px;
}

.center a:hover{
    color: #74B857;
    background-color: #fff;
    border: solid 1px #74B857;

}

img {
    width: 300px;
}

@media (max-width: 770px) {
    .container{
        flex-direction: column;
        align-items: center;
    }
    
    
}
</style>

