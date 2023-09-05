<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'


const isMenuOpen = ref(false)
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}


</script>

<template>
    <header>
        <div class="flex">
            <h1>
                <RouterLink to="/">
                    <img src="../assets/images/logo-clean3000-transparent.png" alt="Logo" width="150">
                </RouterLink>
            </h1>


            <nav class="flex">
                <div class="navbar">

                    <div class="burger-btn" @click="toggleMenu()" v-if="!isMenuOpen">&#x2630;</div>
                    <div class="burger-btn" @click="toggleMenu()" v-else>x</div>

                    <div class="links" :class="{ 'menu-open': isMenuOpen }">
                        <RouterLink to="/generate" @click="toggleMenu()"> <img src="../assets/images/new.svg" alt="new"> Générer un avis</RouterLink>
                        <RouterLink to="/avis" @click="toggleMenu()"> <img src="../assets/images/file.svg" alt=""> Mon avis de passage</RouterLink>                        
                        
                    </div>
                </div>
            </nav>
        </div>

    </header>
</template>

<style scoped>
.burger-btn {
    display: none;
}

header {
    background-color: #3D3D34;
    padding: 1em 0;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
}

.flex {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

nav {
    color: #fff;
}

a {
    color: #fff;
    padding: 1em;
    width: 100%;
    text-decoration: none;
    position: relative;

}

nav a:hover {
    border-bottom: #74B857 solid 1px;
    color: #74B857;

}


@media (max-width: 770px) {

    .links {
        display: none;
        position: absolute;
        top: 80px;       
        left: 0;
        background-color: #3D3D34;
        width: 100%;
        
    }

    .menu-open {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        

    }

    .burger-btn {
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        color: white;
        cursor: pointer;
        padding-right:0.5em;
    }

    .links a {
        width: 100%;
        text-align: center;        
        font-weight: bold;
        color:aliceblue;
    }

    .links a:hover {
        background-color: #74B857;
        color:#3D3D34;
    }


}
</style>

