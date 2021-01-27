<template>
  <div id="accueil" class="container-fluid vh-100">
      <div id="container">
                    <a href="#">
                        <p class="plabel">WELCOME_ SAMURAI_</p></a>  
                
                    <div id="names">
                      <div class="art-style-name" id="ENTROPISM-1">
                        <h2>NOMADS_</h2>
                      </div>
                
                      <div class="art-style-name" id="KITSCH-1">
                        <h2>_STREET KID</h2>
                      </div>
                
                      <div class="art-style-name" id="NEOMILITARISM-1">
                        <h2>CORPO_</h2>
                      </div>
                
                      <div class="art-style-name" id="NEOKITSCH-1">
                        <h2>_NEOKITSCH</h2>
                      </div>
                    </div>
                
                    <div id="posters">
                      <div class="art-style-poster">
                        <img src="../assets/img/1.jpg" id="ENTROPISM-2">
                      </div>
                
                      <div class="art-style-poster">
                        <img src="../assets/img/2.jpg" id="KITSCH-2">
                      </div>
                
                      <div class="art-style-poster">
                        <img src="../assets/img/3.jpg" id="NEOMILITARISM-2">
                      </div>
                
                      <div class="art-style-poster">
                        <img src="../assets/img/4.jpg" id="NEOKITSCH-2">
                      </div>
                    </div>
                
                    <div id="descriptions">
                      <div class="art-style-description" id="ENTROPISM-3">
                        <p>
                          The look of poverty that derives from humans grappling with
                          and struggling against technology and its unforgiving advance.
                          It denotes a lack of design blending with a general poverty of
                          means and ideas.
                        </p>
                      </div>
                
                      <div class="art-style-description" id="KITSCH-3">
                        <p>
                          The look of a long lost golden age on people entirely unwilling
                          or unable to forget it. It’s flashy, bold and usually cheap – filled
                          with gold-plated cyberware, implants encased in brightly colored
                          plastic and larger-than-life makeup.
                        </p>
                      </div>
                
                      <div class="art-style-description" id="NEOMILITARISM-3">
                        <p>
                          The look of global conflict and corporations jockeying for power.
                          Cold, sharp and modern. Making everyone look as if they are ready
                          to drop out of an AV’s cargo door and head straight into combat.
                        </p>
                      </div>
                
                      <div class="art-style-description" id="NEOKITSCH-3">
                        <p>
                          The look of infinite wealth and vanity. Synonymous with luxury, it
                          has been blossoming among Night City’s wealthiest elites – those who
                          can afford to buy anything, who can afford to be anything they want to
                          be.
                        </p>
                      </div>
                    </div>
                
                  </div>
    <div class="row h-50">
    </div>
    <apropos 
      v-if="showModal" 
      @update-show-modal="update" 
     >
    </apropos>
  </div>
</template>

<script>
  import apropos from '../components/APropos'
  export default {
    name: 'accueil',
    data: function () {
                return {
                    showModal: false,
                }
          },
    methods: {
       
        update(showModal) {
            this.showModal = showModal;
        }
    },  
   components: { apropos },
  }

 

const kv = {
    'ENTROPISM-2': ['ENTROPISM-1', 'ENTROPISM-3'],
    'KITSCH-2': ['KITSCH-1', 'KITSCH-3'],
    'NEOMILITARISM-2': ['NEOMILITARISM-1', 'NEOMILITARISM-3'],
    'NEOKITSCH-2': ['NEOKITSCH-1', 'NEOKITSCH-3']
  }

  document.querySelectorAll('.art-style-poster').forEach(function(item) {

    item.addEventListener('mouseover', function(e) {
      document.querySelector('#' + kv[e.target.id][1]).style.visibility = 'visible';
      document.querySelector('#' + kv[e.target.id][0]).style.visibility = 'visible';
      e.target.style.border = 'solid 2px var(--colors-primary--500)';
    });

    item.addEventListener('mouseout', function(e) {
      document.querySelector('#' + kv[e.target.id][1]).style.visibility = 'hidden';
      document.querySelector('#' + kv[e.target.id][0]).style.visibility = 'hidden';
      e.target.style.border = 'none';
    });

  });

</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Orbitron);
@import url("https://fonts.googleapis.com/css?family=Barlow|Tomorrow:400,700&display=swap");

