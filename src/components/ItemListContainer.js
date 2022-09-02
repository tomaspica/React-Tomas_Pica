import React from "react"
import React, {useState, useEffect}from "react";
import productos from "../data"
import ItemList from "../components/ItemList"
import {useParams} from "react-router-dom";

import firestoreDB from "../services/firestore";
import { getDocs, collection, query, where } from "firebase/firestore";

function getProductos() {
function getProductosfromDB() {
    return new Promise( (resolve) => {
        setTimeout( () => resolve(productos), /* 3000 */)

        const productosCollection = collection(firestoreDB, "productos")

        getDocs(productosCollection).then(snapshot => {
            const docsData = snapshot.docs.map( doc => {
                return {...doc.data(), id: doc.id}
            })
            resolve(docsData);
        })
    })
};

function ItemListContainer(){
    let { idCategory } = useParams();
    const [data, setData] = useState([]);

    useEffect(()=> {
        getProductos().then((respuesta) => {
            let filters = respuesta.filter ((element)=> element.category === idCategory);
            console.log(filters)
            if(idCategory === undefined) {
                setData(respuesta); 
            } else {
                setData(filters);

            }
    });
    }, [idCategory]);
    function getProductosFromDBbyIdCategory(idCategory) {
        return new Promise((resolve) => {
          const productsCollection = collection(firestoreDB, "productos");
          const queryProducts = query(productsCollection, where("category", "==", idCategory))
          getDocs(queryProducts).then(snapshot => {
            const docsData = snapshot.docs.map(doc => {
              return { ...doc.data(), id: doc.id }
            });
            resolve(docsData);
          });
        });
      };

  useEffect(() => {
        if (idCategory) {
          getProductosFromDBbyIdCategory(idCategory).then((resolve) => {
            setData(resolve)
          });

        } else {
          getProductosfromDB().then((resolve) =>{
            setData(resolve) 
          });
        }
      }, [idCategory])

    return(
        <>
            <ItemList data={data}/>
        </>
    )
}}
export default ItemListContainer;
