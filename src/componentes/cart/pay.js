import { useContext } from "react"
import { PrecioContext } from "../context/precioFinal"

const payMedios = ['tarjeta debito', 'tarjeta credito']

export const Pay = (props) => {
const {precio, precioFinal} = useContext(PrecioContext)

console.log(precio);

    return(
        <>
            <h1>Elije tu medio de pago:</h1>
            {payMedios.map(x=> <button>{x}</button>)}
        </>
    )
}