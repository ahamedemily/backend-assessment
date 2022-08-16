const express = require("express");
//var bodyParser = require("body-parser");
const cors = require("cors"); 

const app = express();


app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);

const {getFortune} = require('./controller')

app.get("/api/fortune", getFortune);

const {getAngelNumber } = require('./controller')

app.get("/api/angelNumber", getAngelNumber);

const {postMotivation} = require('./controller')

app.post("/api/goal/motivation", postMotivation);



// app.post('/',(req,res)=>{
//     const{parcel} = req.body
//     console.log(parcel)
//     if (!parcel)
//     {
//         return res.status(400).send({status: 'failed'})
//     } res.status(200).send({status:'recieved'})
// })

// var urlencodedParser = bodyParser.urlencoded({ extended: false })
    
//     app.get('/contact' , function(req,res) {
//         res.render('contact' , {qs: req.body});
//     });
    
//     app.post('/contact' , urlencodedParser, function(req,res) {
//         console.log(req.body);
//         res.render('contact-success' , {qs: req.query});
//     });
app.listen(4000, () => console.log("Server running on 4000"));