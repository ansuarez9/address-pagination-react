import { useContext } from "react";
import Alert from "react-bootstrap/Alert";
import AddressCard from "./AddressCard.js";
import {AddressContext} from "./Context/AddressContext.js";

function AddressBook(props) {
    const { viewAddresses } = props;
    const {addresses} = useContext(AddressContext);

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
                {viewAddresses.map(address => <AddressCard key={address.id} address={address}></AddressCard>)}
            </div>
        </div>
    );
}

export default AddressBook;