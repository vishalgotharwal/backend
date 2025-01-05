import mongoose, { Schema } from "mongoose" 
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt" 






const Userschema = new mongoose.Schema({

    username : {
         type :String , 
         required : true , 
          unique : true , 
          lowercase  :true,
          trim : true , 
          index : true ,  
    },
    email : {
        type :String , 
        required : true , 
         unique : true , 
         lowercase  :true,
         trim : true , 
   },
   Fullname : {
    type :String , 
    required : true , 
     trim : true , 
     index : true ,  
},
avatar : {
    type :String ,  // cloudinary url 
    required : true , 
    
},
coverImage  : {
    type :String , //cloudinary url 
  

},
    watchHistory : [

        {
             type : Schema.Types.ObjectId , 
             ref : "Videos"
        }
        
    ],

    Password :{
         type : String , 
         required : [true , "Password is required"]    //bcrypt library use for the password 
    },

    refreshToken : {   //jsonweb tokens are use for generating the token 
         type : String , 
    }



} , {timestamps : true })


Userschema.pre("save" , async function(next) {
         if(this.isModified ("password") ){
             this.Password = bcrypt.hash(this.password , 10)
             next()
             
         }
         else return next()

} )


Userschema.methods.isPasswordCorrect = async function(password){
  return  await  bcrypt.compare(password , this.password)
}

Userschema.methods.generateAccessToken = function() 
{
    return  jwt.sign({
         _id : this._id , 
         email : this.email ,
         username : this.username , 
         fullname : this.Fullname
    } , 
    process.env.ACCESS_TOKEN_SECRET , {
          expiresIn : process.env.ACCESS_TOKEN_EXPIRY
    }

)
}

Userschema.methods.generateRefreshToken = function() {

    return  jwt.sign({
        _id : this._id , 
        email : this.email ,
        username : this.username , 
        fullname : this.Fullname
   } , 
   process.env.REFRESH_TOKEN_SECRET , {
         expiresIn : process.env.REFRESH_TOKEN_EXPIRY
    })

}
export const User = mongoose.model("User" , Userschema)