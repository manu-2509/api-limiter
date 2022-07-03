const express = require('express');

const rateLimit = require('express-rate-limit')

const app = express()

const limiter=rateLimit({
    windowMs:1*60*1000,
    max:10,
    message:"Too many requests, please try again after 15 minutes"
})

app.use(limiter)

app.get("/users",(req,res)=>{
    return res.send("successful in making the request")
})

app.listen(4000,()=>{
    console.log("listening to port 4000");
})