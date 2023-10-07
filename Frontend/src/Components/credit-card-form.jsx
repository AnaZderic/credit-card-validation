import React from "react";
import { Button, Form, Row, Col, FormGroup, FormControl, FloatingLabel } from "react-bootstrap";
import BaseForm from "../baseForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./credit-card-form.css";

const CreditCardForm = () => {
    const { handleChange, handleSubmit, values } = BaseForm();
    return(
        <div className="container">
            <div className="box justify-content-center align-items-center">
                <div className="formContent">
                    <Form onSubmit={handleSubmit}>
                    <FormGroup className="formGroup">
                        <FloatingLabel
                            label="Card Number"
                            className="mb-3"
                        >
                            <FormControl
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                placeholder="Card Number"
                                value={values.cardNumber}
                                onChange={handleChange}
                            />
                        </FloatingLabel>
                    </FormGroup>
                    <Row>
                        <Col>
                            <FormGroup className="formGroup">
                                <FloatingLabel
                                    label="Expiration Date"
                                    className="mb-3"
                                >
                                    <FormControl
                                        type="text"
                                        id="expirationDate"
                                        name="expirationDate"
                                        placeholder="Expiration Date"
                                        value={values.expirationDate}
                                        onChange={handleChange}
                                    />
                                </FloatingLabel>
                            </FormGroup>
                        </Col>
                        <Col>
                        <FormGroup className="formGroup">
                            <FloatingLabel
                                label="CVC"
                                className="mb-3"
                            >
                                <FormControl
                                    type="number"
                                    id="cvc"
                                    name="cvc"
                                    placeholder="CVC"
                                    onChange={handleChange}
                                />
                            </FloatingLabel>
                        </FormGroup>
                        </Col>
                    </Row>
                    <Button
                        type="submit"
                        className="button"
                    >
                        Confirm    
                    </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default CreditCardForm; 