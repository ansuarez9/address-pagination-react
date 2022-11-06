import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AddressModal(props) {
    const {show, handleClose, mode, address, onUpdateAddress} = props;
    const [validated, setValidated] = useState(false);

    const isEditMode = mode === 'edit';

    function handleSubmit(e) {
        const form = e.currentTarget;
        console.log(form);

        debugger;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            onUpdateAddress(buildAddress(form, isEditMode));
            handleClose();
        }

        setValidated(true);
    }

    function buildAddress(form, isEditMode) {
        return({
            "id": isEditMode ? address.id : randomIdGenerator(),
            "nickname": form[1].value,
            "fullName": form[3].value,
            "address1": form[4].value,
            "address2": form[5].value,
            "city": form[6].value,
            "state": form[7].value,
            "zip": form[8].value,
            "selected": form[2].value
        });
    }

    function randomIdGenerator() {
        return Math.floor(Math.random() * 10000);
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>{isEditMode ? 'Update' : 'New' }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicNickname">
                                <Form.Label>Nickname</Form.Label>
                                <Form.Control required type="text" placeholder="Enter Nickname" defaultValue={address?.nickname} />
                                <Form.Control.Feedback type="invalid">
                                    Please add a nickname.
                                </Form.Control.Feedback>
                                <Form.Text className="text-muted">
                                    Give your address an alias.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Ship Here" />
                            </Form.Group>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicFullName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control required type="text" placeholder="Full Name" defaultValue={address?.fullName} />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a full name.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicAddress1">
                                <Form.Label>Address 1</Form.Label>
                                <Form.Control required type="text" placeholder="Street Address" defaultValue={address?.address1} />
                                <Form.Control.Feedback type="invalid">
                                    Please provide an address.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control type="text" placeholder="Apartment, Studio, Room, Suite" defaultValue={address?.address2} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control required type="text" placeholder="City" defaultValue={address?.city} />
                                <Form.Control.Feedback type="invalid">
                                    Please provide an city.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicState">
                                <Form.Label>State</Form.Label>
                                <Form.Control required type="text" placeholder="State" defaultValue={address?.state} />
                                <Form.Control.Feedback type="invalid">
                                    Please provide an state.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control required type="text" placeholder="Zip" defaultValue={address?.zip} />
                                <Form.Control.Feedback type="invalid">
                                    Please provide an zip code.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default AddressModal;