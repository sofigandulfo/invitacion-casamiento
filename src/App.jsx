import './App.css'
import Header from './components/header/Header'
import NuestroCasamiento from './components/nuestro-casamiento/NuestroCasamiento'
import Contador from './components/contador/Contador'
import Ubicacion from './components/ubicacion/Ubicacion'
import Itinerario from './components/itinerario/Itinerario'
import ConfirmacionAsistencia from './components/confirmacion-asistencia/ConfirmacionAsistencia'
import CodigoVestimenta from './components/codigo-vestimenta/CodigoVestimenta'
import Regalo from './components/regalo/Regalo'
import Footer from './components/footer/Footer'

function App() {


  return (
    <>
     <Header />
     <NuestroCasamiento />
     <Contador />
     <Ubicacion />
     <Itinerario />
     <ConfirmacionAsistencia />
     <CodigoVestimenta />
     <Regalo />
     <Footer />
    </>
  )
}

export default App
