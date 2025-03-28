import axios from "axios"


export const fetchData =async ()=>{
  
    
    
        const url=`https://api.breakingbadquotes.xyz/v1/quotes`
        const response=await axios.get(url)
        // console.log('API',response);
        return response
       
}
