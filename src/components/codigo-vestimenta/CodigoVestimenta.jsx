import './CodigoVestimenta.css'

function CodigoVestimenta(){
    return(
        <>
            <h2 className="codigo-vestimenta-titulo">Código de Vestimenta</h2>
            <p className='codigo-vestimenta-descripcion'>ELEGANTE SPORT</p>

            <div className="codigo-vestimenta-img-container">
                <img 
                    src="/dibujo Codigo de Vestimenta.png" 
                    alt="Código de vestimenta dibujo"
                    className='codigo-vestimenta-img'
                />
            </div>
             <img src='/separador de textos chico.png' alt='Separador' className='separador-chico'></img>
        </>
    )
}

export default CodigoVestimenta;