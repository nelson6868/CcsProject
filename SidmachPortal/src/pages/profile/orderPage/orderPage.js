import React, { useEffect, useState } from 'react';
import './orderPage.css';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Link, useHistory } from 'react-router-dom';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';
import FlipToFrontIcon from '@material-ui/icons/FlipToFront';
// import ProfileTopSell from '../ProfileTopsell'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useStateValue } from '../../productdetails/Stateprovider';
import { Tabs, Tab, Col, Modal } from 'react-bootstrap';
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';





function MyVerticallyCenteredModal(props) {
    const [{ userData }] = useStateValue();
    const items = props.tempData;


    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Order Details
          </Modal.Title>
        </Modal.Header>

                {/* {openOrders.map((items, i) => ( */}
        { items ?
                items.orders.map((item, i) => (
                <Modal.Body key={item.id}>
                <h4 style={{fontSize: '120%'}}>Order No: {item.order} </h4>
                <p>
                <span>{item.quantity} Item</span> <br />
                <span>Placed on {items.created_at}</span> <br />
                <span>Total: ₦{item.subtotal} </span> <br />
                </p>

                <Modal.Footer />
                <Modal.Title id="contained-modal-title-vcenter" className='ml-2 mb-2' style={{marginTop: '-1rem', fontSize: '100%'}}>
                ITEMS IN YOUR ORDER
                </Modal.Title>
                <Card style={{ width: '47rem' }} className='ml-2 mb-2'>
                <Col className='d-flex'>
                    <Card.Img variant="top" src={item.image} style={{height: '10rem', width: '10rem', marginLeft:'-0.9rem'}} className='mt-4'/>
                    <Card.Body>
                        <Card.Title style={{fontSize: '150%'}}>{item.title}</Card.Title>
                        <Card.Text>
                        QTY: {item.quantity} <br />
                        <p>Total: ₦{item.unit_price}</p>
                        </Card.Text>
                        <Card.Text>

                        {
                            items.is_completed === false ? <Button style={{height: '1.8rem', width: '5rem', marginTop: '1rem', backgroundColor: '#green', borderRadius: 'none', border: 'none', fontSize: '70%'}}>PENDING</Button> : items.is_completed === true ? <Button style={{height: '1.8rem', width: '5rem', marginTop: '1rem', backgroundColor: '#b8b8b8', borderRadius: 'none', border: 'none', fontSize: '70%'}} disabled>CLOSED</Button> : ''}

                        {/* <Button style={{height: '1.8rem', width: '5rem', marginTop: '1rem', backgroundColor: '#green', borderRadius: 'none', border: 'none', fontSize: '70%'}}>{items.is_completed === false ? 'DELIVERED' : items.is_completed === true ? 'CLOSED':''}</Button> */}
                        </Card.Text>
                        <Card.Text>
                        On {items.created_at}
                        </Card.Text>
                    </Card.Body>
                    <Link to='/productPage/' style={{textDecoration: 'none'}}>
                    <Button style={{height: '2.5rem', width: '10rem', marginTop: '1rem', backgroundColor: '#282E52', borderRadius: 'none', border: 'none'}}>Buy Again</Button>
                    </Link>
                </Col>
                </Card>

                <Col style={{width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <Card style={{ width: '22.5rem' }}>
                    <Card.Header>PAYMENT INFORMATION</Card.Header>
                    <Card.Body>
                        <Card.Text>
                        <strong> Payment Method </strong>
                        <p> {items.payment_method} </p>
                        <br/>

                        <strong> Payment Details </strong>
                        <p>
                        <span>Items total: ₦{item.unit_price}</span> <br />
                        <span>Shipping Fees: ₦0</span> <br />
                        <span>Total: ₦{item.subtotal} </span> <br />
                        </p>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '22.5rem' }}>
                    <Card.Header>DELIVERY INFORMATION</Card.Header>
                    <Card.Body>
                        <Card.Text>
                        <strong> Delivery Method </strong>
                        <p> Standard Delivery </p>
                        <br/>

                        <strong> Shipping Address </strong>
                        <p>
                        <span>Name: {userData.first_name}</span> <br />
                        <span>{items.shipping_address.address_line_1}</span> <br />
                        <span>{items.shipping_address.address_line_2}</span> <br />
                        <span>{items.shipping_address.town_city}</span> <br />
                        <span>{items.shipping_address.state}</span> <br />
                        </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                </Modal.Body>            
        ))
        :
        <></>

        }
        
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}



