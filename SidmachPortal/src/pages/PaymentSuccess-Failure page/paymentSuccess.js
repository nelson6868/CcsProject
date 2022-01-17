import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './paymentSuccess.css';
import success from '../../assets/success.svg';
import { Link } from 'react-router-dom';



const PaymentSuccessPage = () => {
    window.onbeforeunload = function() {
        localStorage.removeItem('basket');
      };
    // localStorage.removeItem('basket');
 
    return(
        <Container>
            <Row className='d-flex'>
                <Col></Col>
                <Col lg={8} md={8} xs={6} id='rectangle' className='justify-content-center'>
                    <div style={{marginTop: '18%'}}>
                        
                    <img style={{marginLeft: '40%'}} src={success} alt="Success Mark" />
                    <p style={{marginLeft: '5%', fontWeight: 'bold', fontSize: '30px'}}>Your Payment has been completed Successfully.</p>
                    <p style={{marginLeft: '29%', fontWeight: 'bold'}}>Please <Link to='/productPage'>Proceed</Link> to Continue Shopping.</p>
                    <p style={{marginLeft: '35%'}}>Click <Link to='/receiptPage'>here</Link> to view Receipt.</p>
                    </div>
                </Col>
                <Col></Col>
            </Row>
      </Container>
    )
  }
  
  export default PaymentSuccessPage;