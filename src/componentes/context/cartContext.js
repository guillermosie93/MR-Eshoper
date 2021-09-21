import { createContext } from "react";
import { useState } from "react/cjs/react.development";

export const CartContext = createContext({cart: []})

export const CartProvider= (props)=>{
    const [carrito, setCarrito] = useState([])

    const addCarrito = (item, cantidad) =>{
        console.log(item);
        setCarrito([...carrito, {item, cantidad}])
    }

    console.log(carrito);

    return (
        <CartContext.Provider value ={{ carrito, addCarrito }}>
            {props.children}
        </CartContext.Provider>
    )
}