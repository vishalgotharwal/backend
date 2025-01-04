// require('dotenv').config({path : '/.env'})

import dotenv from "dotenv"


import connectDB from "./db/index.js"
dotenv.config({
    path : './env'
})

//second approach 






connectDB()

.then(() =>{
app.on("error" ,( error) =>{
     console.log("ERROR :: " , error) ; 
     throw error ; 
})

     app.listen(process.env.PORT || 8000 , () =>{
        console.log(`Server is  Running at PORT : ${process.env.PORT}`) 
     } )
})
.catch((error) =>{
     console.log("MONGODB connection failed in index.js ", error)
})









/*

//basic approach of connecting db 
import express from 'express'

const app = express() ; 



//efi  for immediatedly function execution 

(async () => {
    try {
         await mongoose.connect(` ${process.env.MONGODB_URI}/${DB_NAME}`)
         app.on("error" , (error) =>{
             console.log("ERROR : " , error);
             throw error
         })

         app.listen(process.env.PORT, () =>{
             console.log(`app is listen on  port ${process.env.PORT}`)
         })
    }
    catch(error){
         console.error("ERROR: " , error)
         throw err 
    }
})()


*/