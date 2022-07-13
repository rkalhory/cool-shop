import {menuItems} from '../../../utils/values'
import {Link} from "react-router-dom";
import {createSub} from "../../../utils/createSub";
import './style.scss'

const Navbar=()=> (
        <nav>
            <ul className='main-menu'>
                {menuItems.map((item,index)=>(
                    <li key={index}>
                        <Link to={item?.link}>{item.title}</Link>
                        {item?.child?.length?createSub(item?.child,false):''}
                    </li>
                ))}
            </ul>
        </nav>
    )


export default Navbar