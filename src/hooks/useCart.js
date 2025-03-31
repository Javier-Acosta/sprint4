import { useState, useEffect, useMemo } from 'react';


export const useCart = () => {



    const initialLista = () => {
        const localStorageLista = localStorage.getItem('pelis')
        return localStorageLista ? JSON.parse(localStorageLista) : []
    }
    const [pelis, setPelis] = useState(initialLista)
    console.log('LOG', pelis);


    const MAX_ITEMS = 10
    const MIN_ITEMS = 1


    // verifica si existe
    function addToCard(item) {
        const itemExists = pelis.findIndex(listado => listado.id === item.id)
        if (itemExists >= 0) { // existe 
            if (pelis[itemExists].quantity >= MAX_ITEMS) // control de cantidad al apretar el boton muchas veces
                return
            const updateListado = [...pelis]
            updateListado[itemExists].quantity++
                setPelis(updateListado)
        } else {

            item.quantity = 1
            setPelis([...pelis, item])
        }


    }

    // Local Storage
    useEffect(() => {
        localStorage.setItem('pelis', JSON.stringify(pelis))
    }, [pelis])




    // eliminar pelis seleccionadas
    function removePelis(id) {
        setPelis(prevPelis => prevPelis.filter(pelis => pelis.id !== id))

    }

    // vaciar todas las peliculas seleccionadas
    function clearLista(id) {
        setPelis([])


    }

    // State derivado
    const isEmpty = useMemo(() => pelis.length === 0, [pelis])

    return{


        
        pelis,
        addToCard,
        removePelis,
        clearLista,
        isEmpty

    }
}