import { useEffect } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import { Product__DATA } from "../../product"
import ProductDetails from "./productDetailsContainer"


export const getCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(Product__DATA.filter(producto => producto.categoria === categoryId))
        }, 1000)
    })
}
console.log(45)

export default function ListProduct() {
    
    const { categoryId } = useParams()
    const { id } = useParams()
    const [items, setItems] = useState([])
    const [style__padreTarget] = useState({styler: {
        backgroundColor: 'rgb(248, 206, 128)',
        padding: '15px',
        borderBottom: '2px solid black',
        borderTop: '2px solid black',
        marginTop: '5px' 
    }})
    
    useEffect(()=> {
        getCategory(categoryId)
            .then(productos => setItems(productos))
    })
    return (
        <>
            {items.map(producto =>{ return <div style={style__padreTarget.styler}>
                <h1>{producto.nombre}</h1>
                <h2>{producto.precio}</h2>
                <ProductDetails props={producto}/>
            </div>
            })}
        </>
    )
}