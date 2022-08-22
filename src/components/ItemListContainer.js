import React from "react"
import productos from "../data"
import ItemList from "../components/ItemList"

function getProductos() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(productos), 2000)
    })
}
function ItemListContainer(props) {
function ItemListContainer() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        getProductos().then((respuesta) => {
            setData(respuesta);
        })
        .catch((error) => {
            console.log(error)
        })
    }, []);

    
    return(
        <>
        <h2 className='ItemListCont'>{props.greeting}</h2>
        <ItemList data={data}/>
            <ItemList data={data}/>
        </>
    )
}}
export default ItemListContainer;