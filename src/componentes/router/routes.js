import { BrowserRouter, Switch, Route} from "react-router-dom"
import { CartElement } from "../cart/cart"
import { Pay } from "../cart/pay"
import { CartProvider } from "../context/cartContext"
import { NavBar__component } from "../header/navbar"
import { Home } from "../home/home"
import { ProductList } from "../product/productList"
import { ProductCategory } from "../product/productCategory"
import ProductDetails from "../product/productDetailsContainer"
import ListProduct from "../product/productListContainer"


export const Rounters = () => {
    return (
    <BrowserRouter>
        <NavBar__component/>
        <Switch>
            <CartProvider>
                <Route exact path='/' component={Home}/>
                <Route path='/cart' component={CartElement}/>
                <Route path='/product/:id' component={ProductList}/>
                <Route path='/category/:categoriaId' component={ProductCategory}/>
            </CartProvider>
        </Switch>
    </BrowserRouter>
    )}
