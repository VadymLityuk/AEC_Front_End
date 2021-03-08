const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const bodyParser = require("body-parser")
const messages =require("./src/db/messages")

app.use(cors());
app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.send("Test axios ");
});

app.post("/messages", (req, res) => {
    console.log(req.body);
    messages

.create(req.body)
.then((message)=>{
   res,json(message);
})
.catch((error)=>{
res.status(500);
res.json(error);

});
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

//http://localhost:${port}
//http://localhost:${infosemployee}
