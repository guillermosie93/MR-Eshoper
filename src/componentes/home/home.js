import { useEffect, useState } from "react"
import { getFirestore } from "../../firebase"

export const Home = ()=> {
    const [image, setImage] = useState([])
    
    useEffect(()=>{
        const db = getFirestore()
        const itemColection = db.collection("fotos")
        itemColection.get()
                        .then(QuerySnapshot => {
            setImage(QuerySnapshot.docs.map(doc => doc.data()))
                })
            }, [])

            console.log(image);
    /* const imageMercado = image.find(x=> x.name == 'mercado') */

    const [style] = useState({
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white',
        marginTop: '15%',
    })
    /* const fireRef = Firestore.ref('/fotos/mercado') */
    
    return(
        <>
            <h1 style={style}>BIENVENIDO A MR E-SHOPER</h1>
            {/* <img src={imageMercado.image}/> */}

        </>
    )
}