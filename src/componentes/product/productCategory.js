import { useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";
import { getFirestore } from "../../firebase"
import { Counter } from "./productDetailsContainer";


/*     export const getCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(Product__DATA.filter(producto => producto.categoria === categoryId))
        }, 1000)
    })
} */
export const ProductCategory = ()=>{
    const [category, setCategory] = useState([])
    const { categoriaId } = useParams()    
    const [padre] = useState(
        {
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'space-between',
            alignContent: 'space-between'
        }
    )
    
    const [li] = useState(
        {
        backgroundColor: '#ffe8d8',
        border: '1px solid black',
        marginTop: '5px',
        fontFamily: 'arial',
        height: '320px',
        width: '250px',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        textAlign: 'center'
    })
    const [img] = useState(
        {
            width: '150px',
            height: '150px'
        }
    )
    
    useEffect(()=>{
        const db = getFirestore()
        const itemColection = db.collection("product")
        itemColection.get()
                        .then(QuerySnapshot => {
            setCategory(QuerySnapshot.docs.map(doc => doc.data()))
                })
            }, [])
                
    const categoria = category.filter(x => x.category == categoriaId)

    return(
    <div style={padre}>
        {categoria.map(x => {return(
                        <div style={li}>
                        <div>
                            <h1>{x.nombre}</h1>
                            <h2>${x.precio}</h2>
                            <img src={x.image} style={img}/>
                            <h5>categoria: {x.category}</h5>
                            <br/>
                            <Counter props={x}/>
                        </div>
                    </div>
            )})}
    </div>
    )
        }