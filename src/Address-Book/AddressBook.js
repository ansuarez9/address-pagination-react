import { useEffect, useState, useContext } from "react";
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import AddressCard from "./AddressCard.js";
import { Col, Container, Row } from "react-bootstrap";
import {AddressContext} from "./Context/AddressContext.js";

function AddressBook(props) {
    const { displaySize, onEditClick } = props;
    const context = useContext(AddressContext);
    const {addresses, onAddressSelection} = context;

    const [viewRange, setViewRange] = useState([0, displaySize]);
    const [viewAddresses, setViewAddresses] = useState(addresses.slice(viewRange[0], viewRange[1]));
    const [disableNavigation, setDisableNavigation] = useState({next: false, previous: false});

    useEffect(() => {
        setViewRange([0, displaySize]);
    }, [displaySize]);

    useEffect(() => {
        setViewAddresses(addresses.slice(viewRange[0], viewRange[1]));

        setDisableNavigation({
            next: viewRange[1] >= addresses.length,
            previous: viewRange[0] === 0
        });
    }, [viewRange]);

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

    return (
       <>
            <Container>
                <Row>
                    <Col className='align-self-center' sm={1}>
                        <Button onClick={() => onNavigationClick('previous')} variant="link" disabled={disableNavigation.previous}>Previous</Button>
                    </Col>
                    <Col>
                        <CardGroup>
                            {viewAddresses.map(address => <AddressCard  key={address.id} address={address} onEditClick={() => onEditClick('edit', address)} onAddressSelection={onAddressSelection}></AddressCard>)}
                        </CardGroup>
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