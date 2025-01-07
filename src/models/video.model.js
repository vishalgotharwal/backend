import mongoose, { Schema } from "mongoose" 
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const VideoSchema = new mongoose.Schema(
    
    {
       
         videoFile : {
             type : String , //cloudinary url 
             required : true , 
         }, 
         thumbnail : {
             type : String ,   //cloudinary url 
             required : true , 
         }, 
         owner : {
            type : Schema.Types.ObjectId , 
            ref : "User" , 
            
        }, 
        title : {
            type : String , 
            required : true , 

        },
        description : {
            type : String , 
            required : true , 
            
        },

        duration  : {
            type : Number , //cloudinary because it is always give the duration always 
            required : true , 
            
        } , 
        views : {
            type : Number , 
            default : 0 , 
          
            
        }, 
        isPublished : {
             type : Boolean , 
             default  : true ,
        }



    }
    
    
    , {timestamps : true} ) 

    VideoSchema.plugin(mongooseAggregatePaginate)


export const Video = mongoose.model("Video" , VideoSchema)