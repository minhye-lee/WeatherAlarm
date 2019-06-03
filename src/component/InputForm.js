import React, { Component } from 'react'
import FormWrapper from './FormWrapper'

import { Form, Col, Button} from "react-bootstrap"

import { connect } from 'react-redux'
import { inputCity, inputCounty, inputVillage, inputGender, postLocationGender } from "../redux/inputForm"

class InputForm extends Component {

    handleClicked = () => {
        const { city, county, village, gender, postLocationGender } = this.props
        postLocationGender(city, county, village, gender)
        console.log('dd')
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
                            <option value="1">남</option>
                            <option value="2">여</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="reset" onClick={this.handleClicked}>
                        Submit
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