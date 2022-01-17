import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
//import Input from '@material-ui/core/Input';
//import PasswordField from '@material-ui/core/PasswordField';
import { Link } from 'react-router-dom';
// import Footer from '../../components/footer/footer-component';

import Picture from './Picture.png'
//import { method } from 'lodash';
//import axios, { AxiosInstance } from 'axios';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import '../Register/Register.css'
import Swal from "sweetalert2";




const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 300,
        },

    },
}));

export default function UserRegistration() {
    const classes = useStyles();
    const history = useHistory()
    const [first_name, setFirstname] = useState("")
    const [last_name, setLastname] = useState("")
    const [phone_number, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)

    const submit = () => {
        try {
            setLoading(true)
            axios.post("https://sidcloud.azurewebsites.net/api/v1/account/register/", { email, first_name, last_name,phone_number, password })
                .then(res => {
                    console.log(res)
                    if (res.data.token) {
                        setFirstname("")
                        setLastname("")
                        setPhone("")
                        setEmail("")
                        setPassword("")

                        Swal.fire({  
                            title: 'Registration successful, Please Confirm your Email.',  
                            icon:   'success', 
                            customClass: 'swal-wide', 
                          });
                       
                        history.push('/login');


                        setLoading(false);
                    }
                }).catch(error => {
                    setLoading(false)
                    console.log(error);
                    if (error.response.data.email) {
                       // swal(error.response.data.email.toString())

                        Swal.fire({  
                      
                            text: 'Email: '+error.response.data.email.toString(),  
                            icon: 'warning',
                            customClass: 'swal-wide',  
                          });

                    } else if (error.response.data.password) {
                        //swal('Ensure password field has at least 6 characters')

                        Swal.fire({                       
                            text: 'Ensure password field has atleast 6 characters',  
                            icon: 'warning',
                            customClass: 'swal-wide',  
                          });
                    }else if(error.response.data.phone_number){
                       // swal(error.response.data.phone_number.toString()+" include country code. e.g +234")
                       
                        Swal.fire({  
                      
                            text: error.response.data.phone_number.toString()+" include country code. e.g +234",  
                            icon: 'warning',
                            customClass: 'swal-wide',  
                          });

                    }
                    else {

                         
                        Swal.fire({  
                      
                            text: 'invalid credentials in email or password',  
                            icon: 'warning',
                            customClass: 'swal-wide',  
                          });

                       // swal('invalid credentials in email or password')
                    }



                })

        } catch (error) {
            console.log("error", error);
        }
    }


    return (
        <div>
            <div>


                <img src={Picture} alt="" position="relative" width="100%" height="425" />


            </div> 
            {/* <div style={{width: "588px", display: "flex", justifyContent: "center", position: "absolute", marginBottom: "50px", }}> */}

                <div style={{ display: "flex", justifyContent: "center", position: "relative", marginBottom: "5%", marginTop: "-370px"}}>
                    <Paper style={{
                        display: "flex", justifyContent: "center", borderRadius: "75px", width: "588px", height: "80 !important", opacity: '0.9',
                    }}>
                        <form className={classes.root} noValidate autoComplete="off"  >
                            <h2 style={{ display: "flex", justifyContent: "center", fontWeight: '800', color: "#3A3A3A", paddingTop: "20px" }}>
                                Create an Account
                            </h2>

                            <div>
                                <input placeholder="First Name" className="inputboxfield " type="text" label="First Name" value={first_name} onChange={(e) => setFirstname(e.target.value)} id="standard-size-small" size="small" required="required" />

                            </div>
                            <div>
                                <input style={{ marginLeft: "", marginRight: "150px" }} placeholder="Last Name" className="inputboxfield " type="text" label="Last Name" value={last_name} onChange={(e) => setLastname(e.target.value)} id="standard-size-small" size="small" required="required" />


                            </div>
                            <div>
                                <input placeholder="Phone Number +234" className="inputboxfield " type="text" label="Phone Number" value={phone_number} onChange={(e) => setPhone(e.target.value)} required="required" />

                            </div>
                            <div>
                                <input placeholder="Email" className="inputboxfield " type="text" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} required="required" />

                            </div>
                            <div>



                            </div>
                            <div>

                                <input placeholder="Password" className="inputboxfield " type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} required="required" />

                            </div>




                            <div>
                                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                                    {loading ? <Button style={{backgroundColor:"#282E52"}}  className="hangButton" disabled onClick={submit} variant="contained" color="primary"  >
                                        Loading
                                    </Button> : < Button  className="hangButton" onClick={submit} variant="contained" style={{backgroundColor: '#282E52', color: 'white', borderRadius: '0px', fontWeight: '800', textTransform: 'none' }} >
                                        Sign up
                                    </Button>}
                                </div>
                                <h2 style={{  display: "flex", justifyContent: "center", color: "#3A3A3A", marginTop: "20px", fontSize: "17px", fontWeight: '800' }}>
                                    Already have an account? <p style={{ marginLeft: "23px", color: "#3A3A3A" }}><Link to="/Login" style={{textDecoration:"none",color:"#357a56", fontWeight: '800'}}>Login</Link></p>
                                </h2>

                            </div>
                        </form>
                    </Paper>
                </div>
            {/* </div> */}
            {/* <div style={{ width: "100%", height: "400px" }}></div>
            <Footer /> */}
        </div>

    );
}


