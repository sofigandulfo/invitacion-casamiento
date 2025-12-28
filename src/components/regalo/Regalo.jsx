import { useState } from 'react'
import './Regalo.css'

function Regalo() {
  const cuentas = [
    {
      id: "pesos",
      titulo: "Pesos",
      cbu: "0070014630004035054017",
      alias: "GOLF.ALARMA.BRASIL"
    },
    {
      id: "dolares",
      titulo: "Dólares",
      cbu: "0070014631004033340957",
      alias: "LLUVIA.BALADA.JAGUAR"
    }
  ]

  const [copiado, setCopiado] = useState(null)

  function copiar(texto, key) {
    navigator.clipboard.writeText(texto)
    setCopiado(key)

    setTimeout(() => {
      setCopiado(null)
    }, 2000)
  }

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

             <div className="cbu-card">
            <h2 className="regalo-aclaracion">
                Datos bancarios
            </h2>
        {cuentas.map((cuenta) => (
    <div key={cuenta.id} className="cuenta-bloque">
      <h3 className="cuenta-titulo">{cuenta.titulo}</h3>

      {/* CBU */}
      <div className="dato-grupo">
        <div className="dato-copiable">
        <span className="dato-etiqueta">CBU</span>
          <span className="dato-valor">{cuenta.cbu}</span>
          <img
            src={copiado === `${cuenta.id}-cbu` ? "/check.svg" : "/copy.svg"}
            className={`icono-copiar ${copiado === `${cuenta.id}-cbu` ? "copiado" : ""}`}
            onClick={() => copiar(cuenta.cbu, `${cuenta.id}-cbu`)}
            alt="Copiar CBU"
          />
        </div>
      </div>

      {/* Alias */}
      <div className="dato-grupo">
        <div className="dato-copiable">
        <span className="dato-etiqueta">Alias</span>
          <span className="dato-valor">{cuenta.alias}</span>
          <img
            src={copiado === `${cuenta.id}-alias` ? "/check.svg" : "/copy.svg"}
            className={`icono-copiar ${copiado === `${cuenta.id}-alias` ? "copiado" : ""}`}
            onClick={() => copiar(cuenta.alias, `${cuenta.id}-alias`)}
            alt="Copiar Alias"
          />
        </div>
      </div>
    </div>
  ))}
      </div>

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

export default Regalo