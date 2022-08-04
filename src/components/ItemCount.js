import React from "react";

function ItemCount(props) {
    console.log( props.stock, props.initial );
    
    const [clicks, setClicks] = React.useState(1);
    
    const handleIncrement= () => {
        setClicks(clicks + 1);
    }
    const handleDecrement= () => {
        setClicks(clicks - 1);
    }

    const onAdd = () => {
        console.log("Añadido al carrito")
    }

    return(
        <>
            <h3>Productos</h3>
            <button onClick={ handleDecrement }> - </button> 
            <h3> {clicks}</h3>
            <button onClick={ handleIncrement }> + </button>
            <button onClick={onAdd}> Comprar </button>

        </>
    )
}

export default ItemCount;