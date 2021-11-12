import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message'

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    })

    // Desestructurar las 2 propiedades del formState
    const {name, email} = formState

    // useEffect
    
    useEffect( () => {
        //console.log('HEY!');
    },[])

    useEffect( () => {
        //console.log('formState cambió!');
    },[formState])

    // Efecto cuando cambia el selec del email

    useEffect( () => {
        //console.log('email cambió!');
    },[email])

    // handleInputChange

    const handleInputChange = ({target}) =>{
        setformState({
            ...formState,
            [target.name] : target.value
        });
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className = "form-group">
                <input
                    type = "text"
                    name = "name"
                    className = "form-control"
                    placeholder = "NOMBRE"
                    autoComplete = "off"
                    value = {name}
                    onChange = {handleInputChange}
                />    
            </div>

            <div className = "form-group">
                <input
                    type = "text"
                    name = "email"
                    className = "form-control"
                    placeholder = "email@gmail.com"
                    autoComplete = "off"
                    value = {email}
                    onChange = {handleInputChange}
                />    
            </div>

            { (name === '123') && <Message />}


        </>
    )
}
