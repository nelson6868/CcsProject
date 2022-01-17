import React from 'react';
import './explorecards.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import longArrow from "../../assets/longArrow.svg";
import explore1 from "../../assets/explore1.svg";
import explore2 from "../../assets/explore2.svg";
import arrowNextWhite from "../../assets/arrowNextWhite.svg";


import { Card, Button, Container, Row, Col } from 'react-bootstrap';


function NextArrowWhite(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            // style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        >
            <img src={arrowNextWhite} className="arrowNextWhite" alt="" />
        </div>
    );
}

const ExploreLanding = () => {
    const settings = {
        focusOnSelect: true,
        infinite: true,
        centerMode: false,
        slidesToShow: 1.95,
        slidesToScroll: 1,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        swipe: true,
        nextArrow: <NextArrowWhite />
    };

    return (
        <div className='carousel2' style={{ display: "flex", backgroundColor: 'rgba(189, 189, 193, 0.36)', height: "90vh" }}>
            <Container style={{ marginTop: "10px" }}>
                <Row >
                    <Col className='w-50' >
                        <Card style={{
                            border: 'none',
                        }} className="cardd">
                            <Card.Body className='card-body' style={{ marginTop: '60%' }}>
                                <Card.Title className="card-title" style={{ fontWeight: 1000, fontFamily: 'Poppins' }}>Why Choose Us</Card.Title>
                                <Button className="button" style={{ fontFamily: 'Poppins', fontWeight: 800 }}>Explore More</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className='w-50'>
                        <Slider {...settings} >
                            <div className="slider-item2" style={{ width: "300px" }}>
                                <img src={explore1} alt="" />
                                <Card style={{
                                    width: "138%",
                                    top: "160px",
                                    right: "25px",
                                }}>
                                    <Card.Body className="textOnImg">
                                        <h2 style={{ fontFamily: 'Poppins', fontWeight: 300 }}>Cost Effectiveness</h2>
                                        <Card.Text style={{ fontFamily: 'Poppins', fontWeight: 300 }}>
                                            Eliminate the cost of hardware and serial maintenance. Focus on infrastructure that delivers additional benefits. Save cost, gain value.
                                        </Card.Text>
                                        <img src={longArrow} alt="" />
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="slider-item2" style={{ width: "300px" }}>
                                <img src={explore1} alt="" />
                                <Card style={{
                                    width: "138%",
                                    top: "160px",
                                    right: "25px"
                                }}>
                                    <Card.Body className="textOnImg">
                                        <h2 style={{ fontFamily: 'Poppins', fontWeight: 300 }}>FLEXIBILITY</h2>
                                        <Card.Text style={{ fontFamily: 'Poppins', fontWeight: 300 }}>
                                            Eliminate the cost of hardware and serial maintenance. Focus on infrastructure that delivers
                                            additional benefits. Save cost, gain value.
                                        </Card.Text>
                                        <img src={longArrow} alt="" />
                                    </Card.Body>
                                </Card>
                                {/* <Card >
                                    <Card.Body className="textOnImg">
                                        <h2>FLEXIBILITY</h2>
                                        <Card.Text>
                                            Eliminate the cost of hardware and serial maintenance. Focus on infrastructure that delivers
                                            additional benefits. Save cost, gain value.
                                        </Card.Text>
                                        <img src={longArrow} alt="" />
                                    </Card.Body>
                                </Card> */}
                            </div>
                            <div className="slider-item2" style={{ width: "300px" }}>
                                <img src={explore2} alt="" />
                                <Card style={{
                                    width: "138%",
                                    top: "160px",
                                    right: "25px"
                                }}>
                                    <Card.Body className="textOnImg">
                                        <h2 style={{ fontFamily: 'Poppins', fontWeight: 300 }}>FLEXIBILITY</h2>
                                        <Card.Text style={{ fontFamily: 'Poppins', fontWeight: 300 }}>
                                            Eliminate the cost of hardware and serial maintenance. Focus on infrastructure that delivers
                                            additional benefits. Save cost, gain value.
                                        </Card.Text>
                                        <img src={longArrow} alt="" />
                                    </Card.Body>
                                </Card>
                            </div>
                            {/* <div className="slider-item">
                                <img src={heroSlider1} alt="" />
                            </div>
                            <div className="slider-item">
                                <img src={heroSlider1} alt="" />
                            </div>
                            <div className="slider-item">
                                <img src={heroSlider1} alt="" />
                            </div> */}
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ExploreLanding;