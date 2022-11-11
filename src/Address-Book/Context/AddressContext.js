import { createContext, useState } from "react";
import data from "../../sample-data/data";

const AddressContext = createContext();

function AddressProvider(props) {
    const initialAddresses = [...data];
    const [addresses, setAddresses] = useState(initialAddresses);
    const [address, setAddress] = useState(null);
    const [modalConfig, setModalConfig] = useState({show: false, mode: null});

    function updateModalConfig (modal) {
        if(modal.mode === 'new'){
            setAddress(null);
        }
        setModalConfig(modal);
    }

    function resetSelectedFlag() {
        addresses.forEach(address => address.selected = false);
    }

    function onSetAddress(a) {
        setAddress(a);
    }

    function onAddressSelection(address){
        resetSelectedFlag();

        address.selected = true;
        onSetAddress(address);
    }

    function onDeleteAddress(a) {
        const newAddresses = addresses.filter(ad => a.id !== ad.id);
        setAddresses(newAddresses);
    }

    function onUpdateAddress(a) {
        let addressesDup = [];
        if(a?.selected) {
            resetSelectedFlag();
        }

        if(a?.id){
            addressesDup = addresses.map(ad => {
                if(ad.id === a.id){
                    return ad = {...ad, ...a}
                }
                return ad;
            });
        } else {
            a.id = randomIdGenerator();
            addressesDup = [a, ...addresses];
        }

        setAddresses(addressesDup);
    }

    function randomIdGenerator() {
        return Math.floor(Math.random() * 10000);
    }
    
    const contextValues = {
        addresses: addresses,
        address: address,
        modalConfig: modalConfig,
        onAddressSelection: onAddressSelection,
        onSetAddress: onSetAddress,
        onUpdateAddress: onUpdateAddress,
        updateModalConfig: updateModalConfig,
        onDeleteAddress: onDeleteAddress
    };

    return (
        <AddressContext.Provider value={contextValues}>
            {props.children}
        </AddressContext.Provider>
    );
}

export {AddressContext, AddressProvider};