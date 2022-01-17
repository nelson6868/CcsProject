/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './login.css'
import { useStateValue } from '../productdetails/Stateprovider'
import { useHistory, Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import CustomizedCheckbox from '../../components/checkbox/checkbox';
import microsoft from '../../assets/Office-365-is-now-Microsoft-365-shutterstock_1487706341-1024x683 1.png';
import axios from 'axios';
import Swal from "sweetalert2";



function Login() {
    const [{ userData }, dispatch] = useStateValue();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(true)
    const [cookies, setCookie] = useCookies(['loggedInUser']);

    const history = useHistory()
    const [loading, setLoading] = useState(false)

    const emailHandler = (event) => {
        console.log(event)
        setEmail(event.target.value)
        console.log(event.target.value)
    }

    const passwordHandler = (event) => {
        console.log(event)
        setPassword(event.target.value)
        console.log(event.target.value)


    }

    const submit = (e) => {
        try {
            setLoading(true)
            console.log(email, password)
            axios.post("https://sidcloud.azurewebsites.net/api/v1/account/login/", { email, password })
                .then(res => {
                    const localRes = res.data;
                    localStorage.setItem('userData', JSON.stringify(localRes));
                    setUser(JSON.stringify(res.data));
                    setCookie('loggedInUser', res.data, { path: '/' });

                    // Cookies.set('userData', res.data)

                    console.log(res.data)
                    if (res.data.token) {
                        setEmail("")
                        setPassword("")

                        Swal.fire({
                            title: 'Login Successful',
                            icon: 'success',
                            customClass: 'swal-wide',
                        });
                        //Swal.fire("Login Successful")
                        dispatch({
                            type: 'SET_LOGIN',
                            userData: res.data,
                        })
                        history.push('/productcart');
                        setLoading(false);
                    }
                })
                .catch(error => {
                    setLoading(false)

                    console.log(error)
                    if (error.response.data.email) {
                        //Swal.fire('Email: '+error.response.data.email.toString())

                        Swal.fire({

                            text: 'Email: ' + error.response.data.email.toString(),
                            icon: 'success',
                            customClass: 'swal-wide',
                        });
                    }

                    else if (error.response.data.password) {
                        //Swal.fire('Password: '+error.response.data.password.toString())

                        Swal.fire({

                            text: 'Password: ' + error.response.data.password.toString(),
                            icon: 'warning',
                            customClass: 'swal-wide',

                            // showCancelButton: true,  
                            // confirmButtonColor: '#3085d6',  
                            // cancelButtonColor: '#d33',  
                            // confirmButtonText: 'Yes!'  
                        });
                    }
                    else {
                        //Swal.fire(error.response.data.detail.toString())


                        Swal.fire({

                            text: error.response.data.detail.toString(),
                            icon: 'warning',
                            customClass: 'swal-wide',

                            // showCancelButton: true,  
                            // confirmButtonColor: '#3085d6',  
                            // cancelButtonColor: '#d33',  
                            // confirmButtonText: 'Yes!'  
                        });
                    }
                })

        } catch (error) {
            console.log("error", error);
        }
        e.preventDefault();
    }

    return (
        <div className="login__page" >
            <div>
                <img className="top_image" src={microsoft} alt="" />
            </div>

            <div className="loginContainer">

                <div className="Login__form">
                    <form>
                        <h2 className="Login__heading">
                            Login
                        </h2>
                        <div>
                            <input type="text" className="inputbox" placeholder="Enter Email" name="email" required value={email} onChange={(event) => emailHandler(event)} />
                        </div>
                        {/* <LockIcon className="login__icon"/> */}
                        <div>

                            <input type="password" className="inputbox" placeholder="Enter Password" name="psw" required value={password} onChange={(event) => passwordHandler(event)} />
                        </div>
                        <div>
                            {/* {loading ? <button  className="login__button"disabled onClick={submit}> */}
                            {/*                                 
                            <button  className="login__button" onClick={(e)=>submit(e)}>
                                    Login
                                </button>  */}



                            {loading ? <button className="login__button" disabled onClick={(e) => submit(e)}>
                                Loading
                            </button> : < button className="login__button" onClick={(e) => submit(e)} >
                                Login
                            </button>}

                        </div>
                        <div className="remember">
                            <p className="remember__text">< CustomizedCheckbox style={{ marginTop: "10px" }} /><span style={{ marginTop: "6%" }}>Remember me</span></p>
                            <span style={{ marginTop: "2.5%" }}><Link to="/Resetpassword" style={{ textDecoration: 'none' }}><p className="forgot">Forgot Password</p></Link></span>
                        </div>
                        <div className="createacct">
                            <span>Don't have an account?</span>
                            <span className="create__account"><strong ><Link to="/registerPage" style={{ textDecoration: "none", color: 'green', font: 'Poppins' }}> Sign Up </Link> </strong></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;