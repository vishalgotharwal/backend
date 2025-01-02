//require modules
require('dotenv').config()
const express = require('express')
//second option for the first line will be
// import express from "express"

const app = express()

const port = 4000 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter' , (req , res) =>{
    res.send("vishalgotharwaltwitter/877") ; 
})

// app.listen(port, () => { 
//   console.log(`Example app listening on port ${port}`)
// })

app.get('/login' , (req, res) =>{
    res.send('<h1>please login at chai aur code</h1>')
})
app.listen(process.env.PORT , () =>{
    console.log(`Example app listening on port ${port}`)
})