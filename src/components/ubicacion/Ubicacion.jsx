import './Ubicacion.css'

function Ubicacion(){
    return(
        <>
            <div className='ubicacion-container'>
                <p className='nombre-lugar'>Blé Eventos</p>
                <p className='direccion'>Av. Francisco Beiró 4526 - CABA</p>

                <div className='boton-ubicacion-container'>
                    <a className='boton-ubicacion' href="https://maps.app.goo.gl/a71BKjFxNDqz6N4Q8" target='_blank'>VER UBICACION</a>
                </div>
            </div>
            <div>
                <img src='/separador de textos chico.png' className='separador-chico'></img>
            </div>
        </>
    )
}

export default Ubicacion;