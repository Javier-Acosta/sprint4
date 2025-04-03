import React, { useState } from 'react'

import { usePersonajes } from '../context/PersonajesContext'



const PersonajeCard = ({ addToCard }) => {





  const { personajeData, loading, error } = usePersonajes()

  // if (loading) return <p className='text-gray-700'>Loading...  </p>
  if (error) return <p className='text-red-500'>{error}  </p>
  if (!personajeData) return null

  const { name, species, image, status } = personajeData






  return (
    <div className=' grid grid-cols-3 grid-rows-3 gap-4 '>




      {
        personajeData.data.results.length > 0 &&
        <>
          {personajeData.data.results.map((personaje) => (
            <div key={personaje.id} className='mb-4'>





              <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
                <div>
                  <img className="size-48 shadow-xl rounded-md" alt="" src={personaje.image} />
                </div>
                <div className="items-center aspect-3/2">
                  <span className="text-2xl font-medium ">{personaje.name}</span>
                  <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
                    <span className="font-medium text-sky-500">{personaje.species}</span>
                    <span>·</span>
                    <span>{personaje.status}</span>
                    <span>·</span>
                    <span>{personaje.gender}</span>
                  </span>
                  <button
                    type='button'
                    onClick={() => addToCard(personaje)}
                    className="bg-blue-600 bg-button-primary hover:bg-button-primary-hover active:bg-button-primary-active text-dark-secondary py-2 px-4 rounded-md w-50 font-semibold transition-colors duration-300">
                    <i className="ph ph-plus"></i> Add Favorito
                  </button>
                </div>
              </div>



            </div>
          ))}
        </>

      }







    </div>
  )
}

export default PersonajeCard