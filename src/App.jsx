import './App.css'
import Header from './components/header/Header'
import NuestroCasamiento from './components/nuestro-casamiento/NuestroCasamiento'
import Contador from './components/contador/Contador'
import Ubicacion from './components/ubicacion/Ubicacion'
import Itinerario from './components/itinerario/Itinerario'
import ConfirmacionAsistencia from './components/confirmacion-asistencia/ConfirmacionAsistencia'

function App() {


  return (
    <>
     <Header />
     <NuestroCasamiento />
     <Contador />
     <Ubicacion />
     <Itinerario />
     <ConfirmacionAsistencia />
    </>
  )
}

export default App
