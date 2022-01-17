import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';

import { Card,  Button, ListGroup, Col} from 'react-bootstrap';
///import { useLocation } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Paper from '@material-ui/core/Paper';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Link } from 'react-router-dom';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';
import FlipToFrontIcon from '@material-ui/icons/FlipToFront';
//import EditIcon from '@material-ui/icons/Edit';
//import ProfileComponent from './ProfileComponent';
// import ProfileTopSell from './ProfileTopsell'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useStateValue } from '../productdetails/Stateprovider';
//import  from '@material-ui/icons/TouchApp';
import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import axios from 'axios';
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom';


function AddressBook() {
    const [{ userData }] = useStateValue();
//     const location = useLocation();
// const { pathname } = location;
// const splitLocation = pathname.split("/");

    const history = useHistory();

    const logOut = () => {
        localStorage.clear("userData, cart")
        history.push('/Login');
        window.location.reload();
    }

    // const history = useHistory()

    // const history = useHistory()
    //const [form, setForm] = useState({})
    //const [errors, setErrors] = useState({})
    //const [phone_number, setPhone] = useState("")
    const [company_name, setCompanyname] = useState("")
    const [postal_code, setPostalcode] = useState("")
    const [address_line_1, setAddress1] = useState("")
    const [address_line_2, setAddress2] = useState("")
    const [town_city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [state, setState] = useState("")
    const [userDetails, setUserDetails] = useState({})
    const [loading, setLoading] = useState(false)
    console.log(company_name)
    console.log(userDetails)
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

                console.log(userData && userData.token)
                if (res.data.length) {
                    setUserDetails(res.data[0])

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


                    setLoading(false);
                }
            })
    }

    useEffect(() => {
        console.log(userDetails)
        setAddress1(userDetails.address_line_1)
        setAddress2(userDetails.address_line_2)
       // setPhone(userDetails.phone_number)
        setCity(userDetails.town_city)
        setCompanyname(userDetails.company_name)
        setCountry(userDetails.country)
        setState(userDetails.state)
        setPostalcode(userDetails.postal_code)
    }, [userDetails])
    useEffect(() => {
        getUpdateDetails();
        // eslint-disable-next-line
    }, [])


    const editUser = () => {
        //debugger;
        try {
            setLoading(true)
            const data = {

                //phone_number,
                company_name,
                postal_code,
                town_city,
                state,
                country,
                address_line_1,
                address_line_2
            }
            axios.put(`https://sidcloud.azurewebsites.net/api/v1/account/user/update-address/${userDetails.id}/`, data,
                {
                    headers: {
                        // "Access-Control-Allow-Origin": "*",
                        Authorization: `Bearer ${userData.token}`
                    }
                })
                .then(res => {
                    //   debugger;
                    console.log(res)
                    console.log(userData && userData.token)
                    if (res.data) {

                        //setPhone("")
                        setCompanyname("")
                        setPostalcode("")
                        setCity("")
                        setState("")
                        setCountry("")
                        setAddress1("")
                        setAddress2("")
                   

                         Swal.fire({  
                      
                            text: 'Update was successful.',  
                            icon: 'success',
                            customClass: 'swal-wide',  
                          });
                        getUpdateDetails();
                        //history.push('/login');


                        setLoading(false);
                    }
                })


                .catch(error => {
                    setLoading(false)
                    console.log(error);
                    // if (error.response.data.phone_number) {
                    //     swal(error.userData && userData.toString())

                    // } else if (error.userData && userData) {
                    //     swal('Ensure  all fields are filled')
                    // }



                })

        } catch (error) {
            console.log("error", error);
        }

            

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

                            <ListGroup.Item className="texthover" id="arrow" ><ArrowBackIcon className="arrow" />
                              
                                    <span style={{ paddingLeft: "17px" }} onClick={logOut}>   LOGOUT</span>
                            </ListGroup.Item>


                        </ListGroup>
                        
                    </Card>

                </div>
                <div className="col-lg-9">
                    <Card className="">
                        <ListGroup.Item className="texthover" id="arrow"><ArrowBackIcon className="arrow" />
                            <Link to="/Checkoutpage" style={{ color: "#000", textDecoration: 'none' }}>Proceed to payment </Link>    <span style={{ marginLeft: "150px", textAlign: "center" }}> Hi, {userData && userData.first_name}    Welcome</span>
                        </ListGroup.Item>



                    </Card>
                    <div className="col-lg-9" >
                        <div className='App d-flex flex-column align-items-center'>
                            <Paper style={{ marginLeft: "230px", marginRight: "30px", height: "480px", display: "flex", marginTop: "25px", justifyContent: "center", width: "820px" }}>
                                <Form style={{ marginLeft: "30px", width: "100%" }}>


                                    <Form.Row>
                                        <Form.Group as={Col} style={{ marginRight: "30px" }}>
                                            <Form.Label>Postal Code</Form.Label>
                                            <Form.Control
                                                type='text'
                                                value={postal_code} onChange={(e) => setPostalcode(e.target.value)}

                                            // defaultValue={userData && userData.email}
                                            // readOnly

                                            />
                                            <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} style={{ marginRight: "30px" }}>
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control
                                                placeholder="add your countrycode+234"
                                                type='text'
                                               // value={phone_number} onChange={(e) => setPhone(e.target.value)}
                                               defaultValue={userData && userData.first_name}
                                               readOnly



                                            />

                                            <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Group as={Col} style={{ marginLeft: "-12px" }}>
                                        <Form.Label>Address Line 2</Form.Label>
                                        <Form.Control
                                            type='text'
                                            value={address_line_1} onChange={(e) => setAddress1(e.target.value)}
                                        // defaultValue={userDetails && userDetails.address_line_1}
                                        // readOnly

                                        />

                                        <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} style={{ marginLeft: "-12px" }}>
                                        <Form.Label>Address Line 2</Form.Label>
                                        <Form.Control
                                            type='text'
                                            value={address_line_2} onChange={(e) => setAddress2(e.target.value)}

                                        // defaultValue={userDetails && userDetails.address_line_2}
                                        // readOnly
                                        />

                                        <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Row>
                                        <Form.Group as={Col} style={{ marginRight: "30px" }}>
                                            <Form.Label>City</Form.Label>
                                            <Form.Control
                                                type='text'
                                                value={town_city} onChange={(e) => setCity(e.target.value)}
                                            // defaultValue={userDetails && userDetails.town_city}
                                            // readOnly


                                            />

                                            <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} style={{ marginRight: "30px" }}>
                                            <Form.Label>Company Name</Form.Label>
                                            <Form.Control
                                                type='text'
                                                value={company_name} onChange={(e) => setCompanyname(e.target.value)}
                                            //  defaultValue={userData && userData.company_name}
                                            // readOnly

                                            />

                                            <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} style={{ marginRight: "30px" }}>
                                            <Form.Label>Country</Form.Label>
                                            <Form.Control
                                                as='select'
                                                value={country} onChange={(e) => setCountry(e.target.value)}

                                            >
                                                <option value=''>Select a Country:</option>
                                                <option value='NG'>NG</option>


                                            </Form.Control>
                                            {userData && userData.country}

                                            <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} style={{ marginRight: "30px" }} >
                                            <Form.Label>State</Form.Label>
                                            <Form.Control as='select'
                                                value={state} onChange={(e) => setState(e.target.value)}

                                            >
                                                <option value=''>Select a state:</option>
                                                <option value='Abia'>Abia</option>
                                                <option value='Adamawa'>Adamawa</option>
                                                <option value='Akwa-Ibom'>Akwa-Ibom</option>
                                                <option value='Anambra'>Anambra</option>
                                                <option value='Bauchi'>Bauchi</option>
                                                <option value='Bayelsa'>Bayelsa</option>
                                                <option value='Benue'>Benue</option>
                                                <option value='Borno'>Borno</option>
                                                <option value='Cross River'>Cross River</option>
                                                <option value='Delta'>Delta</option>
                                                <option value='Ebonyi'>Ebonyi</option>
                                                <option value='Edo'>Edo</option>
                                                <option value='Ekiti'>Ekiti</option>
                                                <option value='Enugu'>Enugu</option>
                                                <option value='Gombe'>Gombe</option>
                                                <option value='Imo'>Imo</option>
                                                <option value='Jigawa'>Jigawa</option>
                                                <option value='Kaduna'>Kaduna</option>
                                                <option value='Kano'>Kano</option>
                                                <option value='Katsina'>Katsina</option>
                                                <option value='Kebbi'>Kebbi</option>
                                                <option value='Kogi'>Kogi</option>
                                                <option value='Kwara'>Kwara</option>
                                                <option value='Lagos'>Lagos</option>
                                                <option value='Nasarawa'>Nasarawa</option>
                                                <option value='Niger'>Niger</option>
                                                <option value='Ogun'>Ogun</option>
                                                <option value='Ondo'>Ondo</option>
                                                <option value='Osun'>Osun</option>
                                                <option value='Oyo'>Oyo</option>
                                                <option value='Plateau'>Plateau</option>
                                                <option value='Rivers'>Rivers</option>
                                                <option value='Sokoto'>Sokoto</option>
                                                <option value='Taraba'>Taraba</option>
                                                <option value='Yobe'>Yobe</option>
                                                <option value='Zamfara'>Zamfara</option>
                                                {userData && userData.state}




                                            </Form.Control>
                                            <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                                        </Form.Group>

                                    </Form.Row>


                                    <div style={{ marginLeft: "200px" }}>
                                        {loading ? <Button disabled onClick={editUser} >
                                            {/* Loading */}
                                            <Spinner animation="border" />
                                        </Button> :
                                            <Button  style={{backgroundColor:"#022b5f",marginTop: "-800", marginLeft: "50px",width:"300px",height:"50px",borderRadius:"none",borderOutline:"none" }}  onClick={editUser}  >Save</Button>}
                                    </div>


                                </Form>

                            </Paper>
                        </div>
                    </div>



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



export default AddressBook;