import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Slider from "react-slick";
import heroSlider1 from "../../assets/heroSlider1.svg";
import arrowNextBlue from "../../assets/arrowNextBlue.svg";
import arrowPrev from "../../assets/arrowPrev.svg";
// import LandingPage1 from '../../assets/LandingPage1.svg';
// import Landing2 from '../../assets/Landing2.svg'
// import landingC2 from '../../assets/landingC2.jpg'
// import thirdCarouselSlider from '../../assets/thirdCarouselSlider.jpg'
// import secondCarouselSlider from '../../assets/secondCarouselSlider.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './landingCarousel.css';



function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            // style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        >
            <img src={arrowPrev} alt="" className="arrowPrev" />
        </div>
    );
}

function NextArrowBlue(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            // style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        >
            <img src={arrowNextBlue} className="arrowNextBlue" alt="" />
        </div>
    );
}

const LandingCarousel = () => {
    // const [index, setIndex] = React.useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // };

    // const handleClickNext = () => {
    //     onClick?: MouseEventHandler<HTMLDivElement> | undefined
    // }

    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 1.7,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        swipe: true,
        nextArrow: <NextArrowBlue />,
        prevArrow: <PrevArrow />
        // dotsClass: "custom-dots"
    };

    return (
        <div>
            <Slider {...settings} className='carousel1'>
                <div className="slider-item">
                    <img src={heroSlider1} alt="" />
                </div>
                <div className="slider-item">
                    <img src={heroSlider1} alt="" />
                </div>
                <div className="slider-item">
                    <img src={heroSlider1} alt="" />
                </div>
                <div className="slider-item">
                    <img src={heroSlider1} alt="" />
                </div>
                <div className="slider-item">
                    <img src={heroSlider1} alt="" />
                </div>
            </Slider>


            <Card className='modall'>
                <Card.Body style={{ padding: "0" }}>
                    <Card.Title className='firstheading' style={{ fontFamily: 'Poppins', fontWeight: '800' }}> Access to hundreds of smart cloud solutions. </Card.Title>
                    <Card.Text className='welcomespan' style={{ fontFamily: 'Poppins', fontWeight: '300' }}>
                        Welcome to Sidmach Cloud Hub
                    </Card.Text>
                    <Button className='firstcbutton' style={{ fontFamily: 'Poppins', fontWeight: '800' }}>Buy Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default LandingCarousel;
