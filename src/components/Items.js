import React, { useEffect, useState } from "react";


import getCollageParts from "../services/CollageService";
import Item from "./Item";

export default function Items() {

  const [items, setItems] = useState([]);

  const getItems = () => {
    const items = getCollageParts();
    setItems(items);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
        />
      ))}
    </>
  );
}
