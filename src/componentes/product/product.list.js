import { QuerySnapshot } from "@firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getFirestore } from "../../firebase"

export const ProductList = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
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
        height: '300px',
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
            setProduct(QuerySnapshot.docs.map(doc => doc.data()))
        })
    }, [])


 
    const productId = product.find(x => x.key == id)
    console.log(productId);
    const {nombre ,image, precio, category} = productId


    console.log(productId);
    return(
        <div>
             <h1>producto: {nombre}</h1>
            <img src={image}/>
            <h2>precio: ${precio}</h2>
            <h6>{category}</h6>
        </div>
    )
}