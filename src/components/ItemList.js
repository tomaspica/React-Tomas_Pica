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
                        title={producto.title}
                        price={producto.price} />
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
                                    title={producto.title}
                                    price={producto.price} />
                            );
                        })}
                    </article>
                </>
            </section></>
    )
}
}
export default ItemList;