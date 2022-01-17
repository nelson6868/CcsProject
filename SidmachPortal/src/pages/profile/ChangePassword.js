import React from 'react'
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
//import { useStateValue } from '../productdetails/Stateprovider';
//import swal from 'sweetalert'
//import axios from 'axios';



function ChangePassword() {
    // const [{userData},dispatch]=useStateValue();
    // const [form, setForm] = useState({})
    // const [errors, setErrors] = useState({})
    // const [phone_number, setPhone] = useState("")
    // const [company_name, setCompanyname] = useState("")
    // const [postal_code, setPostalcode] = useState("")
    // const [address_line_1, setAddress1] = useState("")
    // const [address_line_2, setAddress2] = useState("")
    // const [town_city, setCity] = useState("")
    // const [country, setCountry] = useState("")
    // const [state, setState] = useState("")

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


    // const Update = () => {
    //              try {
    //                 setLoading(true)
    //                 axios.put("https://sidcloud.azurewebsites.net/api/v1/account/user/user-profile/", {first_name, last_name })
    //                 .then(res => {
    //                     console.log(res)
    //                     if (res.data.token) {
    //                         setFirstname("")
    //                         setLastname("")
    //                         // setEmail("")
    //                         swal("Update Successful ")
    //                         setLoading(false);
    //                     }
    //                 })
    //                 .catch(error => {
    //                     setLoading(false)
    //                     console.log(error);
    //                     if (error.response.data.email) {
    //                         swal(error.response.data.email.toString())
    
    //                     } else if (error.response.data.password) {
    //                         swal('Ensure password field has at least 6 characters')
    //                     }
    //                     else {
    //                         swal('invalid credentials in email or password')
    //                     }
    
    //                 })
    //             }
    //             catch (error) {
    //             console.log("error", error);}
    //            }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 pl-4">
                    <Card className="width1" >
                        <Card.Header id="arrow"> <Link to="/ProfilePage" style={{ color: "#000", textDecoration: 'none' }}> < AccountCircleIcon className="texthover1 arrow" />My Account </Link></Card.Header>
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
                            <Link to="/AddressBook" style={{ color: "#000", textDecoration: 'none' }} ><ListGroup.Item className="texthover">Address Book</ListGroup.Item>
                            </Link> 
                            <Link to="/ChangePassword" style={{ color: "#000", textDecoration: 'none' }} ><ListGroup.Item className="texthover">Change Password</ListGroup.Item>
                            </Link>
                            <ListGroup.Item className="texthover" > News letter Preferences</ListGroup.Item>
                            <ListGroup.Item className="texthover" id="arrow" >
                                <ArrowBackIcon className="arrow"/>LOGOUT
                            </ListGroup.Item>


                        </ListGroup>
                    </Card>

                </div>
                <div className="col-lg-9" >
                    <Card className="shadow" style={{height:"38rem"}}>
                        <Card.Header className="texthover" style={{ fontSize: "35px", color: "#282E52" }}>Change Password</Card.Header>

                        <Card.Body className="d-flex" style={{ border: "none", marginBottom: "50px" }}>

                            <Card className="width">
                                <Card.Body>
                                    <Form style={{ width: "300px", alignContent: "center" }}>

                                            <Form.Group as={Col} controlId="formBasicPassword">
                                                <Form.Label>Current Password</Form.Label>
                                                <Form.Control type="password" placeholder="Enter current password"/>
                                                <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formBasicPassword">
                                                <Form.Label>New Password</Form.Label>
                                                <Form.Control type="password" placeholder="Enter new password"/>
                                                <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formBasicPassword">
                                                <Form.Label>Confirm Password</Form.Label>
                                                <Form.Control type="password" placeholder="Confirm new password"/>
                                                <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                                            </Form.Group>
                                          
                                        <div className="d-grid gap-2">
                                            <Button size="lg" style={{width:"100%", marginTop:"50px", backgroundColor:"#282E52" }}>Save</Button>
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



export default ChangePassword;