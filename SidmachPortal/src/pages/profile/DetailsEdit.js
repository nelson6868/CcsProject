import React, { useState, useEffect } from 'react'
import './Profile.css';
import { Card, ListGroup, Button, Col, Form } from 'react-bootstrap';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Link } from 'react-router-dom';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';
import FlipToFrontIcon from '@material-ui/icons/FlipToFront';
// import ProfileTopSell from './ProfileTopsell'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useStateValue } from '../productdetails/Stateprovider';
import swal from 'sweetalert'
import axios from 'axios';



function DetailsEdit() {
    const [{ userData }] = useStateValue();
    // const [form, setForm] = useState({})
    // const [errors, setErrors] = useState({})
    // const [phone_number, setPhone] = useState("")
    const [first_name, setFirstname] = useState("")
    const [last_name, setLastname] = useState("")
    const [phone_number, setPhone] = useState("")
    // const [email, setEmail] = useState("")
    const [userinfo, setUserinfo] = useState({})

    const [setLoading] = useState(false)
    useEffect(() => {
        // console.log(userinfo)
        setLastname(userinfo.last_name)
        setFirstname(userinfo.first_name)
        setPhone(userinfo.phone_number)
        // setEmail(userinfo.email)
        // setPhone(userDetails.phone_number)

    }, [userinfo])
    // const setField = (field, value) => {
    //     setForm({
    //         ...form,
    //         [field]: value

    //     })
    //     // Check and see if errors exist, and remove them from the error object:
    //     if (!!errors[field]) setErrors({
    //         ...errors,
    //         [field]: null
    //     })
    // }
    const getUserDetails = () => {
        axios.get("https://csp-siddy.herokuapp.com/api/v1/account/user/user-profile/",
            {
                headers: {
                    // "Access-Control-Allow-Origin": "*",
                    Authorization: `Bearer ${userData.token}`
                }
            })
            .then(res => {
                console.log("res", res.data)

                console.log(userData && userData.token)
                // if (res.data.length) {
                setUserinfo(res.data)

                // setLoading(false);
                // }
            })
    }
    useEffect(() => {
        getUserDetails();
        // eslint-disable-next-line
    }, [])

    const Update = () => {
        try {
            // setLoading(true)
            const data = {

                first_name,
                last_name,
                phone_number
            }
            console.log(data)
            axios.put(`http://csp-siddy.herokuapp.com/api/v1/account/user/user-profile/${userinfo.id}/`, data,
                {
                    headers: {
                        // "Access-Control-Allow-Origin": "*",
                        Authorization: `Bearer ${userData.token}`
                    }
                })
                .then(res => {
                    console.log(res)
                    if (res.data) {
                        setFirstname("")
                        setLastname("")
                        setPhone("")
                        // setEmail("")
                        swal("Update Successful ")
                        // getUserDetails();
                        // setLoading(false);
                    }
                })
                .catch(error => {
                    setLoading(false)
                    console.log(error);
                    if (error.response.data.email) {
                        swal(error.response.data.email.toString())
                    }

                    // } else if (error.response.data.password) {
                    //     swal('Ensure password field has at least 6 characters')
                    // }
                    // else {
                    //     swal('invalid credentials in email or password')
                    // }

                })
        }
        catch (error) {
            console.log("error", error);
        }
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
                            <Link to="/ChangePassword" style={{ color: "#000", textDecoration: 'none' }}>
                                <ListGroup.Item className="texthover">
                                    <span style={{ paddingLeft: "25px" }}>Change Password</span></ListGroup.Item></Link>
                            <Link to="/newsLetter" style={{ color: "#000", textDecoration: 'none' }}>
                                <ListGroup.Item className="texthover" >
                                    <span style={{ paddingLeft: "12px" }}>newsLetter Preferences</span></ListGroup.Item></Link>

                            <ListGroup.Item className="texthover" id="arrow"><ArrowBackIcon className="arrow" />
                                <Link to="/Login" style={{ color: "#000", textDecoration: 'none' }}>
                                    <span style={{ paddingLeft: "17px" }}>   LOGOUT</span></Link>
                            </ListGroup.Item>


                        </ListGroup>
                    </Card>

                </div>
                <div className="col-lg-9" >
                    <Card className="shadow" style={{ height: "38rem" }}>
                        <Card.Header className="texthover" style={{ fontSize: "35px", color: "#282E52" }}>Details</Card.Header>

                        <Card.Body className="d-flex" style={{ border: "none", marginBottom: "50px" }}>

                            <Card className="width">
                                <Card.Body>
                                    <Form style={{ width: '700px' }}>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control type='text' value={first_name} onChange={(e) => setFirstname(e.target.value)} />
                                                <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col}>
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control type='text' value={last_name} onChange={(e) => setLastname(e.target.value)} />
                                                <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type='text'       
                                          defaultValue={userData && userData.email}
                                           readOnly />
                                                <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col}>
                                                <Form.Label>Phone Number</Form.Label>
                                                <Form.Control type='text'       
                                          defaultValue={userData && userData.phone_number}
                                           readOnly />
                                                <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                                            </Form.Group>
                                        </Form.Row>

                                      
                                        <div className="d-grid gap-2">
                                            <Button size="lg" onClick={Update} style={{ width: "100%", marginTop: "50px", backgroundColor: "#282E52" }}>Save</Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Card.Body>
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



export default DetailsEdit;