var vm = new Vue({
    el: "#app",
    data: {
      firstname : 'Vadym',
      lastname : 'Lityuk',
      address: 'Quebec',
      nombre : 4,
    },
    computed:{
moncalcul(){
    return this.nombre + 10;

}
    },
    methods: {
        mydetails: function () {
          return (
            "I am " + this.firstname + " " + this.lastname + " from " + this.address
          );
        },
      },
    
  })