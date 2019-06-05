import React, { Component } from 'react'
import { Carousel } from "react-bootstrap"

import "./css/Recommend.css"

class Recommend extends Component {
    render() {
        return(
            <Carousel class="Carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://previews.123rf.com/images/pixelrobot/pixelrobot1503/pixelrobot150300006/37362472-%ED%9D%B0-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EC%98%A4%ED%94%88-%ED%95%98%EB%93%9C-%EC%BB%A4%EB%B2%84-%EC%B1%85%EC%97%90-%ED%9D%B0%EC%83%89-%EB%B9%88-%ED%8E%98%EC%9D%B4%EC%A7%80-.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        // src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        // src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Recommend