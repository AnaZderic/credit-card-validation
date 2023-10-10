import { Button, Form, Row, Col, FormGroup, FormControl, FloatingLabel, Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./credit-card-form.css";
import React from "react";
import BaseForm from "../baseForm";

const CreditCardForm = () => {
    const { handleChange, handleSubmit, values } = BaseForm();
    const [show, setShow] = React.useState({ toggle: false, success: false, errorsModel: false});
    
    return(
        <>
        {show.toggle &&
        <Modal show centered size="md" >
            <Modal.Header closeButton onHide={() => setShow({ toggle: false }) }>
                <Modal.Title>Status {show.success ? "Success" : "Failure"}</Modal.Title>
            </Modal.Header>

            <Modal.Body className="d-flex justify-content-center">
                {show.success
                ? <img src="https://cdn1.iconfinder.com/data/icons/basic-ui-icon-rounded-colored/512/icon-41-512.png"/>
                :
                    <Col>
                        <Row>
                            <img src="data:image/png;base64,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"/>
                        </Row>
                        {show.errorsModel && 
                            Object.entries(show.errorsModel).map(([errName, errMsg]) => errMsg && <Row className="border border-danger rounded-3 m-1 p-2"  key={errName}>{errMsg}</Row>)
                        }
                    </Col>
                }
            </Modal.Body>
        </Modal>
        }

        <div className="container">
            <div className="box justify-content-center align-items-center">
                <div className="formContent">
                    <Form>
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
                                        type="month"
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
                                label="CVV"
                                className="mb-3"
                            >
                                <FormControl
                                    type="number"
                                    id="cvv"
                                    name="cvv"
                                    placeholder="cvv"
                                    onChange={handleChange}
                                />
                            </FloatingLabel>
                        </FormGroup>
                        </Col>
                    </Row>
                    <Button
                        type="button"
                        className="button"
                        onClick={handleSubmit(setShow)}
                    >
                        Confirm    
                    </Button>
                    </Form>
                </div>
            </div>
        </div>
        </>
            
    )
}

export default CreditCardForm; 