<script setup>

import { RouterLink, } from 'vue-router';
import Button from '@/components/Button.vue'
</script>

<template>
    <div class="container">
        <div class="left">

            
            <img id="logo" src="../assets/images/logo-clean3000.png" alt="logo">
        </div>
        <div class="center">

            <H1>Bienvenue sur le portail de gestion de vos avis de passage</H1>
            <RouterLink to="/generate"> <Button>Générer votre avis de passage</Button> </RouterLink>
        </div>

    <img id="cleaners" src="../assets/images/cleaning.jpg" alt="cleaners">        

        


    </div>
</template>

<style scoped>
.container {
    display: flex;
    margin: 80px 0 0 0;
}
.left{
    background-color: #3D3D34;
    display: flex;
    align-items: center;
}
.center {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
}

img{
    width:300px;
}

#cleaners{
    height: 525px;
}

@media (max-width: 770px) {
    .container{
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2em;
        background-image: url("../assets/images/cleaning.jpg");
        background-size: cover;
        background-position: center;
        color: #fff;
       
        
    }

    #logo, #cleaners{
        display: none;
    }

    h1{
        font-size: 1.5em;
        padding: 1em;
        background-color: #74b85797;
        border-radius: 10px;
    }

    


    
    
}
</style>

