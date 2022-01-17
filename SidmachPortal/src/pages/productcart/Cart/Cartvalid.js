import React, { useState, useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useStateValue } from '../../productdetails/Stateprovider';
import { Link } from 'react-router-dom';
// REACT BOOTSTRAP COMPONENTS
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import '../Cart/CartValid.css';
// BOOTSTRAP LIBRARY
import 'bootstrap/dist/css/bootstrap.min.css';
import Paper from '@material-ui/core/Paper';
import Swal from "sweetalert2";
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner'

function Checkoutform( {getUpdateDetails, userInformation}) {
    const [{ userData }] = useStateValue();


    const [company_name, setCompanyname] = useState("")
    const [postal_code, setPostalcode] = useState("")
    const [address_line_1, setAddress1] = useState("")
    const [address_line_2, setAddress2] = useState("")
    const [town_city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [state, setState] = useState("")
    const [userDetails, setUserDetails] = useState(userInformation)
    // const [minLength, setMinLength] = useState()


    const [loading, setLoading] = useState(false)
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

    //Api to get user details when logged in

    const UpdateDetails = () => {
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
        console.log("userDetails", userDetails)
        setAddress1(userDetails.address_line_1)
        setAddress2(userDetails.address_line_2)
        setCity(userDetails.town_city)
        setCompanyname(userDetails.company_name)
        setCountry(userDetails.country)
        setState(userDetails.state)
        setPostalcode(userDetails.postal_code)
    }, [userDetails])
    useEffect(() => {
        UpdateDetails();
        // eslint-disable-next-line
    }, [])


    const FormValUpdate = () => {
        try {
            setLoading(true)
            if (company_name === '') {
           
                Swal.fire({  
                      
                    text: 'company name cannot be empty',  
                    icon: 'warning',
                    customClass: 'swal-wide',  
                  });
            }
            // if (phone_number == '') {
            //     swal('phone number cannot be empty')
            // }
            // if ( minLength === '') {
                

            //     Swal.fire({  
                      
            //         text: 'enter your country code',  
            //         icon: 'warning',
            //         customClass: 'swal-wide',  
            //       });

            // }
            if (postal_code === '') {
    
                Swal.fire({  
                      
                    text: 'Postal code can not be empty',  
                    icon: 'warning',
                    customClass: 'swal-wide',  
                  });
            }
            if (town_city === '') {
               
                Swal.fire({  
                      
                    text: 'City can not be empty',  
                    icon: 'warning',
                    customClass: 'swal-wide',  
                  });

                
            }
            if (state === '') {
              
                Swal.fire({  
                      
                    text: 'State can not be empty',  
                    icon: 'warning',
                    customClass: 'swal-wide',  
                  });
            }
            if (country === '') {
                

                
                Swal.fire({  
                      
                    text: 'Country can not be empty',  
                    icon: 'warning',
                    customClass: 'swal-wide',  
                  });
            }
            if (address_line_1 === '') {
             

                Swal.fire({  
                      
                    text: 'Address line 1 can not be empty',  
                    icon: 'warning',
                    customClass: 'swal-wide',  
                  });
            }
            if (address_line_2 === '') {
                
                Swal.fire({  
                      
                    text: 'Address line 2 can not be empty',  
                    icon: 'warning',
                    customClass: 'swal-wide',  
                  });
            }
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
            axios.post("https://sidcloud.azurewebsites.net/api/v1/account/user/update-address/", data,
                {
                    headers: {
                        // "Access-Control-Allow-Origin": "*",
                        Authorization: `Bearer ${userData.token}`
                    }
                })
                .then(res => {
                    console.log(res)
                    console.log(userData && userData.token)
                    if (res.data) {
                       // setPhone("")
                        setCompanyname("")
                        setPostalcode("")
                        setCity("")
                        setState("")
                        setCountry("")
                        setAddress1("")
                        setAddress2("")
                        
                        Swal.fire({  
                            title: 'Details successful,Proceed to payment..',  
                            icon:   'success', 
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
        <div className='App d-flex flex-column align-items-center'>
            <Card style={{ boxShadow: "1px, 0px ,1px", width: "100%", marginBottom: "30px" }}>
                <Link to="/AddressBook" style={{ textDecoration: 'none' }}> 
                 <Card.Header style={{ color: "#282E52",
                  textAlign: "center", fontSize: "20px" }}>ORDER INFORMATION</Card.Header>
                </Link>

            </Card>


            <Paper style={{ maxWidth: '100%',height: "700px", display: "flex", justifyContent: "center" }}>
                <Form style={{ width: '560px' }}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type='text'

                                defaultValue={userData && userData.first_name}
                                readOnly
                            />
                            <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type='text'

                                defaultValue={userData && userData.last_name}
                                readOnly

                            />

                            <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type='text'

                                defaultValue={userData && userData.email}
                                readOnly
                            />
                            <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type='text'

                                defaultValue={userData && userData.phone_number}
                                readOnly
                            />
                            <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                        </Form.Group>

                    </Form.Row>
                    <Form.Group as={Col} style={{ marginLeft: "-12px" }}>
                        <Form.Label>Address Line 1</Form.Label>
                        <Form.Control
                            type='text'
                            value={address_line_1} onChange={(e) => setAddress1(e.target.value)}
                        // defaultValue={userDetails && userDetails.address_line_1}
                        // readOnly

                        />

                        <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} style={{ marginLeft: "-12px" }}>
                        <Form.Label as={Col} >Address Line 2</Form.Label>
                        <Form.Control
                            type='text'
                            value={address_line_2} onChange={(e) => setAddress2(e.target.value)}

                        // defaultValue={userDetails && userDetails.address_line_2}
                        // readOnly
                        />

                        <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                    </Form.Group>
                    <Form.Row>


                    <Form.Group as={Col}>
                            <Form.Label>Company</Form.Label>

                            <Form.Control
                                placeholder="Enter your company name"
                                type='text'
                                value={company_name} onChange={(e) => setCompanyname(e.target.value)}




                            />

                            <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                        </Form.Group>



                        <Form.Group as={Col}>
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type='text'
                                value={town_city} onChange={(e) => setCity(e.target.value)}
                            // defaultValue={userDetails && userDetails.town_city}
                            // readOnly


                            />



                            <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                        </Form.Group>


                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} style={{ marginRight: "30px" }}>
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                required
                                as='select'
                                value={country} onChange={(e) => setCountry(e.target.value)}
                            >
                                <option value=''>Select a Country:</option>
                                <option value='NG'>NG</option>
                                


                            </Form.Control>
                            {userData && userData.country}

                            <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                as='select'
                                value={state} onChange={(e) => setState(e.target.value)}>
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
                                {/* {userData && userData.state} */} 




                            </Form.Control>
                            <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control
                                type='text'
                                required
                                //value={postal_code} onChange={(e) => setPostalcode(e.target.value)}
                                // defaultValue={userData && userData.post}
                                // readOnly

                                value={postal_code} onChange={(e) => setPostalcode(e.target.value)}
                            // defaultValue={userData && userData.postal_code} readOnly

                            />

                            <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    {loading ? <Button disabled onClick={FormValUpdate} >
                        {/* Loading */}
                        <Spinner animation="border" />
                    </Button> :
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <Button style={{backgroundColor:"#282E52",height:"50px", width:"300px"}} onClick={FormValUpdate}>Save</Button  >
                        </div>}

                </Form>

            </Paper>
        </div>
    )
}

export default Checkoutform;
