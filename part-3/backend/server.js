// const express = require('express') 

import express from 'express'
const app = express() ; 



// app.get('/' , (req , res) =>{
//      res.send('server is ready') ; 
// });

//get a list of 5 jokes 

app.get('/api/jokes' , (req , res) =>{
    // res.send(data.jokes.slice(0 , 5)) ; 
    const jokes = [
        {
            id : 1 , 
            title : 'a joke' , 
            content : 'this is a joke'
        },
        {
            id :  2  , 
            title : 'b joke' , 
            content : 'this is a joke'
        },
        {
            id :  3 , 
            title : 'c joke' , 
            content : 'this is a joke'
        },
        {
            id :  4  , 
            title : 'd joke' , 
            content : 'this is a joke'
        },
        {
            id : 5 , 
            title : 'e joke' , 
            content : 'this is a joke'
        },

    ]

    res.send(jokes)


})

//response

const port = process.env.PORT || 3000 ; 

app.listen(port, () =>{
    console.log(`server at http://localhost:${port}`)
}) ; 



