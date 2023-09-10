//jshint esversion:6
 const express = require('express');
 const bodyParser = require('body-parser');
 const mongoose = require('mongoose');
const{MongoClient,serverApiVersion} = require('mongodb');
 const app = express();



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("PBL-Project"));


const uri ="mongodb+srv://darshan-badadhe:Darshan123@cluster0.r2txdb6.mongodb.net/?retryWrites=true&w=majority";

//connecting mongodb server
// const uri="mongodb+srv://abhimahajan:abhi@abhi.o2dflsk.mongodb.net/?retryWrites=true&w=majority";


async function connect(){

    try{
        await mongoose.connect(uri);
        console.log("Successful conection to mongodb");

    }catch(error){
        console.log(error);
    }
}

connect();
//connected the server

//schema
const projectSchema = new mongoose.Schema({
  Email: String,
  Password: String
});

app.get('/',function(req,res){
  res.sendFile(__dirname + "/index.html");
})

app.get('/',function(req,res){
  res.sendFile(__dirname + "/login.html");
})



//collection
const User = mongoose.model("User",projectSchema);

//document
const user = new User({
  Email:"darshanbadadhe72@gmail.com",
  Password:"Darshan1234"
});
user.save();

app.post("/")

app.listen(3000,()=>{
  console.log("server started");
})
