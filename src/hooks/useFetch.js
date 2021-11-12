import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {
    
    const isMounted = useRef(true);

    const [state, setState] = useState({data: null, loading: true, error:null});

    useEffect( () =>{
        return () =>{
            isMounted.current = false;
        }
    }, [])

    useEffect( () =>{

        setState({data:null,loading:null,error:null})

        fetch(url)
            .then(resp => resp.json() )
            .then(data => {

                setTimeout( () =>{

                    if(isMounted.current){
                        setState({
                            loading:false,
                            error:null,
                            data
                        });
                    }
                    
                }, 1500);

                })
    },[url])

    return state;
}
