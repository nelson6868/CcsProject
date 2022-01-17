import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import Product from './Product';
import './Home.css'
import microsoft from '../../assets/Office-365-is-now-Microsoft-365-shutterstock_1487706341-1024x683 1.png';
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';

const ProductDetails = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    //declaration to get id of product selelcted
    const { productId } = useParams();
    //fucntion to get particular id of product selected
    const getProductByProductId = () => {
        try {

            axios.get(`products/products/${productId}/`, {

            }).then(res => {
                console.log("res", res.data)

                const theProduct = res.data;
                setProduct(theProduct)
            });
            setLoading(true)
        } catch (error) {
            console.log("error", error);
        }
    }



    useEffect(() => {
        getProductByProductId(productId);
        // eslint-disable-next-line
    }, [productId])
    return (
        <div className="home">
            <img className="home__logo" src={microsoft} alt="" />
            <div className="home_row">

                {loading ?

                    <Product
                        image={product.product_image}
                        id={product.id}
                        title={product.name}
                        description={product.description}
                        unit_price={product.regular_price === null ? 0.00:product.regular_price}
                        rating={4}
                        quantity={1}
                        tenure={1}
                        subtotal={product.regular_price === null ? 0.00 : product.regular_price}
                    />
                    : <ReactBootStrap.Spinner animation="border" />}

            </div>
        </div>
    )
}

export default ProductDetails