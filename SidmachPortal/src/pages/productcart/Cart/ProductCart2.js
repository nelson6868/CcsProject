import React, { useState, useEffect } from 'react'
import styles from '../Cart/Cart.module.css'
import { useStateValue } from '../../productdetails/Stateprovider';
import { InputGroup, Button, FormControl, Form, Row } from "react-bootstrap"
import CancelIcon from '@material-ui/icons/Cancel';
// import useStateValue from '../../../hooks/useStateValue';



function Productcart({ id, title, image, unit_price, rating, subtotal, quantity, tenure }) {
    const [{ basket }, dispatch] = useStateValue();
    const [checked, setChecked] = useState();
    const [checked2, setChecked2] = useState();
    // const [lsQuantity, setQuantity] = useState(1);
    const removeItem = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
            quantity: quantity
        })
    }
    const addItem = () => {
        dispatch({
            type: 'ADD_ITEM',
            id: id,

        })
    }
    const removeoneItem = () => {
        dispatch({
            type: 'REMOVE_ITEM',
            id: id,
            // quantity : quantity
        })
    }

    const setAnnualCycle = () => {
        dispatch({
            type: 'BILL_CYCLE',
            id: id,
        })
    }
    const setMonthlyCycle = () => {
        dispatch({
            type: 'BILL_CYCLE2',
            id: id,
        })
    }

    useEffect(() => {

        localStorage.setItem('basket', JSON.stringify(basket))
        console.log(basket)

    }, [basket]);

    useEffect(() => {
        if (tenure === 12) {
            setChecked(true)
        }
        // eslint-disable-next-line
    }, [checked]);
    useEffect(() => {
        if (tenure === 1) {
            setChecked2(true)
        }
        // eslint-disable-next-line
    }, [checked2]);

    return (


        <div>
            <div className={styles.Product}>
                {/* <span><RiDeleteBin6Line /></span> */}

                <span><CancelIcon onClick={removeItem} /></span>

                <img src={image} alt="" />
                <div className={styles.qty}>
                    <InputGroup className={styles.input}>
                        <InputGroup.Prepend>
                            <Button variant="outline-danger" onClick={removeoneItem}>-</Button>
                        </InputGroup.Prepend>
                        <FormControl aria-describedby="basic-addon1" value={quantity} />

                        <InputGroup.Append>
                            <Button variant="outline-success" onClick={addItem}>+</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>

                <p>₦{unit_price}</p>
                <p>₦{subtotal = unit_price === 0.00 ? 0.00 : parseFloat(unit_price.replace(",", "")) * quantity}</p>
                {console.log(subtotal)}

            </div>
            <p>
                <Form>
                    <fieldset>
                        <Form.Group as={Row} className="mb-3" style={{ fontSize: '20px', fontFamily: 'Gill Sans, sans-serif' }}>
                            <Form.Label as="legend" column sm={3}>
                                <strong>Billing cycle</strong>
                            </Form.Label>
                            <Row sm={12} style={{ marginTop: '10px', marginLeft: '10px' }}>
                                <Form.Check style={{ marginLeft: '10px' }}
                                    type="radio"
                                    label="Annual"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                    defaultChecked={checked}
                                    onChange={(evt) => {
                                        if (evt.currentTarget.checked) {
                                            setAnnualCycle()

                                        }
                                    }}

                                />
                                <Form.Check style={{ marginLeft: '30px' }}
                                    type="radio"
                                    label="Monthly"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                    defaultChecked={checked2}
                                    onChange={(evt) => {
                                        if (evt.currentTarget.checked) {
                                            setMonthlyCycle()

                                        }
                                    }}


                                />

                            </Row>
                        </Form.Group>
                    </fieldset>
                </Form>
            </p>
        </div>

    )

}

export default Productcart