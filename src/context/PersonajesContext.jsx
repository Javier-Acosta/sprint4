import React, { createContext, useContext, useState } from 'react'
import { fetchData } from '../components/services/personajesAPI'

const PersonajesContext= createContext()

export  const PersonajeProvider = ({children}) => {
const [personajeData, setPersonajeData] = useState(null)  
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)


const getPersonajes=async (personajes)=>{
    setLoading(true)
    setError(null)
    try {
        const data =await fetchData (personajes)
        setPersonajeData(data)
    } catch (error) {
        console.log(error);
        setError(error)
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
