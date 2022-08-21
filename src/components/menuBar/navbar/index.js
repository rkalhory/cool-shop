import {menuItems} from '../../../utils/values'
import {Link} from "react-router-dom";
import {createSub} from "../../../utils/createSub";
import './style.scss'
import {useAllCategories} from "../../../customHooks";

const Navbar=({categories})=> {
    return(
        <nav>
            <ul className='main-menu'>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item?.link}>{item.title}</Link>
                        {/*{item?.child?.length ? createSub(item?.child, false) : ''}*/}
                        {item?.child ? <ul>{categories.map((item)=>(
                            <li key={item?.id}>
                                <Link to={`/products?type=${item?.id}`}>{item.title}</Link>
                            </li>
                        ))}</ul> : ''}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar