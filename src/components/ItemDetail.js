

function ItemDetail ({img, title, price}) {
    return (
    <>
    <div className="productoIndexDetail">
        <img src={img} alt={title}/>
        <h4>{title}</h4>
        <h6>$ {price}</h6>
        <button className="btn btn-success btnAgregar">Añadir al carrito</button>
    </div>
    </>
    )
}

export default ItemDetail; 