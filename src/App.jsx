
import Footer from './components/Footer';
import PersonajeCard from './components/PersonajeCard';
import PersonajeModal from './components/PersonajeModal';
import SearchForm from './components/SearchForm';
import { PersonajeProvider } from './context/PersonajesContext';
import { useCart } from './hooks/useCart';





function App() {
  const { pelis,removePelis,clearLista, addToCard}= useCart ()

  return (


    
    <PersonajeProvider>

    {/* <div className='flex justify-center items-center bg-purple-800 text-white p-2'>
    <h1 className=' text-xl'> Personajes</h1>

    </div> */}
    
    <PersonajeModal
     clearLista={clearLista}
     removePelis={removePelis}
     pelis={pelis}/>
    <SearchForm/>
    <PersonajeCard
    addToCard={addToCard}
    
    />

    <Footer/>
    </PersonajeProvider>

      
 
    
  )
}

export default App
