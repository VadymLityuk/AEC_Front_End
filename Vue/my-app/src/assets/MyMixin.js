export const MyMixin = {



    created(){
    this.hello();
    }, 
    data(){
        return{
    mesage : "I am second",
        };

},
methods: {


    logMessage() {
        console.log(this.message);

    },
    hello() {

        console.log("hello mixin");
    },
},

};