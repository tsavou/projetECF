<template>
    <footer>
        <div class="copyright">

            <img class="logo" src="../assets/images/logo-clean3000-mini.png" alt="logo mini">
            <p >&copy 2023 - Clean3000 - Tous droits réservés</p>
        </div>
        
        <div class="adress">
            <img src="../assets/images/location.svg" alt="location">
            <p>Clean3000 <br> 99 rue de Paris <br>59000 Lille</p>
        </div>
        <div class="contact">
            <p><img src="../assets/images/phone.svg" alt="phone"> 01 23 45 67 89</p>
            <p><img src="../assets/images/mail.svg" alt="mail"> clean3000@contact.com</p>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: #3D3D34;
    color: #fff;
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding-left: 150px;
    align-items: center;
    font-size: 0.8em;
}

.logo{
    width: 100px;
}

.copyright{
    font-size: 0.8em;
    display: flex;
    align-items: center;
}

.adress{
    display: flex;
    gap: 1em;
    line-height: 1.5em;    
}

.contact p{
    margin: 1em 0;
}
</style>