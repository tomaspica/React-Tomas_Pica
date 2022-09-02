import '../components/NavBar.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { cartContext } from '../store/CartContext';


function CartWidget() {
    return(
            <FontAwesomeIcon icon={faCartShopping}/>
    )

    const { cart } = useContext(cartContext);

    if(cart.length > 0)
        return (
            <>
                <div>
                    <FontAwesomeIcon icon={faCartShopping}/>
                    <span>{cart.length}</span>
                </div>
            </>
        )
    else{
        return(
            <FontAwesomeIcon icon={faCartShopping}/>
        )
    }

}

export default CartWidget;