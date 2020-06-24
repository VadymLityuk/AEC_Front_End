import React from 'react';





export class Rebrandly extends React.Component{

const apiKey = "0fb06289d64d420db830a8cd968eb6aa"; 

 

const getData = async () => { 

   try{ 

      const response = await fetch('https://api.rebrandly.com/v1/links', { 

         method:'POST', 

         headers: {'apikey': apiKey  }, 

         body:JSON.stringify({id: 200}) 

       }); 

      if(response.ok){ 

         const jsonResponse = await response.json(); 

         return jsonResponse; 

      } 

      throw new Error('Request failed!'); 

   } 

   catch(error){ 

      console.log(error); 

   } 

} 
}