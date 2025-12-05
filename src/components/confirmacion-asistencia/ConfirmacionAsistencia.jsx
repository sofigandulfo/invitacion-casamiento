import './ConfirmacionAsistencia.css'

function ConfirmacionAsistencia(){
    return(
        <>
               <h2 className="confirmacion-titulo">Confirmar Asistencia</h2>

            <div className="confirmacion-container">
                
                <div className="contacto-item">
                    <p>CONTACTAR A LA NOVIA</p>
                    <img src='/src/assets/logo WhatsApp.png' className="whatsapp-logo" />
                </div>

                <div className="contacto-item">
                    <p>CONTACTAR AL NOVIO</p>
                    <img src='/src/assets/logo WhatsApp.png' className="whatsapp-logo" />
                </div>
            </div>
                <img src='/src/assets/separador de textos chico.png' alt='Separador' className='separador-chico'></img>
        </>
    )
}

export default ConfirmacionAsistencia;