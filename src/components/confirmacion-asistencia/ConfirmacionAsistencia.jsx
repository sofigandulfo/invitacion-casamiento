import './ConfirmacionAsistencia.css'

function ConfirmacionAsistencia(){
    return(
        <>
               <h2 className="confirmacion-titulo">Confirmar Asistencia</h2>
                <div className='boton-ubicacion-container'>
                    <a className='boton-ubicacion' href="https://forms.gle/yJ5aynLgfA8RssdcA" target='_blank'>Completar formulario</a>
                </div>

                <img src='/separador de textos chico.png' alt='Separador' className='separador-chico'></img>


                <h2 className='confirmacion-titulo'>Contacto de los novios</h2>
            <div className="confirmacion-container">
                
                <div className="contacto-item">
                    <a href="https://wa.me/5491167262223" target="_blank" rel="noopener noreferrer" className="contacto-item">
                        <p>CONTACTAR A LA NOVIA</p>
                        <img src='/logo WhatsApp.png' className="whatsapp-logo" />
                    </a>
                </div>

                <div className="contacto-item">
                    <a href="https://wa.me/5491168577745" target="_blank" rel="noopener noreferrer" className="contacto-item">
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