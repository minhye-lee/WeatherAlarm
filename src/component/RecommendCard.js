import React, { Component } from 'react'

import { Carousel, Card, CardDeck } from "react-bootstrap"
import "./css/RecommendCard.css"
import {connect} from "react-redux"
import {CLOTHES_SRC} from "../constant/const"

class RecommendCard extends Component {

    renderClothes = (name) => {
        return(
            <Card>
                <Card.Img variant="top" src={CLOTHES_SRC[name]} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        )
    }
    render() {
        const { clothes } = this.props

        const clothesSize = clothes.map( clothes => {
            return this.renderClothes(clothes)
        })

        return(
            <CardDeck className="CardDeck">
                {clothesSize}
            </CardDeck>
        )
    }
}

const mapStateToProps = state => ({
    clothes : state.inputForm.clothes
})

export default connect(mapStateToProps)(RecommendCard)

