import './Contador.css'

function Contador(){
    return(
        <>
            <div className="contador-container">
                <p className="contador-text">Faltan</p>
                <div className="contador-numeros">
                    <div className="contador-seccion">
                    </div>
                </div>
            </div>
            <div>
                <img src='/separador de textos chico.png' className='separador-chico'></img>
            </div>
        </>
    )
}

export default Contador;