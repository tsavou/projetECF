<script setup>
import { ref } from 'vue'
import Button from '@/components/Button.vue'

const TypeOfClient = ref('');
const showtypeOfClient = ref(true);


const toggletypeOfClient = (type) => {
  TypeOfClient.value = type;
  showtypeOfClient.value = false;  
}

const toggleBack = () => {
  showtypeOfClient.value = true;
  TypeOfClient.value = '';
}

const particuliers= ref(["Jérôme Livran","Philippe Parguey"]);
const pro= ref(["Jardins d'Ariana","Archimed","BeCom"]);

</script>

<template>
  <div class="container">
    <div class="cleaner left"></div>

    <div class="avisform">
      <h1>Saisie d'un Avis de passage</h1>

      <div class="typeOfClient" v-if="showtypeOfClient">
        <p>Le client est un :</p>

        <Button @click="toggletypeOfClient('particulier')" value="particulier">Particulier</Button>
        <Button @click="toggletypeOfClient('pro')" value="pro">Professionnel</Button>            

      </div>
      

      <form action="post" v-if="TypeOfClient === 'particulier'">

        <Button class="backbtn" @click="toggleBack">Retour</Button>

        <label for="clientName">Nom du client :</label>
        <select name="client" id="client"  required>
          <option value="" disabled selected>-- Sélectionnez un client --</option>
          <option  v-for="client in particuliers" value="client">{{ client }}</option>
          
        </select>        

        <label for="date" required>Date de l'intervention :</label>
        <input type="date" required>

        <label for="Observations">Observations</label>
        <textarea name="Observations" id="Observations" cols="30" rows="10"
          placeholder="Ecrivez vos observations sur l’intervention (commentaires, remarques, problématiques...)"></textarea>

        <Button>Générer mon avis de passage</Button>

      </form>
      <form action="post" v-if="TypeOfClient === 'pro'">
        <Button class="backbtn" @click="toggleBack">Retour</Button>

        <label for="client">Nom de l'entreprise :</label>
        <select name="client" id="client" >
          <option value="" disabled selected>-- Sélectionnez un client --</option>
          <option  v-for="client in pro" value="client">{{ client }}</option>
          
        </select>   
        <label for="date">Date de l'intervention :</label>
        <input type="date" required>

        <label for="Observations">Observations</label>
        <textarea name="Observations" id="Observations" cols="30" rows="10"
          placeholder="Ecrivez vos observations sur l’intervention (commentaires, remarques, problématiques...)"></textarea>

        <Button>Générer mon avis de passage</Button>

      </form>
    </div>

    <div class="cleaner right">

    </div>


  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: space-between;
}

h1 {
  text-align: center;
}

.avisform {
  flex: 1;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.typeOfClient {
  padding: 5em;
  
}

.typeOfClient p {
  margin-bottom: 2em;
}
.typeOfClient button {
  display: flex;
  justify-content: center;
  
  margin: 0.5em;
  padding: 0.5em 1em;
  border-radius: 5px;
  border: none;

}

form{
  display: flex;
  flex-direction: column;

}

label, textarea {
  margin-bottom: 0.5em;
}



.cleaner {
  height: 525px;
  width: 300px;
  background-image: url("../assets/images/technicien.jpg");
  background-size: cover;
}

.right {
  background-position: center;
}




label {
  margin-top: 0.5em;
}

.backbtn {
  width: fit-content;
}

@media (max-width: 920px) {
  .container {
   background-image: url("../assets/images/technicien.jpg");
   background-position: center;
   background-size: cover;
 
  }

  .cleaner{
    display: none;
  }

  form{
    margin-top: 20px;
    background-color: rgb(232, 223, 163);
    padding: 1em;
    border-radius: 10px;
  }

  h1{
    color: #fff;
  }
}

</style>
