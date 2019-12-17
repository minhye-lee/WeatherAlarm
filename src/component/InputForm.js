import React, { Component } from 'react'
import FormWrapper from './FormWrapper'

import { Form, Col, Button} from "react-bootstrap"

import { connect } from 'react-redux'
import { inputCity, inputCounty, inputVillage,postLocation } from "../redux/inputForm"
import { Link } from 'react-router-dom'
import "./css/InputForm.css"

class InputForm extends Component {

    handleClicked = () => {
        const {city, county, village, postLocation} = this.props
        postLocation(city, county, village)

    }


    render() {
        const { inputCity, inputCounty, inputVillage } = this.props
        return (
            <FormWrapper>
                <Form>
                    <Form.Group as={Col} controlId="Address-city">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            className="placeholder"
                            type="text"
                            placeholder="시/도"
                            onChange={ e => inputCity(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="Address-county">
                        <Form.Label>County</Form.Label>
                        <Form.Control
                            className="placeholder"
                            type="text"
                            placeholder="시/군/구"
                            onChange={ e => inputCounty(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="Address-village">
                        <Form.Label>Village</Form.Label>
                        <Form.Control
                            className="placeholder"
                            type="text"
                            placeholder="읍/면/동"
                            onChange={ e => inputVillage(e.target.value)}
                        />
                    </Form.Group>
                    <Button
                        className="Button"
                        variant="primary"
                        type="reset"
                        onClick={this.handleClicked}
                    ><Link to="/clothes">
                        Submit
                    </Link>
                    </Button>
                </Form>
            </FormWrapper>
        )
    }
}

const mapStateToProps = state => ({
    city : state.inputForm.city,
    county : state.inputForm.county,
    village : state.inputForm.village,
})

const mapDispatchToProps = {
    inputCity,
    inputCounty,
    inputVillage,
    postLocation,
}


export default connect(mapStateToProps, mapDispatchToProps)(InputForm)