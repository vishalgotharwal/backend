//second 

//middleware 

const asyncHandler = (requestHandler) =>{
      return  (req, res , next) =>{
          Promise.resolve(requestHandler(req , res , next )).catch(next)
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