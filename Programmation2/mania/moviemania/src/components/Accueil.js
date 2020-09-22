import React, { useState } from 'react'
import { Row, Col, Container,Image,Button } from 'react-bootstrap'
import './style/accueil.scss'
import { useSpring, animated,config } from 'react-spring'





const picha= {
    bill: require("../components/img/bill.jpg"),
    witcher:require("../components/img/witcher.jpg"),
    boys : require("../components/img/boys2.jpeg"),
    bted : require("../components/img/billtt.jpg"),
    nm : require("../components/img/mutant.jpg"),
    tenet : require("../components/img/ten.jpg"),
    mul : require("../components/img/mul.jpg"),
    sp : require("../components/img/sp.jpg")
  
  };


export default function Accueil() {

    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 1) / 15, 1.10]
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (

 
       
  <div className="container">
<div id="mygrid" className="grid-padding">
    <div className="row  ">
        <div className="  col-sm-4 ">

        <div className=" row">
  
            <Image className="fitimage " fluid src={picha.tenet} />
            
            </div>
            
           
            <div className=" row">
            <Image className="fitimage " fluid src={picha.witcher} />
            
            </div>
            <div className="row">
  

            </div>
        
            <div className="row">
            <Image className=" fitimage" fluid src={picha.sp} />
            </div>
           
        </div>
        <div className="col-sm-4 ">
           
        <animated.div 
      class="card" 
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    />
    
    
            <div className="row">
            <Image className=" fitimage" fluid src={picha.witcher} />
            </div>
           
            <div className="row">
            <Image className=" fitimage" fluid src={picha.bted} />
            </div>
            <div className="row">
            <Image className=" fitimage" fluid src={picha.mul} />
            </div>
           
        </div>
        <div className="col-sm-4 ">
    
      
    
            <div className="row">
            <Image className="fitimage " fluid src={picha.boys} />
            </div>
            <div className="row">
            <Image className=" fitimage" fluid src={picha.nm} />
            </div>
            <div className="row">
            <Image className=" fitimage" fluid src={picha.witcher} />
            </div>
            <div className="row">
            <Image className=" fitimage" fluid src={picha.witcher} />
            </div>
            <div className="row">
            <Image className=" fitimage" fluid src={picha.witcher} />
            </div>
        </div>

    </div>

</div>


  </div>

      
    


    );
    
}



