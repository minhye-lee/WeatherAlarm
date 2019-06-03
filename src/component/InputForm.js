import React, { Component } from 'react'
import FormWrapper from './FormWrapper'

import { Form, Col, Button} from "react-bootstrap"

import { connect } from 'react-redux'
import { inputCity, inputCounty, inputVillage, inputGender, postLocationGender } from "../redux/inputForm"
import { Link } from 'react-router-dom'
import "./css/InputForm.css"
import { GENDER } from "../constant/const";


class InputForm extends Component {

    handleClicked = () => {
        const {city, county, village, gender, postLocationGender} = this.props
        postLocationGender(city, county, village, gender)

    }


    render() {
        const { inputCity, inputCounty, inputVillage, inputGender } = this.props
        return (
            <FormWrapper>
                <Form>
                    <Form.Group as={Col} controlId="Address-city">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="시/도"
                            onChange={ e => inputCity(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="Address-county">
                        <Form.Label>County</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="시/군/구"
                            onChange={ e => inputCounty(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="Address-village">
                        <Form.Label>Village</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="읍/면/동"
                            onChange={ e => inputVillage(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control
                            as="select"
                            onChange={e => inputGender(e.target.value)}
                        >
                            <option value={GENDER.male}>남</option>
                            <option value={GENDER.male}>여</option>
                        </Form.Control>
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
    gender : state.inputForm.gender,
})

const mapDispatchToProps = {
    inputCity,
    inputCounty,
    inputVillage,
    inputGender,
    postLocationGender,
}


export default connect(mapStateToProps, mapDispatchToProps)(InputForm)