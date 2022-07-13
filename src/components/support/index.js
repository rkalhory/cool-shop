import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping,faCreditCard,faRightLeft,faHeadphones } from '@fortawesome/free-solid-svg-icons'
import './style.scss'

const Support=()=> (
        <section className='support-sec'>
            <div className='container'>
                <div className='content'>
                    <div className='item'>
                        <FontAwesomeIcon icon={faBasketShopping}/>
                        <div>
                            <h3>ارسال رایگان</h3>
                            <span>بالای 200 هزار تومان</span>
                        </div>
                    </div>
                    <div className='item'>
                        <FontAwesomeIcon icon={faCreditCard}/>
                        <div>
                            <h3>پرداخت امن</h3>
                            <span>درگاه پرداخت اینترنتی</span>
                        </div>
                    </div>
                    <div className='item'>
                        <FontAwesomeIcon icon={faRightLeft}/>
                        <div>
                            <h3>ضمانت بازگشت</h3>
                            <span>هفت روز ضمانت بازگشت</span>
                        </div>
                    </div>
                    <div className='item'>
                        <FontAwesomeIcon icon={faHeadphones}/>
                        <div>
                            <h3>پشتیبانی 24/7</h3>
                            <span>۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )


export default Support