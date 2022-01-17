import React, { useEffect } from 'react'
import { Card, Button, ListGroup, ListGroupItem, Form, Col, } from 'react-bootstrap';
import './CheckoutPage.css'


import { useStateValue } from '../productdetails/Stateprovider';
import CurrencyFormat from 'react-currency-format'

import Prcheckoutpage from './prcheckoutpage';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import LockIcon from '@material-ui/icons/Lock';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import Paper from '@material-ui/core/Paper';
// <span><CancelIcon onClick ={(event) => [removeItem(),localStorage.clear(id)]}/></span>
// import chechoutUser from './Cart/chechoutUser';
import { Link } from 'react-router-dom';
import Checkoutform from './Cart/Cartvalid';
import axios from 'axios';
import Swal from "sweetalert2";




// import AuthContext from '../Loginpage/login'

const useStyles = makeStyles({
    root: {
        // width: 1300,
        marginTop: 10,
        fontWeight: "bold",
        backgroundColor: "beige",

    },
    iconOnly: {
        height: 50
    },
    wrapper: {
        backgroundColor: "blue"
    }

});

function Checkoutpage({ id, title, image, unit_price, rating, subtotal, quantity, props }) {
    const [{ basket }] = useStateValue();
    const [{ userData }] = useStateValue();
    const [userDetails, setUserDetails] = React.useState({});

    console.log(basket)
    console.log(userData)
    //function to get total amount of objects in basket
    const getCartTotal = (basket) =>
        basket.reduce((amount, item) => item.unit_price === 0.00 ? 0.00 : parseFloat(item.unit_price.replace(",", "")) * item.quantity * item.tenure + amount, 0);
    const classes = useStyles();


    
    //here we are consuming Paystack API 
    
    const payStackApi = () => {
        
        try {
            // setLading(true)
            const data = {
                basket
                // quantity: basket[].quantity,
                // unit_price: basket[id].unit_price,
                // image: basket[id].image
            }
            
            axios.post("https://sidcloud.azurewebsites.net/api/v1/products/place_order/", data,

            
                // console.log(basket[0].quantity)
                {
                    headers: {
                        // "Access-Control-Allow-Origin": "*",
                        Authorization: `Bearer ${userData.token}`
                    }
                }).then(res => {
                    console.log('res', res.data)
                    // .log(userData && userData.token)
                    // if (userData.token) {
                    //     basket('')
                    
                    // }
                })
                .catch(error => {
                    // setLoading(false)
                    console.log(error);

                    
                    
                    
                })
                
            } catch (error) {
                console.log("error", error);
            }
        }
        
        useEffect(() => {
            payStackApi()
            // eslint-disable-next-line
        }, []);
        
        
        
        
        // const cartItemToApi = () => {
            
            //     try {
                //         // setLading(true)
                //         const data = {
                    //             basket
                    
                    
                    const getUpdateDetails = () => {
                        axios.get("https://sidcloud.azurewebsites.net/api/v1/account/user/update-address/",
            {
                headers: {
                    // "Access-Control-Allow-Origin": "*",
                    Authorization: `Bearer ${userData.token}`
                }
            })
            .then(res => {
                console.log("res", res.data)
                
                console.log(userData)
                console.log(userData.token)
                if (res.data.length) {
                    setUserDetails(res.data[0])
                    console.log("userDetals", userDetails)
                    // setPhone(res.data.phone_number)
                    // setCompanyname(res.data.company_name)
                    // setPostalcode(res.data.postal_code)
                    // setCity(res.data.town_city)
                    // setState(res.data.state)
                    // setCountry(res.data.country)
                    // setAddress1(res.data.address_line_1)
                    // setAddress2(res.data.address_line_2)
                    //swal("Update was successful, Proceed to to payment.")
                    //history.push('/login');
                    
                    
                    // setLoading(false);
                }
            })
        }
        
        useEffect(() => {
            getUpdateDetails()
            // eslint-disable-next-line
        }, []);




    const cartItemToApi = () => {

        try {
            // setLading(true) 


            if (!(Object.keys(userDetails).length === 0 && userDetails.constructor === Object)) {
                const data = {
                    basket

                }
                console.log(data)

                axios.post("https://sidcloud.azurewebsites.net/api/v1/products/place_order/", data,


                    // console.log(basket[0].quantity)
                    {
                        headers: {
                            // "Access-Control-Allow-Origin": "*",
                            Authorization: `Bearer ${userData.token}`
                        }
                    }).then(res => {
                        console.log('res', res.data)
                        window.location = res.data.data.authorization_url
                    })
                    .catch(error => {
                        // setLoading(false)
                        console.log(error);

                    })

            } else {



                Swal.fire({

                    text: "Please provide your informations",
                    icon: 'warning',
                    customClass: 'swal-wide',
                });
            }

        } catch (error) {
            console.log("error", error);
        }
    }







    return (
        <div className="checkoutp1">
            {/* <Card border="secondary" className="text-center w-50 h-75">
                <Card.Header>ADDRESS DETAILS</Card.Header>
                <Card.Body> */}
            <section className="btmnav" style={{ width: '100%' }}>
                <BottomNavigation showLabels className={classes.root}>
                    <BottomNavigationAction label="SEAMLESS INTEGRATION" variant="primary" value="recents" icon={<DeviceHubIcon />} />
                    <BottomNavigationAction label="FREE RETURNS" value="favorites" icon={<AutorenewIcon />} />
                    <BottomNavigationAction label="BEST PRICES" value="nearby" icon={<LoyaltyIcon />} />
                    <BottomNavigationAction label="SECURE PAYMENT" value="folder" icon={<LockIcon />} />
                </BottomNavigation>
            </section>
            <div className="details">
                {/* <span><h6>Address Details</h6> </span>
                <span> <h6>Order Summary</h6></span> */}
            </div>

            <div className="checkoutp">
                {/* <chechoutUser/> */}
                <Checkoutform getUpdateDetails={getUpdateDetails} userInformation={userDetails} />
                {/* </Card.Body>

                <ListGroupItem>></ListGroupItem>
            </Card> */}


                {/* <Card.Header ><strong>YOUR ORDER</strong></Card.Header> */}
                < Paper style={{ maxWidth: '100%', height: 'auto' }}>


                    <Card.Header style={{
                        color: "#282E52",
                        textAlign: "center", fontSize: "20px"
                    }}>YOUR ORDER</Card.Header>

                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                            <div className="ppcart">

                                {basket.map(item => (
                                    <ListGroupItem>
                                        <Prcheckoutpage

                                            id={item.id}
                                            title={item.title}
                                            image={item.image}
                                            price={item.unit_price}
                                            rating={item.rating}
                                            quantity={item.quantity}
                                            tenure={item.tenure}
                                            subtotal={item.subtotal}
                                        />
                                    </ListGroupItem>
                                ))
                                }
                            </div>

                        </ListGroupItem>
                        <ListGroupItem>

                            <div className="checkouttotal">

                                <CurrencyFormat
                                    renderText={(value) => (

                                        <p style={{ marginTop: '50px' }}>

                                            <strong> TOTAL:</strong><strong className="totalvalue1">{`${value}`}</strong>
                                            <p>COUPON:
                                                <Form>
                                                    <Form.Row className="align-items-center">
                                                        <Col sm={4} className="my-1">
                                                            <Form.Label htmlFor="inlineFormInputName" srOnly>
                                                                Name
                                                            </Form.Label>
                                                            <Form.Control id="inlineFormInputName" placeholder="Enter Coupon" />
                                                        </Col>
                                                        <Col xs="auto" className="my-1">
                                                            <Button style={{ backgroundColor: "#282E52" }} type="submit">Submit</Button>
                                                        </Col>
                                                    </Form.Row>
                                                </Form>
                                            </p>
                                        </p>

                                    )}
                                    decimalScale={2}
                                    value={getCartTotal(basket)}
                                    displayType={"text"}
                                    thousandSeperator={true}
                                    prefix={"₦"}
                                />
                            </div>

                        </ListGroupItem>

                        <ListGroupItem><Link to="/productcart"><Button className="cpbutton" style={{ backgroundColor: "#282E52" }}>Go to cart</Button>
                        </Link>
                            <ListGroupItem className="supportcart">
                                <p>NEED HELP?</p>
                                <p>Contact our support team</p>
                                <Link to="/ContactUs"> <Button className="cpbutton2" style={{ backgroundColor: "#282E52" }}>Support</Button></Link>
                            </ListGroupItem>
                        </ListGroupItem>
                    </ListGroup>
                </Paper>


                {/* {redir()} */}
            </div>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '-15%', marginBottom: '5%'}}>
            <Button onClick={cartItemToApi} style={{ backgroundColor: "#282E52", border: 'none', borderRadius: '0%' }} >PROCEED TO PAYMENT</Button>
            </div>

        </div>
    )
}
export default Checkoutpage
