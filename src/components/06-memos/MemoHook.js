import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'
import '../02-useEffect/effects.css'

export const MemoHook = () => {

    const {counter, incremenet} = useCounter(2000)
    const [show, setShow] = useState(true)

    const procesoPesado = (iteraciones) =>{
        for( let i = 0; i<iteraciones; i ++){
            console.log('Ahi vamos...');
        }

        return `${iteraciones} iteraciones realizadas`
    }
    
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small> </h3>
            <hr></hr>

            <p>{procesoPesado(counter)}</p>

            <button
                className = "btn btn-primary"
                onClick = {incremenet}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={ () => {
                    setShow(!show);
                }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
