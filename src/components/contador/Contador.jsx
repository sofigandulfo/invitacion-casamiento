import "./Contador.css";
import { useEffect, useState } from "react";

function Contador() {
  const [tiempoRestante, setTiempoRestante] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {

    const fechaFinal = new Date("2026-03-13T20:00:00-03:00").getTime();
    console.log("FECHA FINAL:", new Date("2026-03-13T20:00:00-03:00"));

    const intervalo = setInterval(() => {
      const ahora = new Date().getTime();
      const diferencia = fechaFinal - ahora;

      if (diferencia <= 0) {
        clearInterval(intervalo);
        return;
      }

      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

      setTiempoRestante({ dias, horas, minutos, segundos });
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <div className="contador-container">
        <p className="contador-text">Faltan</p>

        <div className="contador-numeros">
          <div className="contador-seccion">
            <span className="numero">{tiempoRestante.dias}</span>
            <p className="unidad">Dias</p>
          </div>

          <span className="dos-puntos">:</span>

          <div className="contador-seccion">
            <span className="numero">{tiempoRestante.horas}</span>
            <p className="unidad">Horas</p>
          </div>

          <span className="dos-puntos">:</span>

          <div className="contador-seccion">
            <span className="numero">{tiempoRestante.minutos}</span>
            <p className="unidad">Minutos</p>
          </div>

          <span className="dos-puntos">:</span>

          <div className="contador-seccion">
            <span className="numero">{tiempoRestante.segundos}</span>
            <p className="unidad">Segundos</p>
          </div>
        </div>
      </div>

      <div>
        <img src="/separador de textos chico.png" className="separador-chico" />
      </div>
    </>
  );
}

export default Contador;