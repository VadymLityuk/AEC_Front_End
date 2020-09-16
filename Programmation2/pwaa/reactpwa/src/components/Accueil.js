import React, { useState, useEffect } from 'react'
import '../components/accueil.scss'

import { Link } from "react-router-dom";

import { Row, Col, Container,Image,Button } from 'react-bootstrap'
const picha= {
    bill: require("../components/img/bill.jpg"),
    witcher:require("../components/img/witcher.jpg"),
    boys : require("../components/img/boys2.jpeg"),
    bted : require("../components/img/billtt.jpg"),
    nm : require("../components/img/mutant.jpg"),
    tenet : require("../components/img/ten.jpg"),
    mul : require("../components/img/mul.jpg")
  };

export default function Accueil() {

   
  
       
    
    return (

 
      
  <section>
      
      
  <div class="container-fluid pageContent">
  
      <div class="row filtres pt-5">
          <div class="col-12">
            
          </div>
      </div>
  </div>
  <div class="container-fluid pageContent">
  
  <div class="row filtres pt-3">
      <div class="col-12">
          <ul>
              <li class="boutonActif">Accueil</li>
              <li id="comedy"><Link to={"/Onlinecinema"}>Online Cinema</Link></li>
              <li id="comedy"><Link to={"/Films"}>Ajouter un Film</Link></li>
              <li>Horreurs</li>
              <li>TvShoow</li>
              <li>Noname</li>
              <li>Noname</li>
        
          </ul>   
      </div>
  </div>
</div>
<section class=" col-3 posters aside">
<div  class="latest-posts">
          
                       <h5>Aujourd'hui au cinéma</h5>
                       <div id="post1" class="row">
                           <div class="col4 text-center" >
                           <Image fluid src={picha.tenet}  />
                           </div>
                           <div class="col8">
                               <p>SCIENSE-FICTION</p>
                               <hr></hr>
                               <span>TENET</span>
                               
                           </div>
                           <div class="col12">
                               
                           </div>
                           
                       </div>
                       <div id="post2" class="row">
                           <div class="col4 text-center" >
                           <Image fluid src={picha.nm}  />
                           
                           </div>
                           <div class="col8">
                               <p>HORREURS</p>
                               <hr></hr>
                                <span>The New Mutants</span>
                           </div>
                           <div class="col12">
                               <hr></hr>
                           </div>
                       </div>

                       <div id="post3" class="row">
                           <div class="col4 text-center" >
                           <Image fluid src={picha.bted}  />
                           </div>
                           <div class="col8">
                               <p>COMEDIE,FANTASIE</p>
                               <hr></hr>
                                   <span>Bill and Tedd Face The Music</span>
                           </div>
                           <div class="col12">
                               <hr></hr>
                           </div>
                       </div>

                       <div id="post4" class="row">
                           <div class="col4 text-center">
                           <Image fluid src={picha.mul}  />
                           </div>
                           <div class="col8">
                               <p>DISNEY</p>
                               <hr></hr>
                                   <span>MULAN</span>
                           </div>

                       </div>
                   </div>
               <div class="col-12">
                    <div class="advertisement d-flex flex-column justify-content-center">
                        

                        
                        <p><span>Advertisement</span> Custom Vertical Height</p>
                    </div>
               </div>
            </section>

   <div  class="poster row pt-5">
   <section  class="col-10 offset-2 col-lg-9  posts">
       <article class="post mb-3">
           <div class="insidePost mx-3">
               <div class="featureImg">
               <Image fluid src={picha.bill}  />
               </div>
               <div class="postContent">
                   <div class="postPreview">
                       <p class="contentMeta">

                       </p>
                       <h2> Grand Retour: Bill et Ted</h2>
                       <p class="resume">Keanu Reeves et Alex Winters sauvent l'univers avec de la musique.Un nouveau trailer pour la comédie "Bill and Ted" a été publié. 30 ans plus tard, les héros de Keanu Reeves et Alex Winters sont de retour ensemble à l'écran et repartent pour un autre voyage dans le temps pour tenter de trouver une chanson qui unira le monde et sauvera la réalité</p>
                       <hr />
                   </div>
                   <div class="postMeta">
                       <a class="comment"><i class="far fa-comment"></i><span class="nbCommentaires">♥</span></a>
                       <ul>
                           <li><a href="#comedy">Comedy</a></li>
                           
                       </ul>
                      
                     
                   </div>
               </div>
           </div>
          
       </article>
       <article class="post mb-3">
                <div class="insidePost mx-3">
                    <div class="featureImg">
                    <Image fluid src={picha.witcher}  />
                    </div>
                    <div class="postContent">
                        <div class="postPreview">
                            <p class="contentMeta">

                            </p>
                            <h2>"The Witcher": l'émission Netflix le plus populaires selon la Variety</h2>
                            <p class="resume">Variety a publié une liste des séries Netflix les plus regardées. Parmi les leaders figurent des succès comme The Witcher et The Paper House, l'émission de télé-réalité Trial by Temptation et le documentaire The King of the Tigers.</p>
                            <hr />
                        </div>
                        <div class="postMeta">
                            <a class="comment"><i class="far fa-comment"></i><span class="nbCommentaires">♥</span></a>
                            <ul>
                                <li><a href="#">Fantasy</a></li>
                            
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
            <article  class="post mb-3">
                <div class="insidePost mx-3">
                    <div class="featureImg">
                    <Image fluid src={picha.witcher}  />
                    </div>
                    <div class="postContent">
                        <div class="postPreview">
                            <p class="contentMeta">

                            </p>
                            <h2>"The Witcher": l'émission Netflix le plus populaires selon la Variety</h2>
                            <p class="resume">Variety a publié une liste des séries Netflix les plus regardées. Parmi les leaders figurent des succès comme The Witcher et The Paper House, l'émission de télé-réalité Trial by Temptation et le documentaire The King of the Tigers.</p>
                            <hr />
                        </div>
                        <div class="postMeta">
                            <a class="comment"><i class="far fa-comment"></i><span class="nbCommentaires">♥</span></a>
                            <ul>
                                <li><a href="#">Fantasy</a></li>
                            
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
            <article  class="post mb-3">
                <div class="insidePost mx-3">
                    <div class="featureImg">
                    <Image fluid src={picha.boys}  />
                    </div>
                    <div class="postContent">
                        <div class="postPreview">
                            <p class="contentMeta">

                            </p>
                            <h2>"The Witcher": l'émission Netflix le plus populaires selon la Variety</h2>
                            <p class="resume">Variety a publié une liste des séries Netflix les plus regardées. Parmi les leaders figurent des succès comme The Witcher et The Paper House, l'émission de télé-réalité Trial by Temptation et le documentaire The King of the Tigers.</p>
                            <hr />
                        </div>
                        <div class="postMeta">
                            <a class="comment"><i class="far fa-comment"></i><span class="nbCommentaires">♥</span></a>
                            <ul>
                                <li><a href="#">Fantasy</a></li>
                            
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
</section>
</div>
       </section>
      
       
    

    );
    
}
