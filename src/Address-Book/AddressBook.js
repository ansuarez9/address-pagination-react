import { useEffect, useState, useContext } from "react";
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Alert from "react-bootstrap/Alert";
import AddressCard from "./AddressCard.js";
import { Col, Container, Row } from "react-bootstrap";
import {AddressContext} from "./Context/AddressContext.js";

function AddressBook(props) {
    const { displaySize } = props;
    const {addresses} = useContext(AddressContext);

    const [viewRange, setViewRange] = useState([0, displaySize]);
    const [viewAddresses, setViewAddresses] = useState(addresses.slice(viewRange[0], viewRange[1]));
    const [disableNavigation, setDisableNavigation] = useState({next: false, previous: false});
    const [isSelected, setIsSelected] = useState(true);

    useEffect(() => {
        updateViewAddresses();
    }, [addresses]);

    useEffect(() => {
        setViewRange([0, displaySize]);
    }, [displaySize]);

    useEffect(() => {
        // setViewAddresses(addresses.slice(viewRange[0], viewRange[1]));
        updateViewAddresses();

        setDisableNavigation({
            next: viewRange[1] >= addresses.length,
            previous: viewRange[0] === 0
        });
    }, [viewRange]);

    function updateViewAddresses() {
        setViewAddresses(addresses.slice(viewRange[0], viewRange[1]));
    }

    function onNavigationClick(nav) {
        let firstIdxView;
        let lastIdxView;

        if(nav === 'next'){
            firstIdxView = viewRange[0] + displaySize;
            lastIdxView = viewRange[1] + displaySize;
        } else if(nav === 'previous') {
            firstIdxView = viewRange[0] - displaySize;
            lastIdxView = viewRange[1] - displaySize;
        }
        
        setViewRange([firstIdxView, lastIdxView]);
    }

    function showAlertMessage() {
        const addressSelectedShipping = addresses.find(a => a?.selected);
        
        if(!(!!addressSelectedShipping)){
            return (<Alert className="mx-auto mb-4 w-75 text-center" key="warning" variant="warning">
            Please select a shipping address!
        </Alert>);
        }
    }

    return (
       <>
       {showAlertMessage()}
            <Container>
                <Row>
                    <Col className='align-self-center' sm={1}>
                        <Button onClick={() => onNavigationClick('previous')} variant="link" disabled={disableNavigation.previous}>Previous</Button>
                    </Col>
                    <Col className='d-flex justify-content-evenly'>
                        {viewAddresses.map(address => <AddressCard  key={address.id} address={address}></AddressCard>)}
                    </Col>
                    <Col className='align-self-center' sm={1}>
                        <Button onClick={() => onNavigationClick('next')} variant="link" disabled={disableNavigation.next}>Next</Button>
                    </Col>
                </Row>
            </Container>
       </>
    );
}

export default AddressBook;