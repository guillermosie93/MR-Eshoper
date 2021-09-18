import { createContext } from "react";
import { useState } from "react/cjs/react.development";

export const CartContext = createContext({cart: []})

export const CartProvider= (props)=>{
    const [carrito, setCarrito] = useState([])

    const addCarrito = (item, cantidad) =>{
        setCarrito([...carrito, {item, cantidad}])
    }

    return (
        <CartContext.Provider value ={{ carrito, addCarrito }}>
            {props.children}
        </CartContext.Provider>
    )
}