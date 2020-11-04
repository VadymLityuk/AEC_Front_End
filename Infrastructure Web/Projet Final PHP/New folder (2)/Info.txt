import React, {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {API} from "../constante";
import Image from "react-bootstrap/Image";
import {Link} from "react-router-dom";

function FilmInfo(props){
    const [donneesRecues , setDonneesRecues] = useState({title: '', picture:"", movigenre:"" });
    const [moviesID] = useState(props.location.search.substring(4,props.location.search.length));
  
    useEffect(() => {
      getFilmInfos();
    },[]);
  
    
    async function getFilmInfos() {
      try {
        
        const response = await fetch(API + "/" + moviesID);
        const reponseDeApi = await response.json();
        setDonneesRecues(reponseDeApi);
        console.log(reponseDeApi);
       
        if (!response.ok) {
          throw Error(response.statusText);
        }
      } catch (error) {
        console.log(error);
      }
    }
    
  
  
      return (
        <>
          <Col xl="4" lg="6" md="6" sm="12" className="  my-4">
                 
                 <div id="myfilms" classname="grid-pad" >
                 <div className='text-center'>
                             
                             
                             <div class="container categories ">
                             <Link to={"/FilmInfo"}> <h1>{donneesRecues.title}</h1></Link>
                             <h5>{donneesRecues.moviegenre}</h5>
                          
         
     
         
         

</div>
<hr></hr>
                         </div>
                <div className="card-custom">

                         <Image className="filmimage"  src={donneesRecues.picture}  className='img-fluid ' />

                         </div>
               
                     </div>
                     
                         
                     
                    
             
             </Col>
        </>
      );
    }
  
    export default FilmInfo;