import { defineStore } from "pinia";


export const useAvisStore = defineStore('avis', {
    state: () =>({
            name:'Nom du client',
            date:'JJ/MM/AAAA',
            message:'message dobservation'
        }),    

    actions: {
        addData(name,date,message){
            this.name=name;
            this.date=date;
            this.message=message;        
           

        },

        
    }
})

