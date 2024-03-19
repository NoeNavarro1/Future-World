'use client'

import { useEffect } from "react";

useEffect

interface ErrorProps {
    error: Error;
    reset:  () => void;
}

export  default function Error({error, reset}: ErrorProps){
    useEffect(() => {
        console.log(error)
    }, [] )


    return (
        <div style={{
            padding: '10rem'
        }}>
            <h1>404</h1>
            <p>Pagina no encontrada</p>
            <button onClick={reset}>Intenta denuevo</button>
        </div>
    )
}