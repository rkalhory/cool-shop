import {Link} from "react-router-dom";

export function createSub(list,side,level) {
    let temp=<ul>{list.map((item,index)=>(
        <li key={index}>
            <Link to={item.link}>{item.title}</Link>
            {side&&item?.child?.length ? <><input type='checkbox' id={`level${level}`} /><label className='toggle-btn' htmlFor={`level${level}`}></label></> : ''}
            {item?.child?.length&&createSub(item?.child,side,level+1)}
        </li>
    ))}</ul>
    return temp
}