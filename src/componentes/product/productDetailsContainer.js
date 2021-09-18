import { useEffect } from "react"
import { useParams } from "react-router"
import { useContext, useState } from "react/cjs/react.development"
import { Product__DATA } from "../../product"
import { CartContext } from "../context/cartContext"


export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(Product__DATA.find(producto => producto.idProduct === id))
        }, 2000)
    })
}

export const Counter = (props) =>{
    const [cant, setCant] = useState(0) // estado para el valor que muestra el input
    const [ disabled, setDisabled ] = useState(false) // estado para el boton ('+')
    const [ disabledLess, setDisabledLess ] = useState(true) //estado para el boton ('-')
    const { stock } = props.props //stock del item
    const [ style ] = useState({style:{ //estilo del carta
        height: '25px',
        width: '25px',
        backgroundColor: 'orange'
    }})
    const articulo = props.props //viene del param

    const {carrito: item, addCarrito} =useContext(CartContext)//contexto para el carrito


    function countCant(e){// funcion controladora de los botones del Counter
       const  signCount = e.target.value
         signCount === '+' ? setCant(cant + 1) : setCant(cant - 1)
         cant == stock - 1 || cant == stock ? setDisabled(true) : setDisabled(false)
        if (cant === 0){
            setDisabledLess(true)
        }else {
            setDisabledLess(false)
        }
    }
    
    return(
        <div>
            <fieldset>
            <legend>Cantidad de unidades</legend>
                <button onClick= {countCant} value='+' disabled={disabled}>+</button>
                    <input value={cant} readOnly/>
                <button onClick= {countCant} value='-' disabled={disabledLess}>-</button>
                {cant > 0 && <button onClick={()=> addCarrito(articulo, cant)}>Agregar al carrito</button>}
                {cant == stock ? <span> *No hay suficiente stock</span> : null}
             </fieldset>
        </div>
    )
}

export default function ProductDetails(props){
    const { id } = useParams()
    const [detail, setdetail] = useState([])
    const [ carrito, setCarrito ] = useState(0)
    const [style] = useState({styler:{
        backgroundColor: 'grey',
        height: '100px',
        width: '100px'
    }})


    useEffect(()=> {
        getProduct(id)
            .then(product => setdetail(product))
    })

    
    return(
        <>
            <div style={style.styler}></div>
            <Counter props={props}/>
        </>
    )
}