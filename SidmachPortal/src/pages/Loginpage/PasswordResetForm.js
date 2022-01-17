import React ,{useState}from 'react';
import {Button, Col, Form } from 'react-bootstrap';

function PasswordResetForm() {
    // const [form, setForm] = useState({})
    // const [errors, setErrors] = useState({})
    const [newpassword, setNewPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")

    // const submit = () => {
    //     try {
    //         setLoading(true)
    //         axios.post("https://sidcloud.azurewebsites.net/api/v1/account/register/", { email, first_name, last_name,phone_number, password })
    //             .then(res => {
    //                 console.log(res)
    //                 if (res.data.token) {
    //                     setFirstname("")
    //                     setLastname("")

    return(
        <div style={{display:"flex", justifyContent:"center", marginTop:"15rem", marginBottom:"10rem"}}>
            <div style={{border:"2px solid #f1f1f1", height:"20rem", padding:"4rem",borderRadius:"1rem"}}>
                <Form style={{ width: "300px", alignContent: "center" }}>
                <Form.Group as={Col} controlId="formBasicPassword">
                    {/* <Form.Label>New Password</Form.Label> */}
                    <Form.Control type="password" placeholder=" New password" value={newpassword} onChange={(e) => setNewPassword(e.target.value)} />
                    <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicPassword">
                    {/* <Form.Label>Confirm Password</Form.Label> */}
                    <Form.Control type="password" placeholder="Confirm new password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                </Form.Group>
            
                <div className="d-grid gap-2">
                    <Button size="md" style={{width:"90%", marginTop:"20px", marginLeft:"1rem", backgroundColor:"#282E52" }}>Reset Password</Button>
                </div>

                </Form>
            </div>
        </div>
    );
}
export default PasswordResetForm;