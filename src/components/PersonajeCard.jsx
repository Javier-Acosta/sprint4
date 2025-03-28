import React from 'react'
// ⚠️⚠️⚠️ ----------------------------------------------------------------------------------------------------------------------------------- ⚠️⚠️⚠️
// import { usePersonajes } from '../context/personajesContext' // LSK - mismo error que en searchForm, lo arreglé aquí también
import { usePersonajes } from '../context/PersonajesContext'
// ⚠️⚠️⚠️ ----------------------------------------------------------------------------------------------------------------------------------- ⚠️⚠️⚠️

const PersonajeCard = () => {
  // ⚠️⚠️⚠️ ----------------------------------------------------------------------------------------------------------------------------------- ⚠️⚠️⚠️
  // const {personajeData, loading,error}=usePersonajes // LKS - aquí te faltaba el parentesis al final
  const { personajeData, loading, error } = usePersonajes() // LKS - aquí lo agregué
  // ⚠️⚠️⚠️ ----------------------------------------------------------------------------------------------------------------------------------- ⚠️⚠️⚠️

  console.log('personajeData -> ', personajeData)
  if (loading) return <p className='text-gray-700'>Loading...  </p>
  if (error) return <p className='text-red-500'>{error}  </p>
  if (!personajeData) return null

  const { name, species, image, status } = personajeData
  console.log('Card', personajeData); // LSK - aquí estas mostrando por consola el personajeData, desde el navegador podes ver que es lo que te trare
  // así que aquí esta tu problema, no estas accediendo a los datos de la forma correcta, ya que el personajeData es un objeto, por lo tanto no tenes que acceder a la informacion
  // que vos queres, que sería, el arreglo de personajes, que se encuentra dentro del objeto data, y luego el arreglo results, por lo tanto tenes que acceder a los datos de la siguiente manera:
  // personajeData.data.results[0].name, personajeData.data.results[0].species, etc.
  console.log('🌙 LKS -> personaje ', personajeData.data.results[0])
  console.log('🌙 LKS -> personaje . name', personajeData.data.results[0].name)

  // vale la aclaracion, que ahí solo estarias accediendo al primer personaje, si queres acceder a todos los personajes, tenes que hacer un map, y luego dentro del map, acceder a los datos de la misma manera que te lo dije antes

  return (
    <div >
      {/* <h2 className='text-2xl font-bold'>{name}</h2> */}
      <h2 className='text-2xl font-bold'>{personajeData.data.results[0].name}</h2>
      <p className='text-2xl font-bold'>{species}</p>
      <p className='text-2xl font-bold'>{status}</p>
      PersonajeCard</div>
  )
}

export default PersonajeCard