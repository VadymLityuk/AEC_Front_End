import React, { useState, useEffect } from 'react'
import './style/accueil.scss'
import Aos from "aos";
import "aos/dist/aos.css"



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
    useEffect(() => {
    
        Aos.init({duration: 2000});

    },[])

  

  
       
    
    return (

 
      
  <section>
      
      
  <div class="container-fluid pageContent">
   <h2  data-aos="zoom-in" className="text-center">what's hot</h2>

  </div>
   <div  class="poster row pt-5">
   <section  class="offset-2 col-sm-7  col-lg-7  posts">
       <article data-aos="flip-left" class="post mb-3">
           <div class="insidePost mx-3">
               <div class="featureImg">
               <iframe className="video" width="100%" height="220" src="https://www.youtube.com/embed/1gPGeAYo3yU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
       <article data-aos="flip-left" class="post mb-3">
                <div class="insidePost mx-3">
                    <div class="featureImg">
                    <iframe className="video" width="100%" height="240" src="https://www.youtube.com/embed/NLOp_6uPccQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
            <article  data-aos="fade-up" class="post mb-3">
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
            <article data-aos="fade-up" class="post mb-3">
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
