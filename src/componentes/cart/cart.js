import { useContext } from "react/cjs/react.development"
import { CartContext } from "../context/cartContext"
import { Counter } from "../product/productDetailsContainer";

export const CartElement = () => {
    const { carrito } = useContext(CartContext)
    const itemProduct = carrito.map(x=>  {
        return {cantidad: x.cantidad, item: x.item.props}})
    const precios = itemProduct.map(x=> x.item.precio * x.cantidad)

    //total:
    const reducer = (x, y) => x + y


    console.log(typeof precios);

   

    return(
        <>
            <h1>Carrito</h1>
            {itemProduct.length === 0 ? <><h1>No seleccionaste ningun producto</h1></> :itemProduct.map(x=> {return (
                <>
                    <h3>Producto: {x.item.nombre}</h3>
                    <h4>Precio: ${x.item.precio}</h4>
                    <h5>{x.cantidad}</h5>
                    <br/>
                    <br/>  
                    <h2>total: {precios.length === 0 ? '$0' : precios.reduce(reducer)}</h2>

                </>)})}
                

            
        </>
    )
}
