import './Header.css'
import Principal from '../principal/Principal'

function Header(){
    return(
        <>
            <header className="header">
                <img src="/Esquinas borde superior izquierda.png" 
                    className="esquina esquina-izq" />

                <img src="/Iniciales.png" 
                    className="iniciales-img" />

                <img src="/Esquinas borde superior derecha.png" 
                    className="esquina esquina-der" />
            </header>
            <Principal />
        </>
    )
}

export default Header;