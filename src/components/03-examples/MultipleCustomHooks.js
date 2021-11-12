import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1)

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/1`)

    const{author, quote} = !!data && data[0];

    console.log(author, quote)

    console.log(data)

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr></hr>

            {
                loading
                ?
                    (
                        <div className = "alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-right">
                            <p className = "mb-0">{quote}</p>
                            <footer className = "blockqoute-footer text-right">{author}</footer>
                        </blockquote>
                    )
            }

            <button 
                className="btn btn-primary"
                onClick={increment}
            >
                Siguiente quote
            </button>

        </div>
    )
}
