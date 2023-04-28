const express = require('express')
const app = express()
const bodyParser = require('body-parser')// used to parse the body
const UrlencodedParser = bodyParser.urlencoded({extended:false})

const middleware = (req,res,next)=>{
   console.log("jdsghjn")
   // res.status(400).json({message:"gjasmdcxn"})
   next()
}

app.get('/',middleware,(req,res)=>{
   res.json({success:true})
    
})

app.get('/user',UrlencodedParser,(req,res)=>{
   // res.send("User created")
   res.redirect("https://www.google.com")
})

app.listen(8000)