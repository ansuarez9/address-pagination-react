import { createContext, useState } from "react";
import data from "../../sample-data/data";

const AddressContext = createContext();

function AddressProvider(props) {
    const initialAddresses = [...data];
    const [addresses, setAddresses] = useState(initialAddresses);
    const [address, setAddress] = useState(null);

    function resetSelectedFlag() {
        addresses.forEach(address => address.selected = false);
    }

    function onAddressSelection(address){
        resetSelectedFlag();

        address.selected = true;
        setAddress(address);
    }
    
    const contextValues = {
        addresses: addresses,
        onAddressSelection: onAddressSelection
    };

    return (
        <AddressContext.Provider value={contextValues}>
            {props.children}
        </AddressContext.Provider>
    );
}

export {AddressContext, AddressProvider};