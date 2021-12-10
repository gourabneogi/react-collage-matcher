import React, { useEffect, useState } from "react";

import CollagePart from "./CollagePart";
import getCollageParts from "../services/CollageService";

export default function Collage() {
  const [parts, setParts] = useState([]);

  const getParts = () => {
    const parts = getCollageParts();
    setParts(parts);
  };

  useEffect(() => {
    getParts();
  }, []);

  return (
    <>
      {parts.map((item) => (
        <CollagePart
          key={item.id}
          id={item.id}
          imageUrl={item.imageUrl}
          top={item.style.top}
          left={item.style.left}
        />
      ))}
    </>
  );
}
