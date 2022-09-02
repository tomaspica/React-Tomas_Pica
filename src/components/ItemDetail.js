import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { cartContext }  from "../store/CartContext";

function ItemDetail ({img, title, price}) {
    function ItemDetail ({id, nombre, precio, img, stock}) {
        const { addItem } = useContext(cartContext);
    
        function terminarCompra (clicks) {
            alert("Añadido al carrito", clicks);
            console.log(clicks)
        function terminarCompra (quantity) {
            const itemToCart = {id, nombre, precio, img, stock}
            addItem(itemToCart, quantity);
        }
    
        return (
        <>
        <div className="productoIndexDetail">
            <img src={img} alt={nombre}/>
            <h4>{title}</h4>
            <h6>$ {price}</h6>
            <span>6 cuotas sin interes</span>
            <ItemCount initial={1} stock={8} onAdd={terminarCompra}/>
            <ItemCount initial={1} stock={stock} onAdd={terminarCompra}/>
            <Link to={`/carrito`}>
                <button className="btn btn-success btnAgregar">Terminar compra</button>
            </Link>
        </div>
        </>
        )
    }
    
    }}
export default ItemDetail; 