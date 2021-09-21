import { BrowserRouter, Switch, Route} from "react-router-dom"
import { CartElement } from "../cart/cart"
import { Pay } from "../cart/pay"
import { CartProvider } from "../context/cartContext"
import { NavBar__component } from "../header/navbar"
import { Home } from "../home/home"
import { ProductList } from "../product/product.list"
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
                <Route path='/producto/:id' component={ProductDetails}/>
                <Route path='/cart' component={CartElement}/>
                <Route path='/pay' component={Pay}/>
                <Route path='/product/:id' component={ProductList}/>
                <Route path='/category/:categoriaId' component={ProductCategory}/>
            </CartProvider>
        </Switch>
    </BrowserRouter>
    )}
