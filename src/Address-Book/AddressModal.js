import React, { useState, useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {AddressContext} from './Context/AddressContext';

function AddressModal() {
    const [validated, setValidated] = useState(false);
    const { onUpdateAddress, address, modalConfig, updateModalConfig, onDeleteAddress } = useContext(AddressContext);

    const isEditMode = modalConfig?.mode === 'edit';
    const deleteButton = <Button variant="danger" onClick={() => deleteAddress()}>Delete</Button>;

    useEffect(() => setValidated(false), [modalConfig]);

    function deleteAddress() {
        onDeleteAddress(address);
        handleClose();
    }

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            onUpdateAddress(buildAddress(form));
            handleClose();
        }

        setValidated(true);
    }

    function buildAddress(form) {

        return ({
            "id": address?.id,
            "nickname": form[1].value,
            "fullName": form[3].value,
            "address1": form[4].value,
            "address2": form[5].value,
            "city": form[6].value,
            "state": form[7].value,
            "zip": form[8].value,
            "selected": form[2].checked
        });
    }

    function handleClose() {
        updateModalConfig({show: false, mode: null})
    }

    return (
        <Modal show={modalConfig.show} onHide={handleClose}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>{isEditMode ? 'Update' : 'New'} Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicNickname">
                                <Form.Label>Nickname</Form.Label>
                                <Form.Control required type="text" placeholder="John Doe's Bachelor Pad" defaultValue={address?.nickname} />
                                <Form.Control.Feedback type="invalid">
                                    Please add a nickname.
                                </Form.Control.Feedback>
                                <Form.Text className="text-muted">
                                    Give your address an alias.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" defaultChecked={address?.selected} label="Ship Here" />
                            </Form.Group>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicFullName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control required type="text" placeholder="John Doe" defaultValue={address?.fullName} />
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
                                <Form.Control required type="text" placeholder="Washington" defaultValue={address?.city} />
                                <Form.Control.Feedback type="invalid">
                                    Please provide an city.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicState">
                                <Form.Label>State</Form.Label>
                                <Form.Control required type="text" placeholder="DC" defaultValue={address?.state} />
                                <Form.Control.Feedback type="invalid">
                                    Please provide an state.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control required type="text" placeholder="20003" defaultValue={address?.zip} />
                                <Form.Control.Feedback type="invalid">
                                    Please provide an zip code.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    {modalConfig?.mode !== 'new' ? deleteButton : ''}
                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default AddressModal;