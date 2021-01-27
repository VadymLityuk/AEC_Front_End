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
  h1 {
      text-align: center;
    font-family:  'Orbitron', courier, sans-serif;
    font-size: 35px;
    color: var( --colors-secondary--500);
    text-shadow:  3px 2px var(--colors-shadow);
  }
  
  
  .container {
    margin-left: auto;
    margin-right: auto;
    width: 500px;
  }
  .content {
    display: inline-block;
    padding: 2%;
    width: 90%;
    height: 90;
    margin: 10%;
  }
  
  div.message-alt {
    --aug-border: 2px;
    --aug-border-bg: white;
    width: calc(100% - 20px);
    max-width: 640px;
    overflow: hidden;
    transition: all 0.5s;
  }
  div.message_container-alt {
    padding-bottom: 20px;
  }
  
  div.message {
    --aug-border: 2px;
    --aug-border-bg: #03d7f2;
    width: calc(100% - 20px);
    max-width: 640px;
    overflow: hidden;
    transition: all 0.5s;
  }
  div.message_container {
    padding-bottom: 20px;
  }
  
  .name {
      
  font-family: Tomorrow, sans-serif;
   text-transform: uppercase;
    color: var(--colors-secondary--500);
  }
  
  .email {
    color: var(--colors-secondary--500);
  }

  hr{
    height: 1px;
    background-color: var(--colors-primary--500);
    border: none;

  }
  

  div.title-alt {
    display: inline-block;
    padding: 0.5em 2em;
    --aug-border: 2px;
    --aug-border-bg: #d1d1d1;
    font-weight: bold;
    letter-spacing: 0.1em;
    text-align: center;
    text-transform: uppercase;
  }
 
  
  input[type="text"] {
    background: transparent;
    border: none;
    border-bottom: 1px solid #473939;
    
    text-transform: uppercase;
  }
  input.input {
    width: 100%;
    padding: 12px 20px;
    box-sizing: border-box;
    background-color: var(--colors-inputs);
    color: rgb(161, 240, 227);
    border: 3px;
    color: var( --colors-primary)
   ;
  }
  ::-webkit-scrollbar-thumb {
    background: #000;
  }


  

  .clicked{
    text-decoration: underline purple 3px;
  }
  .changer{
      color:rgb(100, 255, 113);
  }
  .my{
    text-align:center

  }
    
.modal-overlay {
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 98;
background-color: rgba(0, 0, 0, 0.3);
}

.modal {
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 99;
width: 100%;
max-height:400px;

max-width: 600px;
background-color: var(--colors-bg--500);
background-image: radial-gradient(
  ellipse at 33% 10%,
  #461616 0%,
  transparent 75%
);
clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
border-style:  double double double double;
border-radius: 13px;
padding: 25px;
}


.btn {
  width: 230px;
  height: 60px; 
  border: 0;
  outline: none;
  background-color: var(--black-color);
  cursor: pointer;
  position: relative;
  font-family: Tomorrow, sans-serif;
  font-size: .85rem;
  text-transform: uppercase;
  color: var(--black-color);
  clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
}

.btn__content {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  background-color: var(--yellow-color);
  clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
}

.btn--secondary {
  background-color: var(--white-color);
}

.btn--secondary .btn__content {
  background-color: var(--red-color);
  color: var(--white-color);
}

.btn__label {
  font-size: .40rem;
  position: absolute;
  bottom: -1px;
  right: 8%;
  padding: 0 5px;
  background-color: var(--yellow-color);
  z-index: 3;
  border-left: 1px solid var(--blue-color);
}

.btn--secondary .btn__label {
  background-color: var(--white-color);
  color: var(--black-color);
}

.btn__glitch {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--yellow-color);
  filter: drop-shadow(-2px 3px #67e3f3) drop-shadow(-1px -3px #02d8f3) drop-shadow(2px 1px #02d8f3);
}

