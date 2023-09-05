<script setup>
import { useAvisStore } from '../stores/avis';
import Button from '../components/Button.vue';

const store = useAvisStore();

const formatDate = (date) => {
    const day = new Date(date).getDate()
    const month = new Date(date).toLocaleDateString('fr-FR', { month: 'long' })
    const year = new Date(date).getFullYear()
    return `${day} ${month} ${year}`
}

const print=()=> {
    window.print();
}
</script>

<template>
    <div class="container">
        <div class="avisform" id="toPrint">
            <div class="avis-header">
                <div></div>
                <h1>Avis de passage</h1>
                <img src="../assets/images/logo-clean3000-mini.png" alt="logo-mini" width="100">
            </div>

            <div class="avis-content">                
                <p>
                    Le <strong>{{ formatDate( store.date) }}</strong>, un technicien Clean3000 est intervenu chez <strong>{{ store.name }}</strong> pour l’entretien de la
                    vitrerie.
                    Voici les observations relevées: <strong>{{ store.message }}</strong> 
                </p>
                <p>Nous vous remercions pour votre confiance</p>
            </div>

            <div class="avis-footer">

                <div class="copyright">

                    <img width="100" class="logo" src="../assets/images/logo-clean3000-transparent.png" alt="logo mini">
                </div>
                <div class="info">

                    <div class="adress">
                        <img src="../assets/images/location.svg" alt="location" height="20">
                        <p>Clean3000 <br> 99 rue de Paris <br>59000 Lille</p>
                    </div>
                    <div class="contact">
                        <p><img src="../assets/images/phone.svg" alt="phone"> 01 23 45 67 89</p>
                        <p><img src="../assets/images/mail.svg" alt="mail"> clean3000@contact.com</p>
                    </div>
                </div>
            </div>
        </div>

        <Button @click="print"> Imprimer</Button>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
.avisform {
    border: solid 1px #3D3D34;
    margin: 50px 10%;
    width: 80%;
    height: 80%;
    min-height: fit-content;
    padding: 20px;
    border-radius: 10px;
    position: relative;
}

.avis-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;    
    
}

.avis-content {
    padding: 1em;
    line-height: 2em;
    text-align: left;
}
.avis-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-color: #3D3D34;
    color: #fff;
    align-items: center;
    font-size: 0.8em;
    height: 100px;
}

.logo {
    width: 200px;
}

.copyright {
    font-size: 0.8em;
    display: flex;
    align-items: center;
}

.info {
    display: flex;
    gap: 50px;

}

.adress {
    display: flex;
    gap: 1em;
    align-items: center;
    line-height: 1.5em;

}

.contact p {
    margin: 1em 0;
}

button{
    width: fit-content;
    margin-bottom: 0.5em;
}

@media print{
    body{
        display: none;
    }
    #toPrint{
        display: block;
    }
}

@media (max-width: 770px) {
   .avisform{
       font-size: 0.7em;
       height: 450px;
   }

   .avis-footer{
       font-size: 0.6em;
       flex-direction: column;
   }
   .logo{
       width: 100px;
   }
}
</style>