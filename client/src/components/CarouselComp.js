import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'

const CarouselComp = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../assets/tuning.jpg")}
                    alt="Tuning"
                />
                <Carousel.Caption>
                    <h3>Tuning</h3>
                    <p>Best cars for the coolest boys</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../assets/service.jpg")}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Best Service Station in Europe</h3>
                    <p>Our masters can do every types of works</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../assets/wash.jpg")}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Car wash</h3>
                    <p>15 minutes - every girl is yourth</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComp;