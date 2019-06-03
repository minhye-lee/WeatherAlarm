import React, { Component } from 'react'
import './css/Description.css'
import InputForm from './InputForm'

class Description extends Component {
    render() {
        return(
            <div className="Description">
                <div className="Description-header">
                    We recommend clothes that match the weather of your residence and gender.
                </div>
                <div className="Description-form">
                    <InputForm/>
                </div>
            </div>
        )
    }
}

export default Description