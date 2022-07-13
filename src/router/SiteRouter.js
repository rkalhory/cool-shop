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

const SiteRouter=()=> {
    return(
        <Routes>
            <Route path={'/'} element={<Home/>} />
            <Route path={'/about'} element={<About/>} />
            <Route path={'/contact'} element={<Contact/>} />
            <Route path={'/products'} element={<Products/>} />
            <Route path={"/products/:id"} element={<ProductDetails />} />
            <Route path={'/details'} element={<Details/>} />
            <Route path={'*'} element={<NotFound/>} />
        </Routes>
    )
}

export  default SiteRouter