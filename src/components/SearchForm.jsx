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
    <div className='flex justify-center items-center mt-5'>
      <div>
        <img className='mr-8' src="/img/Rick.webp" alt="imagen logo" />
      </div>
      <form onSubmit={handleSubmit} className=' mt-6 mr-4'>
        <input type="text"
          value={personaje}
          onChange={(e) => setPersonaje(e.target.value)}
          placeholder='Entry Person'
          className='mr-4 pl-5 border border-gray-300 rounded'
        />

        <button

          type='submit'

          className='bg-blue-500 text-white  px-4 py-3 ml-2 rounded'
        >
          Search
        </button>
        <ToastContainer />
      </form>
    </div>
  )
}

export default SearchForm