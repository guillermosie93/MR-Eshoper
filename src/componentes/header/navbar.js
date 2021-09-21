import { useState } from "react"
import { Link } from "react-router-dom"
export const NavBar__component = () =>{

    const [category] = useState([
        {
            id:'pgc',
            nombre: 'Productos Secos'
        },
        {
            id:'pft',
            nombre: 'Productos Frescos'
        },
        {
            id: 'bebidas',
            nombre: 'bebidas'
        },
        {
            id:'limpieza',
            nombre: 'limpieza'}
    ])
    const [style__UL] = useState ({styler: { display: 'flex', flexFlow: 'row-nowrap', justifyContent: 'space-around', listStyle: 'none'}})
    const [style__padre] = useState ({styler: {backgroundColor: 'orange', padding: '15px', fontFamily: 'arial'}})
    const [style__LI] = useState ({styler: {textDecoration: 'none', color: 'black'}})
    
    return(
        <nav>
            <div className='menu' style={style__padre.styler}>
                <ul style={style__UL.styler}>
                    <li key='home'><Link to='/'>HOME</Link></li>
                    {category.map(x => <li key={x.id} ><Link to={`/category/${x.id}`} style={style__LI.styler}><b>{x.nombre}</b></Link></li>)}
                    <Link to={'/cart'}>ir al carrito</Link>
                </ul>
            </div>
        </nav>
    )
}