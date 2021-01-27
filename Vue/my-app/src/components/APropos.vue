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
                                <p>
                                    Cette entreprise à vue le jour par quatre amis amoureux de plein-air et de yoga.
                                    Nous voulions combiner le calme de l'eau et le travail du corps, la pratique de la planche à pagaie est devenu une
                                    passion.
                                    Donc, nous avons eu le désir de faire connaître ce sport accessible à tous.
                                </p>
                                <p>

                                    La mission de l'entreprise est de faire connaître les bienfaits du stand-up paddle.
                                    La pratique de la planche à pagaie, est un bon exercice, il fait travailler les muscles stabilisateurs, les muscles des bras et des jambes sont sollicités ce qui en fait un exercice complet.
                                    Cette entraînement peut être comparable à la méditation la coordination, la sensation de glisse sur les hauts nous ancre dans le moment présent.
                                </p>
                                <p>
                                    Notre domaine d'activité, est la vente de stand-up paddle de toutes catégories et le services de cours, comme le yoga sur planche, et l'accompagnement technique dans le choix d'une planche à votre mesure.

                                </p>
                                <p>
                                    Nous sommes situé au 1900 rue Cabot à Jonquière.
                                    Venez voir notre inventaire de plus de 500 produits.
                                </p>
                                <p>
                                    Toutes ces valeurs vous représentent, vous êtes invités à faire partie de notre équipe.
                                    Nous serions heureux de vous rencontrer.
                                    <a href="#">Lien vers la page contact</a>
                                </p>
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