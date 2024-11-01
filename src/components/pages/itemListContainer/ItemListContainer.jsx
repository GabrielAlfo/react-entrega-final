import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemList from "./itemList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "productos");

    let consulta = productsCollection;

    if (categoryName) {
      let productsCollectionFiltered = query(
        productsCollection,
        where("category", "==", categoryName)
      );
      consulta = productsCollectionFiltered;
    }

    getDocs(consulta).then((res) => {
      let array = res.docs.map((elemento) => {
        return { ...elemento.data(), id: elemento.id };
      });

      setItems(array);
    });
  }, [categoryName]);

  return (
    <>
      <ItemList items={items} />
      {}
    </>
  );
};

export default ItemListContainer;
