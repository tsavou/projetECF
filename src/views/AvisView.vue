<script setup>
import { useAvisStore } from '../stores/avis';

const store= useAvisStore();
</script>

<template>
    <div class="container">
        <div class="avisform">
            <h1>Avis de passage</h1>
            <p>
                Le {{store.date}}, un technicien Clean3000 est intervenu chez {{store.name}} pour l’entretien de la
                vitrerie. 
                <br>Voici les observations relevées: {{store.message}}
            </p>
            <p>Nous vous remercions pour votre confiance,</p>
            <div class="avis-footer">

                <div class="copyright">
                    
                    <img width="100" class="logo" src="../assets/images/logo-clean3000-mini.png" alt="logo mini">
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
        <img src="../assets/images/logo-clean3000.png" alt="">


    </div>
</template>

<style scoped>
.avisform{
    padding:1em;
    display: flex;

}

.avis-footer{
    display: flex;    
}
</style>