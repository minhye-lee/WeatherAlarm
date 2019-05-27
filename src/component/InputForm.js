import React, { Component } from 'react'
import FormWrapper from './FormWrapper'

import { Form, Row, Col, Button} from "react-bootstrap"

class InputForm extends Component {
    render() {
        return (
            <FormWrapper>
                <Form>
                    <Form.Group as={Col} controlId="Address-city">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="email" placeholder="시/도" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="Address-county">
                        <Form.Label>County</Form.Label>
                        <Form.Control type="email" placeholder="시/군/구" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="Address-village">
                        <Form.Label>Village</Form.Label>
                        <Form.Control type="email" placeholder="읍/면/동" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control as="select">
                            <option>남</option>
                            <option>여</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </FormWrapper>
        )
    }
}

export default InputForm