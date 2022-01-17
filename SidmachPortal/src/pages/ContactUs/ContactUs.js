import React, { useState } from 'react'
import MailIcon from '@material-ui/icons/Mail'
import AddLocationIcon from '@material-ui/icons/AddLocation'
import PhoneIcon from '@material-ui/icons/Phone'
// import login_background from './images/login_background.jpg'
import './ContactUs.css' 
import Button from '@material-ui/core/Button';

import axios from 'axios';
import Swal from "sweetalert2";

function ContactUs(){
    const[firstname, setFirstname] = useState("");
    const [lastname,  setLastname]= useState("");
    const [email, setEmail]= useState("");
    const [message, setMessage]= useState("");

    
   
    const [loading, setLoading] = useState(false)

    const contact = () => {
        try {
            setLoading(true)
            axios.post("https://sidcloud.azurewebsites.net/contact/", { email, firstname, lastname, message })
                .then(res => {
                   console.log(res)
                    if (res.data) {
                        setFirstname("")
                        setLastname("")
                        setEmail("")
                        setMessage("")
                       
                        //swal("Message sent successfully created, Confirm your Email.")

                        if (firstname === '') {
           
                            Swal.fire({  
                                  
                                text: 'First name can not be empty',  
                                icon: 'warning',
                                customClass: 'swal-wide',  
                              });
                        }
                        else if (lastname === '') {
               
                            Swal.fire({  
                                  
                                text: 'last name can not be empty',  
                                icon: 'warning',
                                customClass: 'swal-wide',  
                              });
                        }
                        else if (email === '') {
               
                            Swal.fire({  
                                  
                                text: 'Email can not be empty',  
                                icon: 'warning',
                                customClass: 'swal-wide',  
                              });
                        }
                        else if (message === '') {
               
                            Swal.fire({  
                                  
                                text: 'Message can not be empty',  
                                icon: 'warning',
                                customClass: 'swal-wide',  
                              });
                        }else{
                          Swal.fire({  
                              
                            text: 'sent successfully',  
                            icon: 'success',
                            customClass: 'swal-wide',  
                          });  
                        }

                        
                        //history.push('/login');


                        setLoading(false);
                    }
                }).catch(error => {
                    setLoading(false)
                    console.log(error);
                    
                    // if (phone_number == '') {
                    //     swal('phone number cannot be empty')
                    // }
                   
                   
                


                })

        } catch (error) {
            console.log("error", error);
        }
    }


   

    
    

    
    
    return(
        <div className="Support__page">
            <div className="contact_Us">
                <p>How can we help?</p>
            </div>
            <div className="Content">
                <h2>Welcome Aboard</h2>
                <p>Thanks for joining us, We are excited to have you here</p>
            </div>
            <div className="Container">
                <div className="contact__Info">
                    <div className="box">
                        <AddLocationIcon className="Icon"/>
                        <div className="contact_text">
                        <h3>Address: Lagos Office</h3>
                        <p>Plot 15, Block J, Otunba Jobi Fele Way,<br/>
                        Central Business District, Alausa, Ikeja<br/>
                        P.O.Box 56345, Ikoyi, Lagos, Nigeria.</p>
                        </div>
                    </div>
                    <div className="box">
                        <AddLocationIcon className="Icon"/>
                        <div className="contact_text">
                        <h3>Address: Abuja Office</h3>
                        <p>Suite 3, Mid-End, Third Floor, Yobe Investment House,<br/>
                         Plot 1332, Ralph Shodeind Street,<br/>
                         Central Business District, Abuja, Nigeria.</p>
                        </div>
                    </div>
                    <div className="box">
                        <MailIcon className="Icon"/>
                        <div className="contact_text">
                        <h3>Email</h3>
                        <p>corporate@sidmach.com</p>
                        <p>Salessquad@sidmach.com</p>
                        </div>
                    </div>
                    <div className="box">
                        <PhoneIcon className="Icon"/>
                        <div className="contact_text">
                        <h3>Phone</h3>
                        <p>+234-908-719-7603</p>
                        <p>+234-908-719-7604</p>
                        </div>
                    </div>
                </div>
                <div className="Support__Form">
                    <form>
                        <p>Please note all fields are required:</p>
                        <div className="form_input">
                            <label for="Name" className="form_label">First Name:</label>
                            <div>
                                <input type="text" name="Name" className="support_input" required="required"value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
                            </div>
                        </div>
                        <div className="form_input">
                            <label for="Name" className="form_label">Last Name:</label>
                            <div>
                                <input type="text" name="Name" className="support_input" required="required" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                            </div>
                        </div>
                        <div className="form_input">
                            <label for="Email" className="form_label">Email:</label>
            	            <div>
                                <input type="email" className="support_input" required="required" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div className="form_input">
                            <label for="Message" className="form_label">Message/Feedback:</label>
                            <div className="textArea">
                                <textarea name="Message" className="text_area" rows="8" maxlength="5000" required="required" value={message} onChange={(e) => setMessage(e.target.value)}> </textarea>
                            </div>
                        </div>
                        <div>
                            {/* <Button  onClick={Contact}      id="form_button" className="support_submit">Send Message</Button> */}


                            {loading ? <Button   id="form_button" className="support_submit" disabled onClick={contact} variant="contained" color="primary"  >
                                        Loading
                                    </Button> : < Button id="form_button" className="support_submit" onClick={contact} variant="contained" color="primary"  >
                                        Sign up
                                    </Button>}
                        </div>
                    </form>
                </div>



               


    
            </div>
            <p className="bot_link">Drop your message and support will get back to you or <em>click here</em> to chat with our bot</p>
        </div>
       
    )   


}

export default ContactUs;