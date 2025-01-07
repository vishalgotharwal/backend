import express from "express" 
import cors from "cors" 
import cookieParser from "cookie-parser"



const app = express() 



app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true 
}))
//use method are use for the middleware 


app.use(express.json({limit : "16kb"}))
//for json data 

app.use(express.urlencoded({extended : true , limit : "16kb"}))
//for url encoding 

app.use(express.static("public"))
//for the assests that are in the public folder 



//cookieparser // is a missleware 




app.use(cookieParser())

console.log("in app.js ")
//routes import 
import userRouter from "./routes/user.route.js"


//routes declaration 
app.use("/api/v1/users" , userRouter)
//https://localhost:8000/users/register
export {app}