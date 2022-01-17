import React, { useEffect, useState } from 'react';
import './Product.css';
import { useStateValue } from './Stateprovider';
import CustomButton from '../productdetails/custom-button';
import StarIcon from '@material-ui/icons/Star';
import Swal from 'sweetalert2'
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";




function Product({ id, title, image, unit_price, rating, quantity, description, tenure, subtotal }) {

    // const [qty,setqty] = useState(1)
    const [show, setShow] = useState(false);
    const [{ basket }, dispatch] = useStateValue();
    //function to add items to cart
    const addToBasket = () => {
        // console.log('this buttonis working')
        dispatch({
            basket,
            type: 'ADD_TO_BASKET',

            item: {
                id: id,
                title: title,
                image: image,
                unit_price: unit_price,
                quantity: quantity,
                rating: rating,
                description: description,
                tenure: tenure,
                subtotal: subtotal === 0.00 ? 0.00 : parseFloat(subtotal.replace(",", "")) * quantity
            }

        })


    }
    //make the items stored in basket also store in local storage 
    useEffect(() => {

        localStorage.setItem('basket', JSON.stringify(basket))
        console.log(basket)

    }, [basket]);

    if (show) {



        Swal.fire({
            title: 'Item has been added to cart.',
            icon: 'success',
            customClass: 'swal-wide',
        });

    }
    console.log(basket)

    return (
        <div className="product">
            <img src={image} alt="" />
            <div className="product_info">
                <h1 style={{ fontWeight: '800' }}>{title}</h1>

                <p className="product_price">
                    <small>₦</small>
                    <strong>{unit_price}</strong>
                </p>
                <h2>Description</h2>
                <p>{description}</p>

                <div className="product_rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p><StarIcon style={{ color: '#FFDF00' }} /></p>
                            ))
                    }
                </div>


                <CustomButton onClick={(event) =>
                    [addToBasket(),
                    setShow(true)]
                }
                    inverted>Add to cart</CustomButton>
                <p style={{ marginTop: "20px" }}><strong>Share</strong></p>
                <img src={facebook} alt="" style={{ paddingRight: "10px" }} />
                <img src={instagram} alt="" style={{ paddingRight: "10px" }} />
                <img src={twitter} alt="" style={{ paddingRight: "10px" }} />
                <img src={linkedin} alt="" style={{ paddingRight: "10px" }} />

            </div>

        </div>
    )
}
export default (Product);








