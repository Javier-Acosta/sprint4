import React from 'react'
import { usePersonajes } from '../context/personajesContext'

const PersonajeCard = () => {
  const {personajeData, loading,error}=usePersonajes
  if (loading)  return <p className='text-gray-700'>Loading...  </p>
  if(error) return <p className='text-red-500'>{error}  </p>
  if(!personajeData) return null
  
const {author, species, image, status}=personajeData
console.log('Card',personajeData);
    
  return (
    <div >
      <h2 className='text-2xl font-bold'>{data.author}</h2>
      <p className='text-2xl font-bold'>{species}</p>
      <p className='text-2xl font-bold'>{status}</p>
      PersonajeCard</div>
  )
}

export default PersonajeCard