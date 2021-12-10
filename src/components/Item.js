import React, { useEffect } from 'react';

import dragElement from '../helpers/divHandler'; 

export default function Item({ id, name }) {

    const getStyle = () => {
        const _id = parseInt(id);
        return {
            top: `${34 + _id * 6 }%`,
          }
    }
    
    useEffect(()=> {
        dragElement(document.getElementById(`part${id}`));
    });

    return (
        <>
            <div className="part" id={`part${id}`} style={getStyle()}><p>{name}</p></div>
        </>
    )
}