:root {
  --yellow-color: #fcee09; 
  --red-color: #ff003c;
  --black-color: #050a0e;
  --blue-color: #00f0ff;
  --white-color: #fafafa;
}
html,
body {
  --colors-bg--300: #1e181e;
  --colors-bg--500: #191a1e;
  --colors-primary--200: #f4908b;
  --colors-primary--300: #ea6f69;
  --colors-primary--500: #e8615a;
  --colors-primary--600: #9c3230;
  --colors-primary--700: #5e2122;
  --colors-primary--800: #451717;
  --colors-primary--900: #3c181a;
  --colors-inputs: #201313;
  --colors-shadow: #130c0c;
  --colors-secondary--500: #2be4ea;
  --colors-secondary--900: #295459;
  --colors-tertiary--500: #fed33f;
  --colors-on_bg--500: var(--colors-primary--500);
  --colors-on_tertiary--500: var(--colors-bg--300);
  --colors-on_primary--500: var(--colors-primary--200);
  --colors-active--500: #2bfea0;
  --fonts-primary: "Rajdhani", sans-serif;
  --fonts-secondary: "VT323", monospace;
  --ui-glow: 0 0 5px var(--colors-primary--500);
  --ui-glow-borders--500: 0 0 3px var(--colors-primary--500);
  --ui-glow-color: currentcolor;
  --ui-glow-text: -9px -6px 40px var(--ui-glow-color);
  --ui-glow-text--dimmed: -9px -6px 40px var(--ui-glow-color);
  --ui-elevation--1: 2px 2px 0 rgba(0, 0, 0, 0.8);
  --ui-notch-amount: 1rem;
  --ui-notch-hypotenuse: 22.627416px; /* hypothenuse of --ui-notch-amount */
  --ui-notch-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - var(--ui-notch-amount) + 2px),
    calc(100% - var(--ui-notch-amount) + 2px) 100%,
    0 100%
  );

  background-color: var(--colors-bg--500);
  background-image: radial-gradient(
    ellipse at 33% 10%,
    #461616 0%,
    transparent 75%
  );
  background-repeat: no-repeat;
  color: var(--colors-on_bg--500);
  
  font-family: Tomorrow, sans-serif;
  font-size: 100%;
  line-height: 1.4;
  margin: 0;
  min-height: 100vh;
}


 
h2 {
  font-family: Futura, "Trebuchet MS", Arial, sans-serif;
  font-weight: lighter;
  font-size: 1.25em;
  letter-spacing: 2px;
  padding-left: 5px;
  color:  var(--colors-secondary--500);
  margin-top: 1%;
}

img {
  width: 100%;
  height: auto;
}

p {
  font-family: sans-serif;
  letter-spacing: 0.25px;
  font-weight: lighter;
  padding-left: 4px;
  font-size: 0.88em;
  color: var(--colors-primary--500);
  margin-top: 2%;
}

#container {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 auto;
  width: 1400px;
  height: 900px;
  margin-top: 2%;
}

#posters, #descriptions, #names {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  margin: 0 auto;
  width: 100%;
}

#names { height: 5%; }
#descriptions { height: 25%; }
#posters { height: 56%; }

.art-style-poster {
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: crosshair;
  height: 475px;
  width: 350px;
  margin: 10px;
}

.art-style-description {
  visibility: hidden;
  height: 118px;
  width: 328px;
  margin: 10px;
}

.art-style-name {
  visibility: hidden;
  height: 20px;
  width: 400px;
  margin: 10px;
}

.plabel {
  
  font-family: Tomorrow, sans-serif;
  font-size: 15px;
  position: absolute;
  bottom: -1px;
  right: 8%;
  padding: 0 5px;
  background-color: var(--colors-primary--700);
  z-index: 3;
  border-left: 1px solid var(--blue-color);
}



.poster {
  
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  height: 875px;
  width: 950px;
  margin: 10px;
}


    img {
      width: 100%;
      height: auto;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

    p {
      font-family: sans-serif;
      letter-spacing: 0.25px;
      font-weight: lighter;
      padding-left: 4px;
      font-size: 0.88em;
      color: #53c6e9;
      margin-top: 2%;
    }

    #container {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      margin: 0 auto;
      width: 1400px;
      height: 900px;
      margin-top: 2%;
    }

    #posters, #descriptions, #names {
      display: flex;
      flex-direction: row;
      overflow: hidden;
      margin: 0 auto;
      width: 100%;
    }

    #names { height: 5%; }
    #descriptions { height: 25%; }
    #posters { height: 56%; }

    .art-style-poster {
      box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      cursor: crosshair;
      height: 475px;
      width: 350px;
      margin: 10px;
    }

    .art-style-description {
      visibility: hidden;
      height: 118px;
      width: 328px;
      margin: 10px;
    }

    .art-style-name {
      visibility: hidden;
      height: 20px;
      width: 400px;
      margin: 10px;
    }
</style>