//for the api errors


class ApiError extends Error{
      
    constructor(
        statuscode , 
        message  = "Something went wrong ", 
        errors = [] , 
        stack = ""
    ) {
 super(message)
 this.statuscode = statuscode 
 this.data = null 
 this.message = message 
  this.success = false 
   this.errors =  errors
    
 
    if(this.stack){
         this.stack = stack 
          
    }
    else {
         Error.captureStackTrace(this , this.constructor)
    }
  
    

    }
     
}

export {ApiError}