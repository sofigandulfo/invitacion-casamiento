import './Header.css'
import Principal from '../principal/Principal'

function Header(){
    return(
        <>
            <header>
                <div>
                    <img src="/src/assets/Esquinas borde superior izquierda.png" alt="Esquinas borde superior izquierda"/>
                </div>
                <div className='iniciales-container'>
                    <img src="/src/assets/Iniciales.png" alt="Iniciales"/>
                </div>
                <div>
                    <img src="/src/assets/Esquinas borde superior derecha.png" alt="Esquinas borde superior derecha"/>
                </div>
            </header>
            <Principal />
        </>
    )
}

export default Header;