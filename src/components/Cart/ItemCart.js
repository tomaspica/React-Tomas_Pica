

function ItemCart ( {id, img, title, price, removeItemCart}) {
    return (
    <>
    <div className="cartProduct">
        <img src={img} alt={title}/>
        <h4>{title}</h4>
        <h6>Precio unidad: $ {price}</h6>
        <button className="btn btn-success btnAgregar" onClick={()=>removeItemCart(id)}>Eliminar producto</button>
    </div>
    </>
    )
}

export default ItemCart;