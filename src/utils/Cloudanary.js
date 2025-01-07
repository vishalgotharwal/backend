import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECREAT // Click 'View API Keys' above to copy your API secret
    });


    const uploadonCloudanary  = async (localFilePath) =>{
         
try {
      if(!localFilePath) return null 

      //upload the file on clodanary 
   const response =  await cloudinary.uploader.upload(localFilePath , {
      resource_type  : "auto"
})
   //file has been uploded successfully 
console.log("file is uploaded on clodanary " , response.url) ; 
return response

}
catch(error ) {
        fs.unlinkSync(localFilePath) // remove the locallysaved temporary file as the pload operation got failed 

        return null ; 
} 

    }

export {uploadonCloudanary}



    
