import React from 'react';
import './Inbox.css';
import Card from 'react-bootstrap/Card'
// import CardGroup from 'react-bootstrap/CardGroup'
import ListGroup from 'react-bootstrap/ListGroup'
// import Button from 'react-bootstrap/Button'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Link } from 'react-router-dom';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';
import FlipToFrontIcon from '@material-ui/icons/FlipToFront';
// import EditIcon from '@material-ui/icons/Edit';
// import ProfileTopSell from '../ProfileTopsell'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import { useStateValue } from '../../productdetails/Stateprovider';
// import TouchAppIcon from '@material-ui/icons/TouchApp';
// import { Tabs, Tab, Col, Row, Modal } from 'react-bootstrap';
// import HP7B2 from '../../../assets/HP7B2.svg';
// import axios from 'axios';
// import { useParams } from "react-router";
import { useHistory } from 'react-router-dom';
// import * as ReactBootStrap from 'react-bootstrap';

function InboxPage() {
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
                        <Link to="/ProfilePage" style={{ color: "#000", textDecoration: 'none' }}> <Card.Header id="arrow" style={{ paddingRight: "17px" }} > < AccountCircleIcon className="texthover1 arrow"/>
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
                            <Link to="/Resetpassword" style={{ color: "#000", textDecoration: 'none' }}>
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
               
            </div>
            {/* <div style={{ width: "100%", height: "100px" }}>
                <p style={{ paddingTop: "58px", fontWeight: "100px", fontSize: "28px" }}>Recently Viewed</p>
            </div>
            <ProfileTopSell /> */}
            <div style={{ width: "100%", height: "100px" }}></div> 

        </div>


    );

}


export default InboxPage;
