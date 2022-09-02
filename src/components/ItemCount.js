import React from "react";
import React, {useState} from "react";

function ItemCount(props) {

    const [clicks, setClicks] = useState(1);
    const [quantity, setQuantity] = useState(1);

    const handleIncrement= () => {
        if (clicks < props.stock) {
            setClicks(clicks + 1);
        if (quantity < props.stock) {
            setQuantity(quantity + 1);
        } else {
            alert("Lo sentimos. No hay más stock")
        }
    }
    const handleDecrement= () => {
        if (clicks > props.initial) {
            setClicks(clicks - 1);
        if (quantity > props.initial) {
            setQuantity(quantity - 1);
        } else {
            alert("No puede seleccionar una cantidad menor a 1")
        }
    }
}}
    return(
        <>
            <div className="ItemCount">
                <div className="clicks">
                <div className="quantity">
                    <button onClick={ handleDecrement }> - </button> 
                    <h3> {clicks}</h3>
                    <h3> {quantity}</h3>
                    <button onClick={ handleIncrement }> + </button>
                </div>
                <button className="comprar" onClick={props.onAdd(clicks)}> Añadir al carrito </button>
                <button className="comprar" onClick={()=>props.onAdd(quantity)}> Añadir al carrito </button>
            </div>
        </>
    )


export default ItemCount;