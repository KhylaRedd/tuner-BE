const cors = require("cors");
const express = require("express");
const songController = require('./controllers/songController');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/playlist',songController);

app.get('/',(req,res)=>{
    res.send("Welcome to Jam Master")
});

app.get("*", (req, res) => {
    res.status(404).send("page not found");
});
// app.get('/playlist', (req,res)=>{
//     res.status(404).send("page not found")
// })

  module.exports=app;