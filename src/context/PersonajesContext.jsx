import React, { createContext, useContext, useState } from 'react'
import { fetchData } from '../services/personajesAPI'

const PersonajesContext= createContext()

export  const PersonajeProvider = ({children}) => {
const [personajeData, setPersonajeData] = useState(null)  
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)


const getPersonajes=async ()=>{
    setLoading(true)
    setError(null)
    try {
        const data =await fetchData ()
        console.log('desde context',data.data.results);
        setPersonajeData(data)
        
    } catch (error) {
        
        setError('No se encontro el personaje')
        setPersonajeData(null)
        
    }finally {
        setLoading(false)
    }
}

return(
    <PersonajesContext.Provider value={{personajeData, loading,error,getPersonajes}}>
    {children}
    </PersonajesContext.Provider>
)

}
export const usePersonajes =() => useContext(PersonajesContext)
