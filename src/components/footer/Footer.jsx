import './Footer.css'

function Footer(){
    return(
        <>
            <footer className="footer">
                <h2 className='texto-final'>Esperamos contar con su presencia</h2>
                <p className='texto-agradecimientos'>Muchas gracias!</p>

                <div className="footer-img-container">
                    <img 
                        src="/cierre al final.png" 
                        alt="Imagen cierre" 
                        className="footer-img"
                    />
                </div>
            </footer>
        </>
    )
}

export default Footer;