import React from "react";
import productos from "../data";
import ItemDetail from "../components/ItemDetail";

function getProducto() {
    return new Promise( (resolve) => {
        setTimeout( () => resolve(productos[0]), 3000)
    })
};  

function ItemDetailContainer(props) {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        getProducto().then((respuesta) => {
            setData(respuesta);
        })
        .catch((error) => {
            console.log(error)
        })
    }, []);

    return(
        <>
        <h2 className='ItemListCont'>{props.greeting}</h2>
        <ItemDetail img={data.img} nombre={data.title} precio={data.price}/>
        </>
    )
}

export default ItemDetailContainer; 