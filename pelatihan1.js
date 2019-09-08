new Vue ({
    el: '#app',
    data: {
        greeting: 'Selamat Belajar',
        pesan: '<b>yaa</b>',
        user: 'Devia',
        city: 'Yogyakarta',
        pesan1: '',
        alertMessage: ''
    },
    methods:{
        changeGreeting(){
            this.greeting = this.greeting === 'Selamat Belajar' ?
            'Semangat belajar' :
            'Selamat Belajar' ;

        },
        addGreeting(){
            this.pesan1 = 'YYYY'
        },
        
        alertinput(){
            this.alertMessage= 'you typed and press enter';
        }
    }
});