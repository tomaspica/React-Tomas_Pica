
    function Item ({img, title, price, id}) {
        return (
        <>
        <card className="productoIndex">
        <div className="productoIndex">
            <img src={img} alt={title}/>
            <h4>{title}</h4>
            <h6>$ {price}</h6>
            <button className="btn btn-success btnAgregar">Añadir al carrito</button>
            <Link to={`/detalle/${id}`}>
            <button className="btn btn-success btnAgregar">Ver más</button>
        </Link>
        
        </div>
        </card>
        </>
        )
    }

    export default Item;