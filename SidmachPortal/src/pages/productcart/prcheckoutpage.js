import React from 'react'
import './prcheckoutpage.css'

function Prcheckoutpage({ title, image, unit_price, quantity, subtotal }) {


    return (
        <div className="productcart1">

            <div className="productquantity1">
                <span>
                    <img className="productcartimage1" src={image} alt="" />
                </span>
                <span>
                    <p className="productcart_title1"><strong>{title}</strong></p>
                    <span className='value1'>QTY:{quantity}</span>
                    {console.log(unit_price)}
                    <p className="cprice1"><strong>SUBTOTAL :</strong> ₦{subtotal}</p>

                </span>

            </div>
        </div>
    )
}
export default Prcheckoutpage;