import {useEffect, useLayoutEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faHeart,faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/images/icons/logo.png'
import './style.scss'
import {useAllCategories} from "../../customHooks";
import {useSelector} from 'react-redux'

const Menu=()=> {

    const {cart,wishList}=useSelector(state => state)
    const {data:categories=[],catLoading}=useAllCategories()

    const [width, setWidth] = useState(0);
    const [cartCount, setCartCount] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };



    useLayoutEffect(() => {
        function updateSize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('resize', updateSize);
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    useEffect(()=>{
        if (cart.length){
            let some=0
            cart.forEach((item)=>{
                some=some+item.qty
            });
            setCartCount(some)
        }else{
            setCartCount(0)
        }
    },[cart])




    return(
        <div className={`menu-bar ${scrollPosition>0?'fix-bar':''}`}>
            <div className='container'>
                <div className='content'>
                    <div className='content-right'>
                        <Link to={'/'} className='logo'>
                            <img src={logo} className='logo-img' alt='لوگو'/>
                        </Link>
                        {width>=992?<Navbar categories={categories}/>:''}
                    </div>
                    <div className='menu-bar-icons'>
                        {/*{width>=992&&<button type='button' className='search-btn'><FontAwesomeIcon icon={faSearch} /></button> }*/}
                        <Link to='/cart' className='link-btn'><FontAwesomeIcon icon={faShoppingCart} /><span className='count'>{cartCount}</span></Link>
                        <Link to='/wish-list' className='link-btn'><FontAwesomeIcon icon={faHeart}/><span className='count'>{wishList.length}</span></Link>
                        {width<992&&<Sidebar categories={categories}/> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu