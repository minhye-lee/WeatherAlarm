import React, { Component } from 'react'
import Header from '../component/Header'
import Description from '../component/Description'

class Home extends Component {
    render () {
        return(
            <div className="Home">
                <Header/>
                <Description/>
            </div>
        )
    }
}

export default Home