import React, { useMemo } from 'react'


const PersonajeModal = ({pelis,isEmpty,clearLista,removePelis}) => {
   

    


    return (
        <header className="py-5 header">
    <div className=" container-xl ">
        <div className="row  justify-content-md-between">
            <div className="justify-content-start col-8 col-md-3">
                <a href="index.html">
                    <img className="img-fluid" src="/img/logo.avif" alt="imagen logo" />
                </a>
            </div>
            <nav className="col-4  mt-5 d-flex  justify-content-end">
                        <div 
                            className="carrito"
                        >
                            <img className="img-fluid" src="./img/carrito.png" alt="imagen carrito" />

                            <div id="carrito" className="bg-white p-3">
                                {isEmpty ? (
                                    <p className="text-center">Favorito está vacio</p>
                                ) : (
                                <>
                                    <table className="w-100 table">
                                        <thead>
                                            <tr>
                                                <th>Imagen</th>
                                                <th>Nombre</th>
                                                
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {pelis.map( listado => (
                                                <tr key={listado.id}>
                                                    <td>
                                                        <img 
                                                            className="img-fluid" 
                                                            src={listado.image}
                                                            alt="imagen guitarra" 
                                                        />
                                                    </td>
                                                    <td>{listado.name}</td>
                                                    
                                                    <td>
                                                        <button
                                                            className="btn btn-danger"
                                                            type="button"
                                                            onClick={() => removePelis(listado.id)}
                                                        >
                                                            X
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                </>
                                )}

                                <button 
                                    className="btn btn-dark w-100 mt-3 p-2"
                                    onClick={clearLista}
                                >Vaciar Favorito</button>
                                
                            </div>
                        </div>
                    </nav>


                </div>
            </div>
        </header>
    )
  }

export default PersonajeModal








