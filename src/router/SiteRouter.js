import {
    Routes,
    Route,
} from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Products from "../pages/products";
import ProductDetails from "../pages/productDetails";
import Details from "../pages/detail";
import NotFound from "../pages/404";
import Cart from "../pages/cart";
import Wish from "../pages/wish";

const SiteRouter=()=> {
    return(
        <Routes>
            <Route path={'/'} element={<Home/>} />
            <Route path={'/about'} element={<About/>} />
            <Route path={'/contact'} element={<Contact/>} />
            <Route path={'/products'} element={<Products/>} />
            <Route path={"/products/:id"} element={<ProductDetails />} />
            <Route path={'/cart'} element={<Cart/>} />
            <Route path={'/wish-list'} element={<Wish/>} />
            <Route path={'*'} element={<NotFound/>} />
        </Routes>
    )
}

export  default SiteRouter