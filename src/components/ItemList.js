import React from "react";
import Item from "../components/Item"

function ItemList (props) {
function ItemList ({data}) {
    return (
        <><>
            {props.data.map((producto) => {
                return (
                    <Item
                        key={producto.id}
                        img={producto.img}
                        nombre={producto.nombre}
                        precio={producto.precio} />
                );
            })}
        </><section>
                <>
                    <h2>ItemListContainer</h2>
                    <article>
                        {data.map((producto) => {
                            return (
                                <Item
                                    key={producto.id}
                                    img={producto.img}
                                    nombre={producto.nombre}
                                    precio={producto.precio} />
                            );
                        })}
                    </article>
                </>
            </section></>
    )
}
}
export default ItemList;