import Heroes from './components/Heroes';
import PersonajeCard from './components/PersonajeCard';
import SearchForm from './components/SearchForm';
import { PersonajeProvider } from './context/PersonajesContext';





function App() {
 


  return (


    
    <PersonajeProvider>

    <div className='flex justify-center items-center bg-purple-800 text-white p-2'>
    <h1 className=' text-xl'> Personajes</h1>

    </div>
    <SearchForm/>
    <PersonajeCard/>
    
    </PersonajeProvider>

      
 
    
  )
}

export default App
