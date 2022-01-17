import React from 'react';
// import { RiDeleteBin6Line } from 'react-icons/ri';
// import { ImCancelCircle } from 'react-icons/im';
import ProductPageBg from '../../../assets/ProductPageBg.svg';
import '../Subtotal.css'
import styles from '../Cart/Cart.module.css'
import Productcart2 from '../Cart/ProductCart2'
import { useStateValue } from '../../productdetails/Stateprovider';
import { Link } from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'




function Cart() {

    const [{ basket }] = useStateValue();
    const [{ userData }] = useStateValue();

    // for posting cart to api

    //     const addCartItem = () => {
    //         try {
    //             axios.post("https://csp-siddy.herokuapp.com/api/v1/products/carts/", {
    //                 // method: "GET",
    //                 // url: "https://catfact.ninja/fact",
    //             }).then(res => {
    //                 console.log("res", res.data)
    //             })

    //         } catch (error) {
    //             console.log("error", error);
    //         }
    //     }

    //     useEffect(() => {
    //         addCartItem();
    //     }, [])

    // parseFloat(unit_price.replace(",", ""))

    //function to get cart total
    const getCartTotal = (basket) =>
        basket.reduce((amount, item) => item.unit_price === 0.00 ? 0.00 : parseFloat(item.unit_price.replace(",", ""))
            * item.quantity * item.tenure + amount, 0);


    return (
        <div className={styles.Cart}>

            {

                basket.length === 0 ? (
                    <div style={{ textAlign: 'center', marginBottom: '-10%'}}>
                        <h2 style={{ marginTop: '12%' }}>Your shopping cart is empty</h2>

                        <img style={{marginBottom: '1%', marginTop: '1%', opacity: '0.5', width: '300px' }} src="https://atlas-content-cdn.pixelsquid.com/assets_v2/242/2428417978807621408/previews/F07-400x400.jpg" alt="cart" />
                        <p ><Link to="/productPage"><button className="cshopping"><strong>Continue shopping</strong> </button></Link>
                        </p>
                        {/* <div style={{ width: "100%", height: "100px" }}>
                            <p style={{ paddingTop: "58px", fontWeight: "100px", fontSize: "28px" }}>Recently Viewed</p>

                            
                        </div>
                        <ProfileTopSell /> */}
                    </div>
                ) : (
                    <div>
                        <div className={styles.Img} style={{height: '65vh'}}>
                            <img src={ProductPageBg} alt="" style={{ width: '100%', }} />
                        </div>
                        <div className={styles.CartWrapper}>

                            <h1 style={{ fontFamily: 'Poppins', fontWeight: '800', fontSize: '40px' }}>Cart ({(basket.reduce((acc, item) => acc + item.quantity, 0))} item(s))</h1>
                            <div className={styles.Labels}>
                                <h2>ITEM</h2>
                                <h2>QTY</h2>
                                <h2>UNIT PRICE</h2>
                                <h2>SUB TOTAL</h2>
                            </div>

                            {
                                basket.map(item => (

                                    <Productcart2
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        unit_price={item.unit_price}
                                        rating={item.rating}
                                        quantity={item.quantity}
                                        subtotal={item.subtotal}
                                        tenure={item.tenure}
                                        thousandSeperator={true}
                                    />

                                ))

                            }

                            <div className={styles.Line} />
                            <div className={styles.Total}>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <p>
                                            TOTAL:<span>{`${value}`}</span>
                                        </p>

                                    )}
                                    decimalScale={2}
                                    value={getCartTotal(basket)}
                                    displayType={"text"}
                                    thousandSeperator={true}
                                    prefix={"₦"}
                                />

                            </div>

                            <div className={styles.buttons}>
                                <Link to="/productPage"><button>Continue Shopping</button></Link>
                                {userData ?
                                    <Link to="/Checkoutpage"><button style={{ color: "#fff", textDecoration: 'none' }}>Proceed to Checkout</button></Link> : <Link to="/Login"><button style={{ color: "#fff", textDecoration: 'none' }}>Proceed to Checkout</button></Link>

                                }

                            </div>

                        </div>
                    </div>

                )
            }

        </div>
    )
}

export default Cart