.btn--secondary .btn__glitch {
  background-color: var(--red-color);
  border: 0 2px 2px 2px var(--blue-color);
}

.btn:hover .btn__glitch,
.btn:hover .btn__content::after,
.btn:focus .btn__glitch,
.btn:focus .btn__content::after {
  display: block;
  animation: glitch-animation 2s linear 0s infinite;
}

/* secret trick */
@keyframes glitch-animation {
  0% {
    opacity: 1;
    transform: translateZ(0);
    clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
  }

  2% {
    clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
    transform: translate(-5px);
  }

  6% {
    clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
    transform: translate(5px);
  }

  8% {
    clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
    transform: translate(-5px);
  }

  9% {
    clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
    transform: translate(0);
  }

  10% {
    clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);
    transform: translate3d(5px, 0, 0);
  }

  13% {
    clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);
    transform: translateZ(0);
  }

  13.1% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    transform: translate3d(5px, 0, 0);
  }

  15% {
    clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);
    transform: translate3d(5px, 0, 0);
  }

  20% {
    clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);
    transform: translate3d(-5px, 0, 0);
  }

  20.1% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    transform: translate3d(5px, 0, 0);
  }

  25% {
    clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);
    transform: translate3d(5px, 0, 0);
  }

  30% {
    clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);
    transform: translate3d(-5px, 0, 0);
  }

  30.1% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  }

  35% {
    clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
    transform: translate(-5px);
  }

  40% {
    clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
    transform: translate(5px);
  }

  45% {
    clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
    transform: translate(-5px);
  }

  50% {
    clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
    transform: translate(0);
  }

  55% {
    clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);
    transform: translate3d(5px, 0, 0);
  }

  60% {
    clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);
    transform: translateZ(0);
    opacity: 1;
  }

  60.1% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    opacity: 1;
  }

  to {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    opacity: 1;
  }
}

.fade-enter-active, .fade-leave-active {
    -webkit-transition: opacity 0.5s;
    transition: opacity 0.5s;
  }
  
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  
  .slide-enter-active, .slide-leave-active {
    -webkit-transition: -webkit-transform 0.5s;
    transition: -webkit-transform 0.5s;
    transition: transform 0.5s;
    transition: transform 0.5s, -webkit-transform 0.5s;
  }
  
  .slide-enter, .slide-leave-to {
    -webkit-transform: translateY(-50%) translateX(100vw);
            transform: translateY(-50%) translateX(100vw);
  }
  
  .icon-bar {
    align-items: center;
  display: flex;
  grid-area: header;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 1rem 0 0.5rem 0;
  }
  
  .icon-bar a {
    float: left;
    width: 20%;
    text-align: center;
    padding: 12px 0;
    color: inherit;
    text-decoration: none;
    font-size: 26px;
  }
  
  
  
  .active {
    border: 2px ridge var( --colors-primary--300);
    background-color: var(--colors-primary--700 0.5);
    cursor: pointer;
    position: relative;
    font-family: Tomorrow, sans-serif;
    font-size: .85rem;
    text-transform: uppercase;
    color: var(--black-color);
    clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
    
  }
  
  .footer {
    color: var(--colors-primary--200);
    text-align: center;
  }
  
  .form {
    width: 30%;
    height: 100%;
    padding: 30px;
    border: 2px var(
        --colors-primary--600);
    margin: 10% 35%;
  }
  
  .form .text {
      
   font-family: Tomorrow, sans-serif;
    width: 100%;
    margin-bottom: 10px;
  }
  
 
  
  .menu button {
    width: 25%;
    padding: 15px;
    color: black;
    font-size: 20px;
  }
  
  .accueil {
    height: 60vh;
    width: 50%;
    margin: 5% 25%;
    text-align: center;
  }
  
  .texte {
    width: 40%;
    margin: 5% 30%;
    text-align: center;
  }
  
  .formtwo {
    width: 30%;
    height: 100%;
    padding: 30px;
    border: 2px var(
        --colors-primary--600);
    margin: 10% 35%;
  }
  
  .formtwo input {
    font-family: Tomorrow, sans-serif;
    width: 100%;
    margin-bottom: 10px;
  }


  a{
    width: 230px;
    height: 50px; 
    border: 0;
    outline: none;
    background-color: var(--colors-primary--700 0.5);
    cursor: pointer;
    position: relative;
    font-family: Tomorrow, sans-serif;
    font-size: .85rem;
    text-transform: uppercase;
    color: var(--black-color);
    clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
  }


  
