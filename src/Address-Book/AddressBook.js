import { useEffect, useState, useContext } from "react";
import Alert from "react-bootstrap/Alert";
import AddressCard from "./AddressCard.js";
import { Container } from "react-bootstrap";
import {AddressContext} from "./Context/AddressContext.js";

function AddressBook(props) {
    const { viewRange } = props;
    const {addresses} = useContext(AddressContext);

    const [viewAddresses, setViewAddresses] = useState(addresses.slice(viewRange[0], viewRange[1]));

    useEffect(() => {
        updateViewAddresses();
    }, [viewRange, addresses]);

    function updateViewAddresses() {
        setViewAddresses(addresses.slice(viewRange[0], viewRange[1]));
    }

    function showAlertMessage() {
        const addressSelectedShipping = addresses.find(a => a?.selected);
        
        if(!(!!addressSelectedShipping)){
            return (<Alert className="mx-auto mb-4 w-75 text-center" key="warning" variant="warning">
            Please select a shipping address!</Alert>);
        }
    }

    return (
        <div className="mt-3 container">
            {showAlertMessage()}
            <div className="card-group justify-content-evenly">
                {viewAddresses.map(address => <span className="d-flex"><AddressCard  key={address.id} address={address}></AddressCard></span>)}
            </div>
        </div>
    );
}

export default AddressBook;