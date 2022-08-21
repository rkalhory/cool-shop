import {useState,useEffect} from "react";
import {useAllProducts,useAllCategories} from '../../customHooks'
import './style.scss'
import ProductCart from "../productCart";
import Spinner from "../spinner";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftLong} from '@fortawesome/free-solid-svg-icons'

const ProductsFilter=()=> {
    const {data:products=[],isLoading}=useAllProducts()
    const {data:categories=[],catLoading}=useAllCategories()
    const [cat,setCat]=useState(0)
    const [filterProducts,setFilterProducts]=useState([])

    useEffect(()=>{
        if(products.length){
            if(cat===0){
                setFilterProducts(products)
            }else{
                let filter=products.filter(p=>p?.category?.id===cat)
                setFilterProducts(filter)
            }
        }
    },[cat,products])



    return(
        <div className='overflow-hidden'>
            <div className='container'>
                <div className='d-flex align-items-center justify-content-center flex-wrap mb-50'>
                    <button type='button' className={`filter-btn ${cat===0?'active':''}`} onClick={()=>setCat(0)}>همه</button>
                    {categories?.map(item=>(
                        <button type='button' key={item.id} className={`filter-btn ${cat===item.id?'active':''}`} onClick={()=>setCat(item.id)}>{item.title}</button>
                    ))}
                </div>
                {isLoading?<Spinner/>:
                    <div className='product-row'>
                        {filterProducts.slice(0, 8)?.map((product) => (
                                <div key={product?.id} className='product-col'>
                                    <ProductCart product={product} />
                                </div>
                            )
                        )}
                    </div>
                }
                <div className='text-center'>
                    <Link to={`/products?type=${cat}`} className='more-btn'>مشاهده بیشتر<FontAwesomeIcon icon={faLeftLong}/></Link>
                </div>
            </div>
        </div>
    )
}

export default ProductsFilter