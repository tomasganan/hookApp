import React, { useState } from 'react'
import { useEffect } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0})
    const {x,y} = coords;

    useEffect(() => {

        const mouseMove = (e) =>{
            const coors = {x: e.x, y: e.y}
            setCoords(coors)
        }

    window.addEventListener('mousemove', mouseMove);
   
    return () => {
        window.removeEventListener('mousemove', mouseMove)
    }

    }, [])

    return (
        <>
           <h3>JE JE JE </h3> 
           <p>
               x:{x} y:{y}
           </p>
        </>
    )
}
