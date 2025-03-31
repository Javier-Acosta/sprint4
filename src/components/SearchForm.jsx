import React, { useState } from 'react'
import { usePersonajes } from '../context/PersonajesContext'
import { ToastContainer, toast } from 'react-toastify';

const SearchForm = () => {
const [personaje, setPersonaje] = useState('')
const { getPersonajes } = usePersonajes()

 
 

const handleSubmit = (e) => {
    e.preventDefault()
    if (personaje.trim() === '') return
    
    getPersonajes(personaje)
    
  }

return (
    <form onSubmit={handleSubmit} className='flex gap-2 mb-6'>
      <input type="text"
        value={personaje}
        onChange={(e) => setPersonaje(e.target.value)}
        placeholder='Entry Person'
        className='p-2 border border-gray-300 rounded'
      />
      
      <button
      
        type='submit'
        
        className='bg-blue-500 text-white mt-2 px-4 py-2 rounded'
      >
        Search
      </button>
      <ToastContainer />
    </form>
  )
}

export default SearchForm