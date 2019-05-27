import React, { Component } from 'react'
import Header from '../component/Header'

class Home extends Component {
    render () {
        return(
            <div className="Main-Form">
                <Header/>
                <div>
                    Choose Address and Gender
                </div>
            </div>
        )
    }
}

export default Home