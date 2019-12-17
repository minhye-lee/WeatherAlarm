import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Jumbotron, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import CurrentTime from './CurrentTime'
import "./css/Location.css"
import { initializeForm, postLocation } from "../redux/inputForm"


class Location extends Component {
    state = {}
    componentDidMount() {
        const {city, county, village, postLocation} = this.props
        if(city && county && village) {
            const timeInter = setInterval(() => {
                postLocation(city, county, village);
            }, 600000)
            this.setState({timeInter : timeInter})
        } else {
            console.log('not exist')
        }
    }

    componentWillUnmount() {
        clearInterval(this.state.timeInter);
    }

    weather_description = () => {
        const { temperature, rain, wind } = this.props
        const rain_description = parseFloat(rain) > 0 ? `오고 있습니다.` : `오고 있지 않습니다.`
        const weather = `현재 기온은 ${temperature['tc']}도 이며 오늘 최고 기온은 ${temperature['tmax']}, 최저 기온은 ${temperature['tmin']} 입니다.
        바람은 ${wind} 속도로 불고 있고 비는 ${rain_description}`
        return weather
    }


    render() {
        const { city, county, village, initializeForm} = this.props
        const Location = !city || !county || !village ? `Error` : `${city} ${county} ${village}의 현재 날씨는`
        const Description = !city || !county || !village ? `잘못된 위치 입니다.` : this.weather_description()
        return (
            <Jumbotron className="Jumbotron">
                <div>
                    <CurrentTime/>
                </div>
                    <h1>{Location}</h1>
                <div>
                    {Description}
                </div>
                <div>
                    <Button variant="primary" onClick={initializeForm}><Link to='/'>뒤로가기</Link></Button>
                </div>
            </Jumbotron>
        )
    }
}

const mapStateToProps = state => ({
    city : state.inputForm.city,
    county : state.inputForm.county,
    village : state.inputForm.village,
    temperature : state.inputForm.temperature,
    wind : state.inputForm.wind,
    rain : state.inputForm.rain,
})

const mapDispatchToProps = {
    initializeForm,
    postLocation,
}
export default connect(mapStateToProps, mapDispatchToProps)(Location)