function OrderPage() {
    const [{ userData }] = useStateValue();
    const [modalShow, setModalShow] = useState(false);
    const [openOrders, setOpenOrders] = useState([]);
    const [closedOrders, setClosedOrders] = useState([]);
    const [tempData, setTempData] = useState("")
    const [loading, setLoading] = useState(false);


    const getOpenOrders = async () => {
        try {
            await axios.get("https://sidcloud.azurewebsites.net/api/v1/products/get-user-open-order/",
                {
                    headers: {
                        // "Access-Control-Allow-Origin": "*",
                        Authorization: `Bearer ${userData.token}`
                    }
                })
                .then(res => {
                    console.log("res", res.data)

                    setOpenOrders(res.data)

                })
                setLoading(true)

        } catch (error) {
            console.log("error", error);
        }
    }





    useEffect(() => {
        getOpenOrders();
        // eslint-disable-next-line
    }, [])



    const getClosedOrders = () => {
        try {
            axios.get("https://sidcloud.azurewebsites.net/api/v1/products/get-user-closed-order/",
                {
                    headers: {
                        // "Access-Control-Allow-Origin": "*",
                        Authorization: `Bearer ${userData.token}`
                    }
                })
                .then(res => {
                    console.log("res", res.data)

                    setClosedOrders(res.data)

                })

        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        getClosedOrders();
        // eslint-disable-next-line
    }, [])

    const history = useHistory();

    const logOut = () => {
        localStorage.clear("userData, cart")
        history.push('/Login');
        window.location.reload();
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 pl-4">
                    <Card className="width1" >
                        <Link to="/ProfilePage" style={{ color: "#000", textDecoration: 'none' }}> <Card.Header id="arrow" style={{ paddingRight: "17px" }} > < AccountCircleIcon className="texthover1 arrow" />
                            <span style={{ paddingLeft: "17px" }}>My Account</span>  </Card.Header></Link>
                        <ListGroup variant="flush">
                            <Link to="/OrderPage" style={{ color: "#000", textDecoration: 'none' }}>
                                <ListGroup.Item className="texthover" id="arrow"><DriveEtaIcon className="arrow" />
                                    <span style={{ paddingLeft: "17px" }}>  Orders</span></ListGroup.Item>
                            </Link>
                            <Link to="/InboxPage" style={{ color: "#000", textDecoration: 'none' }}>
                                <ListGroup.Item className="texthover" id="arrow"><MailOutlineIcon className="arrow" />
                                    <span style={{ paddingLeft: "17px" }}> Inbox</span></ListGroup.Item>
                            </Link>
                            <Link to="/Pendingview" style={{ color: "#000", textDecoration: 'none' }}>
                                <ListGroup.Item className="texthover" id="arrow">< DynamicFeedIcon className="arrow" />
                                    <span style={{ paddingLeft: "17px" }}>  Pending Reviews</span></ListGroup.Item> </Link>
                            <Link to="/ProfileTransaction" style={{ color: "#000", textDecoration: 'none' }}>
                                <ListGroup.Item className="texthover" id="arrow"><FlipToFrontIcon className="arrow" />
                                    <span style={{ paddingLeft: "17px" }}> Transaction History</span></ListGroup.Item>
                            </Link>
                            <Link to="/saveitem" style={{ color: "#000", textDecoration: 'none' }}>
                                <ListGroup.Item className="texthover" id="arrow"> <FavoriteIcon className="arrow" />
                                    <span style={{ paddingLeft: "17px" }}>Saved Items</span></ListGroup.Item>
                            </Link>
                            <Link to="/Recentview" style={{ color: "#000", textDecoration: 'none' }}>
                                <ListGroup.Item className="texthover" id="arrow">
                                    <FlipCameraAndroidIcon className="arrow" />
                                    <span style={{ paddingLeft: "17px" }}>Recently Viewed</span></ListGroup.Item></Link>

                        </ListGroup>
                        <ListGroup variant="flush">
                            <Link to="/DetailsEdit" style={{ color: "#000", textDecoration: 'none' }}>
                                <ListGroup.Item className="texthover">
                                    <span style={{ paddingLeft: "27px" }}>Details</span></ListGroup.Item></Link>
                            <Link to="/AddressBook" style={{ color: "#000", textDecoration: 'none' }}>
                                <ListGroup.Item className="texthover">
                                    <span style={{ paddingLeft: "27px" }}>Address Book</span> </ListGroup.Item>
                            </Link>
                            <Link to="/ChangePassword" style={{ color: "#000", textDecoration: 'none' }}>
                                <ListGroup.Item className="texthover">
                                    <span style={{ paddingLeft: "25px" }}>Change Password</span></ListGroup.Item></Link>
                            <Link to="/newsLetter" style={{ color: "#000", textDecoration: 'none' }}>
                                <ListGroup.Item className="texthover" >
                                    <span style={{ paddingLeft: "25px" }}>NewsLetter Preferences</span></ListGroup.Item></Link>

                            <ListGroup.Item className="texthover" id="arrow" ><ArrowBackIcon className="arrow" />

                                <span style={{ paddingLeft: "7px" }} onClick={logOut}>LOGOUT</span>
                            </ListGroup.Item>


                        </ListGroup>

                    </Card>

                </div>
                <div className="col-lg-9">
                    <Card>
                        <Card.Header className="texthover" style={{ fontSize: "1.5rem", fontWeight: '20rem', color: "#282E52" }}>Orders</Card.Header>
                        <Card body>
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="home" title="OPEN ORDERS">
                                { loading ?
                                openOrders.length !== 0 ? 
                                    openOrders.map((items, i) => (
                                        items.orders.length !== 0 ?
                                            items.orders.map((item, index) => {
                                                return(
                                                    <Card style={{ width: '48rem' }} key={item.id}>
                                                        <Col className='d-flex'>
                                                        <Card.Img variant="top" src={item.image} style={{height: '10rem', width: '10rem', marginLeft:'-0.9rem'}} />
                                                        <Card.Body>
                                                            <Card.Title style={{fontSize: '150%'}}>{item.title}</Card.Title>
                                                            <Card.Text>
                                                            Order {item.order}
                                                            </Card.Text>
                                                            <Card.Text>
                                                            <Button style={{height: '1.8rem', width: '5rem', marginTop: '1rem', backgroundColor: '#green', borderRadius: 'none', border: 'none', fontSize: '70%'}}>PENDING</Button>
                                                            </Card.Text>
                                                            <Card.Text>
                                                            {items.created_at}
                                                            </Card.Text>
                                                        </Card.Body>

                                                        <Button style={{height: '2.5rem', width: '10rem', marginTop: '1rem', backgroundColor: '#282E52', borderRadius: 'none', border: 'none'}} 
                                                        onClick={() => {
                                                            setTempData(items)                                                            
                                                            setModalShow(true)
                                                        }} key={i} data-id={item.id}>
                                                            SEE DETAILS
                                                        </Button>

                                                            <MyVerticallyCenteredModal
                                                                show={modalShow}
                                                                tempData={tempData}
                                                                onHide={() => setModalShow(false)}
                                                                
                                                            />
                                                        </Col>
                                
                                                    </Card>
                                                )
                                            })
                                            : ""
                                ))
                                : "No Open Orders... Thank you!" : <ReactBootStrap.Spinner animation="border" />  
                                }
                            </Tab>


                            <Tab eventKey="profile" title="CLOSED ORDERS">

                            { loading ?
                            closedOrders.length !== 0 ? 
                            closedOrders.map((items, i) => (

                                items.orders.length !== 0 ?
                                items.orders.map((item, i) => {
                                    return (
                            <Card style={{ width: '48rem' }} key={item.id}>
                                    <Col className='d-flex'>
                                    <Card.Img variant="top" src={item.image} style={{height: '10rem', width: '10rem', marginLeft:'-0.9rem'}} />
                                    <Card.Body>
                                        <Card.Title style={{fontSize: '150%'}}>{item.title}</Card.Title>
                                        <Card.Text>
                                        Order {item.order}
                                        </Card.Text>
                                        <Card.Text>
                                        <Button style={{height: '1.8rem', width: '5rem', marginTop: '1rem', backgroundColor: '#b8b8b8', borderRadius: 'none', border: 'none', fontSize: '70%'}} disabled>CLOSED</Button>
                                        </Card.Text>
                                        <Card.Text>
                                        {items.created_at}
                                        </Card.Text>
                                    </Card.Body>


                                    <Button style={{height: '2.5rem', width: '10rem', marginTop: '1rem', backgroundColor: '#282E52', borderRadius: 'none', border: 'none'}} onClick={() => {
                                                            setTempData(items)                                                            
                                                            setModalShow(true)
                                                        }} key={i} data-id={item.id}>
                                                            SEE DETAILS
                                                        </Button>

                                                            <MyVerticallyCenteredModal
                                                                show={modalShow}
                                                                tempData={tempData}
                                                                onHide={() => setModalShow(false)}
                                                                
                                                            />

                                    {/* <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                        
                                    /> */}
                                    </Col>
              
                                </Card>
                                )})
                                : ""
                                ))
                                : "" : <ReactBootStrap.Spinner animation="border" />
                            }
                            </Tab>
                        </Tabs>
                        </Card>    
                    </Card>
                </div>
            </div>

            {/* <div style={{ width: "100%", height: "100px" }}>
                <p style={{ paddingTop: "58px", fontWeight: "100px", fontSize: "28px" }}>Recently Viewed</p>
            </div>
            <ProfileTopSell /> */}
            <div style={{ width: "100%", height: "100px" }}></div> 

        </div>


    );

}



export default OrderPage;