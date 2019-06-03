import React, { Component } from 'react'
import Location from "../component/Location"
import Recommend from "../component/Recommend"

class Clothes extends Component {
    render () {
        return(
            <div className="Clothes">
                <Location/>
                <Recommend/>
            </div>
        )
    }
}

export default Clothes