import React, { useContext } from "react";
import { cartContext }  from "../../store/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";

function Cart() {
    const { cart, clearCart, removeItem } = useContext(cartContext);
    console.log(cart);

    function removeItemCart(id){
        removeItem(id)
    }
    if (cart.length === 0) {
        return (
            <>
            <article className="h2">
                <h2>Mi Carrito</h2><hr/>
            </article>
            <article>
                <h4>Su carrito esta vacío</h4>
                <h4>¿Desea volver al <Link to="/">Inicio</Link>?</h4>
            </article>
        </>

        )
    }
    else {
        return (
            <div >
                <div >
                    {cart.map((item) => {
                        return (
                            <ItemCart
                            key={item.id}
                            id={item.id}
                            img={item.img}
                            nombre={item.nombre}
                            precio={item.precio}
                            cantidad={item.quantity}
                            removeItemCart= {removeItemCart}
                            />
                        )
                    })}
                    <button  className="delete-all" onClick={clearCart}> Vaciar Carrito </button>
                </div>
            </div>
        )
    }
}

export default Cart;