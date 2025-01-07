//second 

//middleware 

const asyncHandler = (requestHandler) =>{
       (req, res , next) =>{
          Promise.resolve(requestHandler(req , res , next )).catch((error) => next(err))
       }
} 



export {asyncHandler}


//wrapper function for reuseing this 
//first method 
// const asyncHandler = async(fn) =>(req , res , next ) => {
       
//        try{
//               await fn(req , res  ,next )
//        }
//        catch(error){
//         res.status(err.code || 500).json({
//             success : false ,
//             message : err.message 
//         })
//          console.log(error)
//        }

// }