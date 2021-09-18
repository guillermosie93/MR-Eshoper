import { BrowserRouter, Switch, Route} from "react-router-dom"
import { CartElement } from "../cart/cart"
import { CartProvider } from "../context/cartContext"
import { NavBar__component } from "../header/navbar"
import { Home } from "../home/home"
import ProductDetails from "../product/productDetailsContainer"
import ListProduct from "../product/productListContainer"


export const Rounters = () => {
    return (
    <BrowserRouter>
        <NavBar__component/>
        <Switch>
            <CartProvider>
                <Route exact path='/' component={Home}/>
                <Route path='/categoria/:categoryId' component={ListProduct}/>
                <Route path='/producto/:id' component={ProductDetails}/>
                <Route path='/cart' component={CartElement}/>
            </CartProvider>
        </Switch>
    </BrowserRouter>
    )}