.far{
    width: 230px;
    height: 60px; 
    border: 0;
    outline: none;
    background-color:transparent;
    cursor: pointer;
    position: relative;
    font-family: Tomorrow, sans-serif;
    font-size: .85rem;
    text-transform: uppercase;
    color: var(--black-color);
    clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
  }
  
  .far__content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background-color: transparent;
    clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
  }
  
  .far--secondary {
    background-color: var(--white-color);
  }
  
  .far--secondary .btn__content {
    background-color: var(--red-color);
    color: var(--white-color);
  }
  
  .far__label {
    font-size: .40rem;
    position: absolute;
    bottom: -1px;
    right: 8%;
    padding: 0 5px;
    background-color: var(--colors-primary--700);
    z-index: 3;
    border-left: 1px solid var(--blue-color);
  }
  
  .far--secondary .far__label {
    background-color: var(--white-color);
    color: var(--black-color);
  }
  
  .far__glitch {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var( --colors-secondary--500);
    border: 2px var(--colors-primary--700) ridge;
    filter: drop-shadow(-2px 3px #67e3f3) drop-shadow(-1px -3px #02d8f3) drop-shadow(2px 1px #02d8f3);
  }
  
  .far--secondary .far__glitch {
    background-color: var(--red-color);
    border: 0 2px 2px 2px var(--blue-color);
  }
  
  .icon-bar a:hover.far__glitch,
  .icon-bar a:hover.far__content::after,
  .icon-bar a:hover .far__glitch,
  .icon-bar a:hover.far__content::after {
    display: block;
    animation: glitch-animation 2s linear 0s infinite;
  }


  .shadowfilter {
    -webkit-filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.5));
     filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.5));
}


.blink {
  animation: blinker 4s linear infinite;
  color: #ff798f;
}
@keyframes blinker {  
  50% { opacity: 0; }
}
.blink-one {
   animation: blinker-one 10s linear infinite;
}
@keyframes blinker-one {  
   0% { opacity: 0; }
}
.blink-two {
   animation: blinker-two 11s linear infinite;
}
@keyframes blinker-two {  
   100% { opacity: 0; }
}


h2 {
  
  font-family: Tomorrow, sans-serif;
  font-weight: lighter;
  font-size: 1.25em;
  letter-spacing: 2px;
  padding-left: 5px;
  color:  var(--yellow-color);
  margin-top: 1%;
}

img {
  width: 100%;
  height: auto;
}

p {
  
  font-family: Tomorrow, sans-serif;
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
  height: 118px;
  width: 328px;
  margin: 10px;
}

.art-style-name {
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


.menuBut{
  width: 230px;
  height: 50px; 
  border: 2px ridge var( --colors-secondary--500);
  background-color: var(--colors-primary--700 0.5);
  cursor: pointer;
  position: relative;
  font-family: Tomorrow, sans-serif;
  font-size: .85rem;
  text-transform: uppercase;
  color: var(--black-color);
  clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
  
}


.char{
  height:900px;
  width: 500px;
  padding-left: 200px;
}

.pm{
  height: 600px;
  width: 400px;

  float: right;    
   margin: 0 0 0 15px;
  }


  #hp  {
    float: right;    
     margin: 0 0 0 15px;
    }

</style>