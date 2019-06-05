import React, { Component } from 'react'

import { Carousel } from "react-bootstrap"
import "./css/Recommend.css"
import {connect} from "react-redux"
import {CLOTHES_SRC} from "../constant/const"

class Recommend extends Component {

    renderClothes = (name) => {
        return(
            <Carousel.Item>
                <img
                    className="img"
                    src={CLOTHES_SRC[name]}
                    alt={name}
                />
                <Carousel.Caption>
                    <h3>{name}</h3>
                </Carousel.Caption>
                </Carousel.Item>
        )
    }
    render() {
        const { clothes } = this.props

        const clothesSize = clothes.map( clothes => {
            return this.renderClothes(clothes)
        })

        return(
            <Carousel className="Carousel">
                {clothesSize}
            </Carousel>
        )
    }
}

const mapStateToProps = state => ({
    clothes : state.inputForm.clothes
})

export default connect(mapStateToProps)(Recommend)

