import {useState,useEffect} from "react";
import {useAllProducts} from '../../customHooks'
import './style.scss'
import ProductCart from "../productCart";
import Spinner from "../spinner";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftLong} from '@fortawesome/free-solid-svg-icons'

const ProductsFilter=()=> {
    const {data:products=[],isLoading}=useAllProducts()
    const [cat,setCat]=useState('all')
    const [path,setPath]=useState('')
    const [filterProducts,setFilterProducts]=useState([])

    useEffect(()=>{
        if(products.length){
            if(cat==='all'){
                setFilterProducts(products)
            }else{
                let filter=products.filter(p=>p.category===cat)
                setFilterProducts(filter)
            }
        }
    },[cat,products])

    function setValues(c,p) {
        setCat(c)
        setPath(p)
    }


    return(
        <div className='overflow-hidden'>
            <div className='container'>
                <div className='d-flex align-items-center justify-content-center flex-wrap mb-50'>
                    <button type='button' className='filter-btn' onClick={()=>setValues('all','')}>همه</button>
                    <button type='button' className='filter-btn' onClick={()=>setValues("women's clothing",4)}>زنانه</button>
                    <button type='button' className='filter-btn' onClick={()=>setValues("men's clothing",3)}>مردانه</button>
                    <button type='button' className='filter-btn' onClick={()=>setValues('jewelery',2)}>جواهرات</button>
                    <button type='button' className='filter-btn' onClick={()=>setValues('electronics',1)}>الکترونیکی</button>
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
                    <Link to={`/products?type=${path}`} className='more-btn'>مشاهده بیشتر<FontAwesomeIcon icon={faLeftLong}/></Link>
                </div>
            </div>
        </div>
    )
}

export default ProductsFilter