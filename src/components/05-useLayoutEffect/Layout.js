import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './layout.css'

export const Layout = () => {

    const {counter, increment} = useCounter(1)

    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/1`)

    const{quote} = !!data && data[0];

    const pTag = useRef()
    
    const [boxSize, setBoxsize] = useState()

    useLayoutEffect( () =>{
        setBoxsize(pTag.current.getBoundingClientRect() )
    },[quote])

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr></hr>

            <blockquote className="blockquote text-right">
                <p 
                    className = "mb-0"
                    ref = {pTag}
                >
                        {quote}
                </p>
            </blockquote>

            <pre>{JSON.stringify(boxSize,null,3)}</pre>
    
            <button 
                className="btn btn-primary"
                onClick={increment}
            >
                Siguiente quote
            </button>

        </div>
    )
}
