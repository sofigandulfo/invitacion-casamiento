import './ConfirmacionAsistencia.css'

function ConfirmacionAsistencia(){
    return(
        <>
               <h2 className="confirmacion-titulo">Confirmar Asistencia</h2>

            <div className="confirmacion-container">
                
                <div className="contacto-item">
                    <a href="https://wa.me/5491167262223?text=Hola!%20Confirmo%20mi%20asistencia" target="_blank" rel="noopener noreferrer" className="contacto-item">
                        <p>CONTACTAR A LA NOVIA</p>
                        <img src='/logo WhatsApp.png' className="whatsapp-logo" />
                    </a>
                </div>

                <div className="contacto-item">
                    <a href="https://wa.me/5491168577745?text=Hola!%20Confirmo%20mi%20asistencia" target="_blank" rel="noopener noreferrer" className="contacto-item">
                        <p>CONTACTAR AL NOVIO</p>
                        <img src='/logo WhatsApp.png' className="whatsapp-logo" />
                    </a>
                </div>
            </div>
                <img src='/separador de textos chico.png' alt='Separador' className='separador-chico'></img>
        </>
    )
}

export default ConfirmacionAsistencia;