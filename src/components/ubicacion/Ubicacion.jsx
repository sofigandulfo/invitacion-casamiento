import './Ubicacion.css'

function Ubicacion(){
    return(
        <>
            <div className='ubicacion-container'>
                <p className='nombre-lugar'>BLÉ EVENTOS</p>
                <p className='direccion'>AV. FRANCISCO BEIRÓ 4526 - CABA</p>

                <div className='boton-ubicacion-container'>
                    <button className='boton-ubicacion'>VER UBICACION</button>
                </div>
            </div>
            <div>
                <img src='/src/assets/separador de textos chico.png' className='separador-chico'></img>
            </div>
        </>
    )
}

export default Ubicacion;