import React, { Component } from 'react'

class Weather extends Component {

    state = { weather: null };

    // componentDidMount() {
    //     fetch('/api/getWeather')
    //         .then(res => res.json())
    //         .then(weather => this.setState({ weather: weather.result}))
    // }

    render() {
        const { weather } = this.state
        return (
            <div>
                {weather ? <h1>{`Hello ${weather}`}</h1> : <h1>Loading.. please wait!</h1>}
            </div>
        )
    }
}

export default Weather