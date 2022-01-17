import React from 'react'
import './Reset.css' 
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


function ResetPassword(){

    const history = useHistory();

    const logOut = () => {
      localStorage.clear("userData, cart")
      history.push('/Login');
      window.location.reload();
  }

    return(
            <div className="formContainer">
                <h2 className="form__heading">
                    Reset Password
                </h2>
                
                <div className="Login__form">
                    <form>
                        <p className="mailicon"/>

                        <input type="text" className="inputbox" placeholder="Enter Email" name="uname" required />

                             
                        <button type="submit" className="button" style={{padding: "14px 20px", marginLeft: "20%", marginTop: "40px", width:"60%"}}>Submit</button>
                        


                      
                        <p className="account"><Link to="/Login" onClick={logOut}>LOGIN</Link></p>
                        <br/>
                    </form> 
                </div>
            </div>
    )
  
}


export default ResetPassword;