import { Link } from "react-router-dom";
import { useContext, useState } from "react/cjs/react.development"
import { CartContext } from "../context/cartContext"
import { PrecioContext } from "../context/precioFinal";
import { Counter } from "../product/productDetailsContainer";
import { FormCart } from "./form";
import { Pay } from "./pay";

/* export const CounterCart = (props)=>{
return(
    <>
        <button>+</button>
        <input type='text' value={props.props}/>
        <button>-</button>
    </>
)
} */


export const CartElement = () => {
    const { carrito } = useContext(CartContext)
    const {buttonClicked, setbuttonClicked} = useState(false)
    const [productCart] = useState(
        {
        backgroundColor: '#ffe8d8',
        border: '1px solid black',
        marginTop: '5px',
        fontFamily: 'arial',
        height: '150px',
        width: '100%',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        alignContent: 'flex-start',
        textAlign: 'center',
        gap: '20px'
    })
    const [img] = useState(
        {
            height: '120px',
            width: 'auto'
        }
    )


    //destructurar el carrito
    const itemProduct = carrito.map(x=>  {
        return {cantidad: x.cantidad, item: x.item}
    })
    
    //multiplicar precio x cantidad
    const precios = itemProduct.map(x=> x.item.precio * x.cantidad)
        
    
    //total:
    const reducer = (x, y) => x + y

    function confirm(){
        setbuttonClicked(true)
    }
        
    return(
        <>
            <h1>Carrito</h1>
             {itemProduct.length === 0 ? <><h1>No seleccionaste ningun producto</h1></> :itemProduct.map(x=> {return (
                <div style={productCart}>
                    <div>
                        <h3>Producto: {x.item.nombre}</h3>
                        <img style={img} src={x.item.image}/>
                    </div>
                    <br/>
                    <br/>  
                    <div>    
                        <h4>Precio: ${x.item.precio}</h4>
                        <h5>cantidad: {x.cantidad}</h5>
                    </div>
{/*                     <CounterCart props={x.cantidad}/>
 */}                </div>)})}
                    <h2>total: ${precios.length === 0 ? '0' : precios.reduce(reducer)}</h2>
                    {itemProduct.length === 0 ? null : 
                    <>
                        {/* <FormCart/> */}
                        <button>confirmar compra</button>
                        <br/>
                        <br/>

                        <FormCart/>

{/*                         {buttonClicked === true ? <FormCart/>: null}
 */}                    </>}
                    </>)
}
