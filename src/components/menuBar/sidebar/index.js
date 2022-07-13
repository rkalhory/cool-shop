import {useRef, useState,memo} from "react";
import {menuItems} from '../../../utils/values'
import {Link} from "react-router-dom";
import {createSub} from "../../../utils/createSub";
import { useOuterClick } from 'react-outer-click';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch } from '@fortawesome/free-solid-svg-icons'
import './style.scss'

const Sidebar=()=> {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useOuterClick(ref, (event) => {
        // event.preventDefault();
        setOpen(false)
    });

    return(
        <div ref={ref} style={{touchAction: 'none'}}>
            <button type={"button"} className={`menu-btn ${open?'open':''}`} onClick={()=>setOpen(s=>!s)}><span></span></button>
            <div className={`sidebar ${open?'open':''}`}  >
                <ul className='menu'>
                    {menuItems.map((item,index)=>(
                        <li key={index}>
                            <Link to={item?.link}>{item.title}</Link>
                            {item?.child?.length ? <><input type='checkbox' id='level1'/><label className='toggle-btn' htmlFor='level1'></label></> : ''}
                            {item?.child?.length?createSub(item?.child,true,2):''}
                        </li>
                    ))}
                </ul>
                <form className='search-form'>
                    <input type='text' placeholder='جستجو...'/>
                    <button type='button'><FontAwesomeIcon icon={faSearch} /></button>
                </form>
            </div>
        </div>

    )
}

export default memo(Sidebar)