import { useEffect, useState } from "react"

export const Home = ()=> {
/*     useEffect(()=>{

        const obtenerDatos = async()=>{
            const datos = await getDoc(collection(db, 'product'))
            console.log(datos);
        }
        obtenerDatos()
    }, []) */

    const [style] = useState({
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white',
        marginTop: '15%'
    })
    /* const fireRef = Firestore.ref('/fotos/mercado') */

    return(
        <>
            <h1 style={style}>BIENVENIDO A MR E-SHOPER</h1>

        </>
    )
}