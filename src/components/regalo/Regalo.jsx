import './Regalo.css'

function Regalo(){
    return(
        <>
            <h2 className="regalo-titulo">Sugerencia de Regalo</h2>

            <div className="regalo-img-container">
                <img src="/sobre.png" alt="Sobre" className="regalo-img" />
            </div>

            <p className="regalo-texto">
                Si pensabas en un regalo, <br/>
                te ahorramos la confusión, <br/>
                no queremos licuadoras... <br/>
                ¡Queremos la contribución! <br/><br/>

                Un sobrecito pequeño, <br/>
                más liviano que un florero, <br/>
                entra en cualquier bolsillo... <br/>
                ¡Y nos lleva al extranjero!
            </p>

            <div className="regalo-separador-container">
                <img 
                    src="/separador de textos chico.png" 
                    className="separador-chico" 
                    alt="Separador"
                />
            </div>
        </>
    )
}

export default Regalo;