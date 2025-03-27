import axios from "axios"


export const fetchData =async ()=>{
  
    setLoading(true)
    setError(null)
    try {
        const {data}=await axios.get('https://rickandmortyapi.com/api/character/')
        console.log(data);
        setQuote(data[0])
    } catch (err) {
        setError(err)

        
    }finally{
        setLoading (false)
    }
    useEffect(()=>{
        fetchData()
    },[])
}
