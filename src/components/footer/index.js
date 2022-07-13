import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './style.scss'
import logo from '../../assets/images/icons/logo.png'
import {Link} from "react-router-dom";
import Support from "../support";

const Footer=()=> (
        <>
            <Support/>
            <footer className='footer'>
                <div className='container'>
                    <div className='content'>
                        <div className='footer-col'>
                            <img src={logo} alt='logo' className='logo'/>
                            <p>ما پلتفرمی مبتنی بر تکنولوژی هستیم که ماموریت خود را ایجاد تجربه‌ای خوشایند از خرید و فروش برای تمام مردم ایران می‌دانیم.</p>
                            <a href='tel:02188888888' className='contact-link'><FontAwesomeIcon icon={faPhone}/>021-88888888</a>
                            <a href='mailto:info@example.com' className='contact-link'><FontAwesomeIcon icon={faEnvelope}/>info@example.com</a>
                        </div>
                        <div className='footer-col'>
                            <h2 className='title'>فروشگاه</h2>
                            <ul className="link-list">
                                <li><Link to={'/products?type=1'}>زنانه</Link></li>
                                <li><Link to={'/products?type=2'}>مردانه</Link></li>
                                <li><Link to={'/products?type=3'}>جواهرات</Link></li>
                                <li><Link to={'/products?type=4'}>الکترونیکی</Link></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h2 className='title'>لینک های مفید</h2>
                            <ul className="link-list">
                                <li><Link to={'/products'}>محصولات</Link></li>
                                <li><Link to={'/about'}>درباره ما</Link></li>
                                <li><Link to={'/contact'}>تماس با ما</Link></li>
                                <li><Link to={'/details'}>جزئیات</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='copyright'>
                <p>کلیه حقوق این سایت متعلق به فروشگاه می باشد.</p>
            </div>
        </>
)

export default Footer