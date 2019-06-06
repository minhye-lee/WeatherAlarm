import React, { Component } from 'react'
import Location from "../component/Location"
import Recommend from "../component/Recommend"
import RecommendCard from "../component/RecommendCard"

class Clothes extends Component {
    render () {
        return(
            <div className="Clothes">
                <Location/>
                <RecommendCard/>
                {/*<Recommend/>*/}
            </div>
        )
    }
}

export default Clothes