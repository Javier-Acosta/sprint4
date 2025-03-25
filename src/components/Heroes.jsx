import React, { useEffect, useState} from 'react';



const [quote, setQuote  ] = useState(null)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)


const fetchData =async ()=>{
    setloading(true)
    setError(null)
    try {
        const {data}=await axion.get('https://api.breakingbadquotes.xyz/v1/quotes')
        setQuote(data[0])
    } catch (err) {
        setError(err)

        
    }finally{
        setLoading (false)
    }
}

useEffect(()=>{
    fetchData()
},[])


const Heroes = () => {
  return (
    <div className='p-6 bg-gray-900 text-white text-center'>
    <h1 className='text-3xl font-bold'>Ejemplo de Breaking bad</h1>
    <p className='mt-4 text-xl text-yellow-100'> Loading..</p>

   </div>
  );
}

export default Heroes;
