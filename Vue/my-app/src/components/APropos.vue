<template>
    <div>
        <transition name="modal" >
            <div class="modal-mask" @click="showThisModal(false)">
                <div class="modal-wrapper">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Surf Spirit</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="showThisModal(false)">
                                    <span aria-hidden="true" >&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                      
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" @click="showThisModal(false)">Fermer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>    
    </div>
</template>

<script>
export default {
    name: 'apropos',
    methods: {
    //Fonction qui défini un événement personnalisé, la valeur true ou false est passé
    //Selon l'ouverture ou la fermeture du modal
        showThisModal(value) {
            this.showModal = value;
            this.$emit("update-show-modal", this.showModal)
        },
    },    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*Modal*/
.modal-mask {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>