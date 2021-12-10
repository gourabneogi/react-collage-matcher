import React, { useEffect, useRef } from "react";

export default function CollagePart({ id, imageUrl, top, left }) {
//   const styleRef = useRef();

  const getStyle = () => {
    const _id = parseInt(id);
    console.log(id, imageUrl);
    return {
      content: `url(../images/main${_id}.jpg)`,
      // backgroundImage: `url(${require(imageUrl).default})`,
      zIndex: 100,
      top: `${top}`,
      left: `${left}`,
    };
  };

//   useEffect(() => {
//     styleRef.style = getStyle();
//   }, []);

  return (
    <>
      <div className="main" id={`main${id}`} style={getStyle()}></div>
    </>
  );
}
