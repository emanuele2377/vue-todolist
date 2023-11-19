const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            items : true,
            
            items: [
                { message: 'Studiare' }, 
                { message: 'Allenamento' },
                { message: 'Chiamare Francesco' },
                { message: 'Incontrarsi al bar' },
                { message: 'Decidere che fare la sera' },
                { message: 'Recuperare Giovanni' },
                { message: 'Andare in disco' }
        ],

            
    }
    consolelog(true)
    },


    methods: {
        
     
    },
};

createApp(opzioni).mount('#app')