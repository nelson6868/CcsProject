import React, { useState, useEffect, useRef } from 'react';
import MUIDataTable from "mui-datatables";
import { useStateValue } from '../../pages/productdetails/Stateprovider';
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';
import { Card, Container, Row, Col, Table } from 'react-bootstrap';
import logowhite from '../../assets/logowhite.png';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../receiptform/formReceipt.css'

import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useReactToPrint } from 'react-to-print';
import PrintIcon from '@material-ui/icons/Print';
import './printbutton.css';




const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);





function TransactionHistoryTable() {
    const [{ userData }] = useStateValue();
    const [transactionHistory, setTransactionHistory] = useState([]);
    const [transReceipt, setTransReceipt] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const componentRef = useRef();


    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });



    const handleClickOpen = (id) => {
        setOpen(true);
        getTransReceipt(id);
        // debugger
    };
    const handleClose = () => {
        setOpen(false);
    };


    const getTransReceipt = async (id) => {
        try {
            // debugger
            await axios.get(`paystack/get-reciept/${id}`,
                {
                    headers: {
                        // "Access-Control-Allow-Origin": "*",
                        Authorization: `Bearer ${userData.token}`
                    }
                })
                .then(res => {
                    // debugger
                    console.log("res", res.data);
                    setTransReceipt(res.data)
                })
            setLoading(true)
        } catch (error) {
            console.log("error", error);
        }
    }

    // useEffect(() => {
    //     getTransReceipt();
    // }, [])

    // useEffect(() => {
    //     setRcptTableData(transReceipt);
    // }, [transReceipt])


    const getTransactionHistory = async () => {
        try {
            await axios.get("/paystack/transaction-list/",
                {
                    headers: {
                        // "Access-Control-Allow-Origin": "*",
                        Authorization: `Bearer ${userData.token}`
                    }
                })
                .then(res => {
                    console.log("res", res.data);
                    if (res.length !== 0 && res !== null) {
                        let transHistoryTableData = []
                        // eslint-disable-next-line array-callback-return
                        res.data.map(val => {
                            let row = ["", val.description, val.created_at, val.id, val.payment_type, val.amount, val.transaction_status, val.id];

                            transHistoryTableData.push(row);
                        });
                        setTransactionHistory(transHistoryTableData);

                    } else {
                        console.log("Someting went wrong");
                    }
                })
            setLoading(true)
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        getTransactionHistory();
        // eslint-disable-next-line
    }, [])


    console.log('transReceipt', transReceipt)


    const columns = [
        {
            name: 'S/N',
            options: {
                sort: false,
                filter: false,
                customBodyRender: (value, tableMeta) => {
                    return <span>{tableMeta.rowIndex + 1}</span>
                }
            }
        },
        {
            name: "Description",
            label: "Description",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta) => {
                    return value === undefined || value === "" ? 'not updated' : value;
                }
            }
        },
        {
            name: "Date",
            label: "Date",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta) => {
                    return value === undefined || value === "" ? 'not updated' : value;
                }
            }
        },
        {
            name: "Account Id",
            label: "Order Number",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta) => {
                    return value === undefined || value === "" ? 'not updated' : value;
                }
            }
        },
        {
            name: "Account Type",
            label: "Account Type",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta) => {
                    return value === undefined || value === "" ? 'not updated' : value;
                }
            }
        },
        {
            name: "Amount",
            label: "Amount",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta) => {
                    return value === undefined || value === "" ? 'not updated' : value;
                }
            }
        },
        {
            name: "Status",
            label: "Status",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta) => {
                    return value === undefined || value === "" ? 'not updated' : value;
                }
            }
        },
        {
            name: "Actions",
            options: {
                filter: false,
                sort: false,
                customBodyRender: (value, tableMeta) => {
                    return (
                        <div>
                            <Button style={{ fontSize: '0.7rem' }} size="small" className='small mx-1 mb-1 mb-lg-0' variant="outlined" color="primary" startIcon={<VisibilityIcon />} onClick={() => { handleClickOpen(value) }}>
                                View Receipt
                            </Button>
                            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth={true} maxWidth="md" scroll="paper">
                                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                                    Generate Receipt
                                </DialogTitle>
                                <DialogContent dividers>

                                    <Container ref={componentRef}>
                                        <Row>
                                            <Col lg={12} md={12} style={{ marginTop: '-6rem' }}>
                                                <Card style={{ backgroundColor: '#282E52', border: 'none', color: '#FFF' }}>
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

                                                        <tr >
                                                            <th>ORDER REFERENCE NUMBER</th>
                                                            <th></th>
                                                            <th></th>
                                                            <th>{transReceipt.reference}</th>
                                                        </tr>

                                                    </thead>
                                                    <tbody>
                                                        {loading ?
                                                            transReceipt.length !== 0 ?
                                                                transReceipt.order_items.map((item, index) => {
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
                                                            : <ReactBootStrap.Spinner animation="border" />
                                                        }
                                                    </tbody>
                                                    <thead>

                                                        <tr >
                                                            <th>Total</th>
                                                            <th></th>
                                                            <th></th>
                                                            <th>₦{transReceipt.amount}</th>
                                                        </tr>

                                                    </thead>
                                                </Table>
                                                <Card style={{ border: 'none' }}>

                                                    <Card.Footer className='d-flex justify-content-center' style={{ backgroundColor: '#282E52', border: 'none', color: '#FFF' }}>
                                                        &copy; Sidmach Technologies
                                                    </Card.Footer>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Container>
                                </DialogContent>
                                <DialogActions>
                                    <Button autoFocus onClick={handleClose} color="primary">
                                        Close
                                    </Button>
                                    <button onClick={handlePrint} className='transPrintButton'>
                                        <PrintIcon style={{ marginRight: '0.5rem' }} />
                                        Print
                                    </button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    );
                }
            }
        },
        // val.id,val.amount, val.description, val.order,val.payment_type, val.reference, val.transaction_status, val.updated_at
    ];

    // const data = [
    //     ['', 'Cloud Solution', "15/7/2021", 2258694582, 'Paystack', '$11.96', 'Pending'],
    //     ['', 'Microsoft 365 Business Standard Trial', "15/7/2021", 2258694582, 'Paystack', '$11.96', 'Successful'],
    //     ['', 'Office 365 E1', "15/7/2021", 2258694582, 'Paystack', '$11.96', 'Failed'],
    //     ['', 'One Drive For Business Plan', "15/7/2021", 2258694582, 'Paystack', '$11.96', 'Pending'],
    //     ['', 'Microsoft Teams', "15/7/2021", 2258694582, 'Paystack', '$11.96', 'Successful'],
    //     ['', 'Data Analytics', "15/7/2021", 2258694582, 'Paystack', '$11.96', 'Failed'],
    //     ['', 'Cloud Solution', "15/7/2021", 2258694582, 'Paystack', '$11.96', 'Pending'],
    //     ['', 'Microsoft 365 Business Standard Trial', "15/7/2021", 2258694582, 'Paystack', '$11.96', 'Successful'],
    //     ['', 'Office 365 E1', "15/7/2021", 2258694582, 'Paystack', '$11.96', 'Failed'],
    //     ['', 'Microsoft Teams', "15/7/2021", 2258694582, 'Paystack', '$11.96', 'Pending'],
    //     ['', 'Data Analytics', "15/7/2021", 2258694582, 'Paystack', '$11.96', 'Successful'],
    //     ['', 'Microsoft Teams', "15/7/2021", 2258694582, 'Paystack', '$11.96', 'Failed'],
    //     ['', 'One Drive For Business Plan', "15/7/2021", 2258694582, 'Paystack', '$11.96', 'pending'],
    // ];
    // const data = () => {

    //   let transactionHistory = []
    //   transactionHistory.map(val => {
    //     let row = ["", val.description, val.created_at, val.id, val.payment_type, val.amount, val.transaction_status ];
    //     transactionHistory.push(row);
    //     });
    //   setTransactionHistory(transactionHistory);
    // }

    const options = {
        filter: true,
        filterType: "dropdown",
        responsive: "standard",
        selectableRows: 'none',
        selectableRowsHeader: false,
        elevation: 3,
    };




    return (
        <div style={{ marginTop: '2%', marginBottom: '5%' }}>
            <MUIDataTable
                title={"TRANSACTION HISTORY"}
                data={transactionHistory}
                columns={columns}
                options={options}
            />
        </div>
    )
}

export default TransactionHistoryTable;
