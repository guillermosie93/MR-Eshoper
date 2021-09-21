import { createContext } from "react";
import { useState } from "react";

export const PrecioContext = createContext(0)

export const PrecioProvider = (props) =>{
    const [precio, setPrecio] = useState(0)

    const precioFinal = (total) => {
        setPrecio(total)
    }

    return(
        <PrecioContext.Provider value={precio, precioFinal}>
            {props.children}
        </PrecioContext.Provider>
    )
} 