import '../App.css'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <header className='NavBar'>
        <div className="seccionesContainer">
            <h1 className='title'>Boxeo</h1>
            <ul className= 'uls'>
                <li>Log In</li>
                <li>Inicio</li>
                <li><CartWidget/></li>
            </ul>
            <div className="secciones">
                        <Link to={`/`}>Inicio</Link>
                        <Link to={`/login`}>Log In</Link>
                        <Link to={`/carrito`}><CartWidget/></Link>
                    </div>
        </div>
    </header>
    )
    
}

export default NavBar;

