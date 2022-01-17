import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Table } from 'react-bootstrap';
import { useStateValue } from '../../pages/productdetails/Stateprovider';
import logowhite from '../../assets/logowhite.png';
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';

import './formReceipt.css';

const ReceiptForm = () => {
    const [receipt, setReceipt] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [{ userData }] = useStateValue();



    const getReceipt = async () => {
        try {
            await axios.get("paystack/current-reciept/",
                {
                    headers: {
                        // "Access-Control-Allow-Origin": "*",
                        Authorization: `Bearer ${userData.token}`
                    }
                })
                .then(res => {
                    // debugger
                    console.log("res", res.data);
                    setReceipt(res.data)
                })
            setLoading(true)
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        getReceipt();
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        setTableData(receipt);
    }, [receipt])

    // useEffect(() => {
    //     alert(tableData.length);
    // }, [tableData])

    console.log("receipt", receipt);
    return (
        <div>
            <Container>
                <Row>
                    <Col></Col>
                    <Col lg={9} md={9}>
                        <Card style={{ backgroundColor: '#022b5f', border: 'none', color: '#FFF' }}>
                            <Row class='d-flex justify-content-between'>
                                <Card.Img variant="top" src={logowhite} class='receiptLogo ml-4 mt-2' />
                                <Card.Body>
                                    <Card.Text className='d-flex justify-content-end mr-4 font-weight-bold'>
                                        RECEIPT
                                    </Card.Text>
                                </Card.Body>
                            </Row>
                        </Card>
                        <Card style={{ border: 'none' }}>
                            <Card.Body>
                                <Card.Title className='d-flex justify-content-center receiptTitle'>
                                    Thanks for your payment!
                                </Card.Title>
                            </Card.Body>
                        </Card>

                        <Table hover>
                            <thead>
                                {
                                    receipt.map((item, i) =>
                                        <tr >
                                            <th>ORDER REFERENCE NUMBER</th>
                                            <th></th>
                                            <th></th>
                                            <th>{item.reference}</th>
                                        </tr>
                                    )}
                            </thead>
                            <tbody>
                                {loading ?
                                    // receipt === [] ?
                                    // receipt.map((items, i) => (
                                    //     items.order_items.length > 0 ?
                                    // items.order_items.map((item, index) => {
                                    tableData.length !== 0 ?
                                        tableData[0].order_items.map((item, index) => {
                                            return (
                                                <tr>
                                                    <td>{item.title}</td>
                                                    <td>x {item.quantity}</td>
                                                    <td></td>
                                                    <td>₦{item.unit_price}</td>
                                                </tr>
                                            )

                                        })
                                        : ""
                                    //         : ""
                                    // ))
                                    // : ""
                                    : <ReactBootStrap.Spinner animation="border" />
                                }

                                {/* <tr>
                                    <td>Item One</td>
                                    <td></td>
                                    <td></td>
                                    <td>N1900</td>
                                </tr>
                                <tr>
                                    <td>Item One</td>
                                    <td></td>
                                    <td></td>
                                    <td>N1900</td>
                                </tr>
                                <tr>
                                    <td>Item One</td>
                                    <td></td>
                                    <td></td>
                                    <td>N1900</td>
                                </tr> */}
                            </tbody>
                            <thead>
                                {
                                    receipt.map((item, i) =>
                                        <tr >
                                            <th>Total</th>
                                            <th></th>
                                            <th></th>
                                            <th>₦{item.amount}</th>
                                        </tr>
                                    )}
                            </thead>
                        </Table>
                        {/* <Card style={{ border: 'none' }}>
                            <Card.Body>
                                <Card.Title className='d-flex justify-content-center receiptShippingAddress'>
                                    Shipping Address:
                                </Card.Title>
                                <Card.Text className='d-flex justify-content-center'>
                                    No.15b, Koshofe Amula Street, Fuck-off Avenue <br />
                                    Let me hear word
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className='d-flex justify-content-center' style={{ backgroundColor: '#59CFE7', border: 'none' }}>
                                &copy; Sidmach Technologies
                            </Card.Footer>
                        </Card> */}
                        <Card style={{ border: 'none' }}>

                            <Card.Footer className='d-flex justify-content-center' style={{ backgroundColor: '#022b5f', border: 'none', color: '#FFF' }}>
                                &copy; Sidmach Technologies
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default ReceiptForm;



