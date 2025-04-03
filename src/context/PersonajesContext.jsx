import React, { createContext, useContext, useState } from 'react'
import { fetchData } from '../services/personajesAPI'
import { ToastContainer, toast } from 'react-toastify';

const PersonajesContext = createContext()

export const PersonajeProvider = ({ children }) => {
    const [personajeData, setPersonajeData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    const getPersonajes = async (name) => {
        toast.info('Buscando Personajes...')
        setLoading(true)
        setError(null)
        try {
            const data = await fetchData(name)
            console.log('desde context', data.data.results);
            setPersonajeData(data)
            toast.success(' Data featched successfully ')
        } catch (error) {
            toast.error(`No se encontró Personajes ${error}`)
            setPersonajeData(null)
        } finally {
            setLoading(false)
        }
    }
 


    return (
        <PersonajesContext.Provider value={{ personajeData, loading, error, getPersonajes }}>
            {children}
        </PersonajesContext.Provider>
    )

}
export const usePersonajes = () => useContext(PersonajesContext)
