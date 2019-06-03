import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Jumbotron, Button } from "react-bootstrap"
import "./css/Location.css"


class Location extends Component {
    render() {
        const { city, county, village, gender } = this.props
        const Location = !city || !county || !village ? `Error` : `${city} ${county} ${village}의 현재 날씨는`
        const Description = !city || !county || !village ? `잘못된 위치 입니다.` : `현재 날씨는 ~~~`
        return (
            <Jumbotron className="Jumbotron">
                <h1>{Location}</h1>
                <p>
                    {Description}
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        )
    }
}

const mapStateToProps = state => ({
    city : state.inputForm.city,
    county : state.inputForm.county,
    village : state.inputForm.village,
    gender : state.inputForm.gender,
})

export default connect(mapStateToProps)(Location)
