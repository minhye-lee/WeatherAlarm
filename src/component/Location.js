import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Jumbotron, Button } from "react-bootstrap"
import "./css/Location.css"
import {GENDER} from "../constant/const";


class Location extends Component {

    weather_description = () => {
        const { temperature, rain, wind, gender } = this.props
        const rain_description = parseFloat(rain) > 0 ? `오고 있습니다.` : `오고 있지 않습니다.`
        const gender_description = gender == GENDER.male ? `남성` : `여성`
        const weather = `현재 기온은 ${temperature['tc']}도 이며 오늘 최고 기온은 ${temperature['tmax']}, 최저 기온은 ${temperature['tmin']} 입니다.
        바람은 ${wind} 속도로 불고 있고 비는 ${rain_description} \n 해당 데이터로 사용자의 성별(${gender_description})에 맞춘 옷 추천 리스트 입니다.`
        return weather
    }


    render() {
        const { city, county, village, gender } = this.props
        const Location = !city || !county || !village ? `Error` : `${city} ${county} ${village}의 현재 날씨는`
        const Description = !city || !county || !village ? `잘못된 위치 입니다.` : this.weather_description()
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
    temperature : state.inputForm.temperature,
    wind : state.inputForm.wind,
    rain : state.inputForm.rain,
})

export default connect(mapStateToProps)(Location)
