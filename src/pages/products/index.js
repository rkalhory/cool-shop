import Breadcrumbs from "../../components/breadcrumb";
import {useAllProducts,useAllCategories} from "../../customHooks";
import {useEffect, useState,useRef} from "react";
import {useParams, useSearchParams} from 'react-router-dom';
import Spinner from "../../components/spinner";
import ProductCart from "../../components/productCart";
import InputRange from 'react-input-range-rtl';
import 'react-input-range-rtl/lib/css/index.css'
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft,faAngleRight,faArrowDownWideShort,faCheck } from '@fortawesome/free-solid-svg-icons'
import './style.scss'


const p=[
    {title:'صفحه اصلی',link:'/'}
]

const Products=()=> {

    const [searchParams,setSearchParams]=useSearchParams()

    // const [params]=useSearchParams()
    const cat=searchParams.get('type')||0

    const sortObjectsArray = require('sort-objects-array');

    const {data:products=[],isLoading}=useAllProducts()
    const {data:categories=[]}=useAllCategories()
    const [loading,setLoading]=useState(false)
    const [filterProducts,setFilterProducts]=useState([])
    const [value, setValue] = useState({ min: 0, max: 1000 })
    const [catList, setCatList] = useState([])
    const [sortType, setSortType] = useState(0)

    const cat1 = useRef();
    const cat2 = useRef();
    const cat3 = useRef();
    const cat4 = useRef();

    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const paginationRef=useRef()

    let itemsPerPage=6

    useEffect(() => {
        setPageCount(Math.ceil(filterProducts.length / itemsPerPage));
    }, [itemOffset, itemsPerPage,filterProducts]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % filterProducts.length;
        setItemOffset(newOffset);
    };



    useEffect(()=>{
        if (products.length&&categories.length) {
            if(cat!==0){
                clearFilters()
                setCatList([categories[parseInt(cat)-1]])
                if(cat==1)cat1.current.checked=true
                if(cat==2)cat2.current.checked=true
                if(cat==3)cat3.current.checked=true
                if(cat==4)cat4.current.checked=true
                searchParams.delete('type');
                setSearchParams(searchParams);

            }else{
                setFilterProducts(products)
            }
            setLoading(false)
        }

    },[products,categories,cat])


    useEffect(()=>{
        if(products.length){
            let array=[]
            if(sortType!==0) {
                array = sortFunction(products, sortType)
            }else{
                array=products
            }
            let filter=array.filter(p=> {
                if(!catList.length){
                    return p.price <= value.max && p.price >= value.min
                }else{
                    return catList.includes(p.category) && p.price <= value.max && p.price >= value.min
                }

            })
            setFilterProducts(filter)
            setItemOffset(0)
            paginationRef.current.state.selected=0
        }
    },[catList,value])

    function clearFilters() {
        setCatList([])
        setFilterProducts(products)
        setValue({ min: 0, max: 1000 })
        setItemOffset(0)
        paginationRef.current.state.selected=0
        let inputs = document.querySelectorAll('.cat-filter input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].checked = false;
        }
        setSortType(0)
    }

    function catFilter(cat,checked) {
        checked?setCatList(c=>[...c,cat]):setCatList(catList.filter(c=>c!==cat))
    }

    const sortFunction = (array,type) => {
        let temp=array
        switch (type) {
            case 1:
                temp=sortObjectsArray(temp, 'price',{order: 'asc'})
                break;
            case 2:
                temp=sortObjectsArray(temp, 'price',{order: 'desc'})
                break;
            case 3:
                temp = [...temp].sort((a, b) => {
                    return b.rating.rate - a.rating.rate;
                });
                break;
        }

        return temp
    }

    useEffect(()=>{
        let temp=[]
        if(sortType!==0) {
            temp = sortFunction(filterProducts, sortType)
            setFilterProducts(temp)
        }
    },[sortType])


    return(loading?<Spinner/>:
        <>
            <Breadcrumbs current={'محصولات'} path={p}/>
            <section className='shop'>
                <div className='container'>
                    <div className='inner'>
                        <div className='shop-filter'>
                            <div className='box'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <h2 className='title'>فیلترها</h2>
                                    <button type='button' className='clear-filter' onClick={clearFilters}>حذف فیلترها</button>
                                </div>
                                <div className='block'>
                                    <h2 className='title'>دسته بندی ها</h2>
                                    <div><label className='cat-filter'><input type='checkbox' ref={cat4} onChange={e=>catFilter("women's clothing",e.target.checked)}/><i><FontAwesomeIcon icon={faCheck}/></i><span>زنانه</span></label></div>
                                    <div><label className='cat-filter'><input type='checkbox' ref={cat3} onChange={e=>catFilter("men's clothing",e.target.checked)}/><i><FontAwesomeIcon icon={faCheck}/></i><span>مردانه</span></label></div>
                                    <div><label className='cat-filter'><input type='checkbox' ref={cat2} onChange={e=>catFilter("jewelery",e.target.checked)}/><i><FontAwesomeIcon icon={faCheck}/></i><span>جواهرات</span></label></div>
                                    <div><label className='cat-filter'><input type='checkbox' ref={cat1} onChange={e=>catFilter("electronics",e.target.checked)}/><i><FontAwesomeIcon icon={faCheck}/></i><span>الکترونیکی</span></label></div>
                                </div>
                                <div className='block custom'>
                                    <h2 className='title'>محدوده قیمت</h2>
                                    <InputRange
                                        maxValue={1000}
                                        maxLabel={'بیشترین'}
                                        minLabel={'کمترین'}
                                        minValue={0}
                                        value={value}
                                        direction='rtl'
                                        onChange={value =>setValue(value)} />
                                </div>
                            </div>
                        </div>
                        <div className='shop-items'>
                            <div className='sort-sec'>
                                <FontAwesomeIcon icon={faArrowDownWideShort}/>
                                <span>مرتب سازی:</span>
                                <button type='button' onClick={()=>setSortType(1)} className={sortType===1?'active':''}>ارزانترین</button>
                                <button type='button' onClick={()=>setSortType(2)} className={sortType===2?'active':''}>گرانترین</button>
                                <button type='button' onClick={()=>setSortType(3)} className={sortType===3?'active':''}>بیشترین امتیاز</button>
                            </div>
                            {isLoading?<Spinner/>:
                                <div className='product-row '>
                                    {filterProducts.slice(itemOffset, itemOffset + itemsPerPage)?.map((product) => (
                                            <div key={product?.id} className='product-col'>
                                                <ProductCart product={product} />
                                            </div>
                                        )
                                    )}
                                </div>
                            }
                            <ReactPaginate
                                ref={paginationRef}
                                className='pagination-sec'
                                breakLabel="..."
                                nextLabel={<FontAwesomeIcon icon={faAngleLeft}/>}
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={5}
                                pageCount={pageCount}
                                previousLabel={<FontAwesomeIcon icon={faAngleRight}/>}
                                renderOnZeroPageCount={null}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export  default Products