import React from "react";

function DemoTLOU() {
    test();
  return (
    <h1>The Last Of Us Part 2 Characters</h1>
  );
}

function test(){
  //OUVERTURE DE LA BD  
  let json = require('../localDB/db.json');

    console.log("AFFICHER"); 
    //READ, on pourrait aussi prendre un for traditionnel comme en bas
    json.chars.forEach(readChars);

    function readChars(char) {
      console.log(char);
    }

    
    //ADD
    json.chars.push(
      {
      "id": 3,
      "name": "Spidey",
      "picture": "https://www.uokpl.rs/fpng/f/506-5060061_into-the-spider.png",
      "abilities": [
        {
          "name": "Peter Parker"
        },
        {
          "name": "WEBBING"
        }
      ]
    });
    
    console.log("ADD"); 
    json.chars.forEach(readChars);


    //MODIFY
    for (var i = 0; i < json.chars.length; i++) {
      if (json.chars[i].id === 3) {
        json.chars[i].name = "Peter Parker";
        break;
      }
    }
    console.log("MODIFY"); 
    json.chars.forEach(readChars);

    //DELETE
    for (var i = 0; i < json.chars.length; i++) {
      if (json.chars[i].id === 3) {
        break;
      }
    }
    console.log("DELETE"); 
    json.chars.forEach(readChars);

    //Le problème avec cette approche est que c'est non persistant. Les sécurités des navigateurs ne permettent pas d'écrire dans un fichier côté client.
    
}



export default DemoTLOU;