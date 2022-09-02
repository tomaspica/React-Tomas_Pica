import React from "react";
import Item from "../components/Item"

 
function ItemList ({data}) {
    return (
        <section>
            <>
                <h2>ItemListContainer</h2>
                <h2>Productos</h2>
                <article>
                    {data.map((producto) => {
                        return (
                            <Item
                                    key={producto.id}
                                    id={producto.id}
                                    img={producto.img}
                                    nombre={producto.title}
                                    precio={producto.price}
                                />
                        )
                    })}
                </article>
            </>
        </section>
    )
}
export default ItemList;