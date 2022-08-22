import '../App.css'
import CartWidget from './CartWidget';
function NavBar() {
    return(
        <header className='NavBar'>
        <div>
            <h1 className='title'>Boxeo</h1>
            <ul className= 'uls'>
                <li>Log In</li>
                <li>Inicio</li>
                <li><CartWidget/></li>
                
            </ul>
        </div>
    </header>
    )
    
}

export default NavBar;

