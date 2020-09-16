import React from "react";

function DemoJSONLocal() {
    test();
  return (
    <h1>Spider Verse Characters</h1>
  );
}

function test(){ 
  let json = require('../localDB/db.json');

    console.log("AFFICHER"); 
    json.spiders.forEach(readSpider);

    function readSpider(spider) {
      console.log(spider);
    }

 
    json.spiders.push(
      {
      "id": 3,
      "name": "Spider-Ham",
      "picture": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ea196117-0b64-49b7-b13f-79f43cf77e53/dcv8a9s-4d5a62d5-fc5a-4152-b7d6-23b6105a092e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZWExOTYxMTctMGI2NC00OWI3LWIxM2YtNzlmNDNjZjc3ZTUzXC9kY3Y4YTlzLTRkNWE2MmQ1LWZjNWEtNDE1Mi1iN2Q2LTIzYjYxMDVhMDkyZS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.j8L1snd0UcRyVL58VGiN3NqtIegZdx0Oh8QtY7gTFEs",
      "abilities": [
        {
          "name": "NoHam"
        },
        {
          "name": "webcross"
        }
      ]
    });
    
    console.log("ADDING"); 
    json.spiders.forEach(readSpider);


    for (var i = 0; i < json.spiders.length; i++) {
      if (json.spiders[i].id === 3) {
        json.spiders[i].name = "Mister Piggy";
        break;
      }
    }
    console.log("MODIFY"); 
    json.spiders.forEach(readSpider);


    for (var i = 0; i < json.spiders.length; i++) {
      if (json.spiders[i].id === 3) {
        //json.spiders.splice(i);
        break;
      }
    }
    console.log("Delete"); 
    json.spiders.forEach(readSpider);

    //Le problème avec cette approche est que c'est non persistant. Les sécurités des navigateurs ne permettent pas d'écrire dans un fichier côté client.
    
}



export default DemoJSONLocal;