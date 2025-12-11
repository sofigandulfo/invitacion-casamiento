import './Principal.css'

function Principal(){
    return(
        <>
        <div className='principal-container'>
            <div className="circulo-container">
                <img src='/circulo.png' className='circulo-img'></img>
                <img src='/Deco para la foto de J&L.png' className='deco-img'></img>
            </div>
            <p className='texto-principal'>El amor es encontrarse en otro corazón <br />
            y elegir quedarse para siempre. <br />
            Te invitamos a compartir <br />
            este momento único con nosotros.</p>
            <div className='separador-container'>
                <img src='/1er separador de textos.png' className='separador-1'></img>
            </div>
        </div>
        </>
    )
}

export default Principal;