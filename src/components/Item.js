
    function Item ({img, title, price}) {
        return (
        <>
        <card className="productoIndex">
        <div className="productoIndex">
            <img src={img} alt={title}/>
            <h4>{title}</h4>
            <h6>$ {price}</h6>
            <button className="btn btn-success btnAgregar">Añadir al carrito</button>
        
        </div>
        </card>
        </>
        )
    }

    export default Item;