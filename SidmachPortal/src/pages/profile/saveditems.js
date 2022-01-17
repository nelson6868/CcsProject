import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Link } from 'react-router-dom';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';
import FlipToFrontIcon from '@material-ui/icons/FlipToFront';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useStateValue } from '../productdetails/Stateprovider';
import './saveditems.css'
import { useHistory } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';



function SavedItems() {
    const [{ userData }] = useStateValue();
    const [saveditem, setSavedItem] = useState([]);
    const history = useHistory();


    const getSavedItem = () => {
        try {
            axios.get("products/saved-items/", {
                headers: {
                    // "Access-Control-Allow-Origin": "*",
                    Authorization: `Bearer ${userData.token}`
                }
            }).then(res => {
                // const saveddata = res.data;
                setSavedItem(res.data)
                console.log('res', res.data)
            })

        } catch (error) {
            console.log("error", error);
        }
    }

    console.log(userData.token)
    useEffect(() => {
        getSavedItem();
        // eslint-disable-next-line
    }, [])

    const removeitem = (el) => {
        // debugger
        console.log(el)
        let newCart1 = [...saveditem]
        let itemInSaved = newCart1.find((item) => item.product.id === el.id);


        console.log(itemInSaved)


        try {



            axios.delete(`https://sidcloud.azurewebsites.net/api/v1/products/saved-items/${itemInSaved.id}`,



                {
                    headers: {
                        // "Access-Control-Allow-Origin": "*",
                        Authorization: `Bearer ${userData.token}`
                    }
                }).then(res => {
                    // itemInSaved.is_favourite = false
                    getSavedItem();

                }).catch(error => {
                    // setLoading(false)
                    console.log(error);
                })

        } catch (error) {
            console.log("error", error);
        }
    }

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
                            <Link to="/inboxPage" style={{ color: "#000", textDecoration: 'none' }}>
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
                            <Link to="/Resetpassword" style={{ color: "#000", textDecoration: 'none' }}>
                                <ListGroup.Item className="texthover">
                                    <span style={{ paddingLeft: "25px" }}>Change Password</span></ListGroup.Item></Link>
                            <Link to="/newsLetter" style={{ color: "#000", textDecoration: 'none' }}>
                                <ListGroup.Item className="texthover" >
                                    <span style={{ paddingLeft: "25px" }}>NewsLetter Preferences</span></ListGroup.Item></Link>

                            <ListGroup.Item className="texthover" id="arrow"><ArrowBackIcon className="arrow" />
                                <Link to="/Login" style={{ color: "#000", textDecoration: 'none' }}>
                                    <span style={{ paddingLeft: "17px" }} onClick={logOut} >   LOGOUT</span></Link>
                            </ListGroup.Item>


                        </ListGroup>
                    </Card>

                </div>
                <div className="col-lg-9">
                    <Card className="shadow">
                        <Card.Header className="texthover" style={{ fontSize: "35px", color: "#282E52" }}>Saved Items   ({saveditem.length})</Card.Header>

                        <Card.Body className="d-flex" style={{ border: "none", marginBottom: "50px" }}>

                            <Card className="width">

                                {saveditem.map((item, i) =>

                                    <ListGroup.Item value={item.id} key={i} style={{ width: "750px" }}>
                                        <div className="saveditems">

                                            <span> <Link to={`/productdetails/${item.id}/`} ><img src={item.product.product_image} style={{ width: "150px", marginLeft: "-100px", marginTop: "10px" }} alt=''></img></Link></span>
                                            <span style={{ marginLeft: "-50px", marginTop: "20px" }}>
                                                <p style={{ maxWidth: "100px" }}>{item.product.name}</p>
                                                <p><strong>₦{item.product.regular_price === null ? '0.00(Free)' : item.product.regular_price}</strong></p>

                                            </span>
                                            <span style={{ marginLeft: "60px", marginTop: "60px", cursor: 'pointer' }} key={item.id} onClick={() => removeitem(item.product)}><DeleteIcon  />REMOVE</span>
                                        </div>
                                    </ListGroup.Item>
                                )}
                            </Card>

                        </Card.Body>
                    </Card>




                </div>
            </div>
        </div>
    )
}
export default SavedItems