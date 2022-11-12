import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import AddressBook from "./AddressBook";
import { AddressContext } from "./Context/AddressContext";

function AddressBookContainer(props) {
    const {displaySize} = props
    const [viewRange, setViewRange] = useState([0, displaySize]);
    const [disableNavigation, setDisableNavigation] = useState({next: false, previous: false});
    const {addresses} = useContext(AddressContext);
    const [viewAddresses, setViewAddresses] = useState(addresses.slice(viewRange[0], viewRange[1]));

    useEffect(() => {
        setViewAddresses(addresses.slice(viewRange[0], viewRange[1]));

        setDisableNavigation({
            next: viewRange[1] >= addresses?.length,
            previous: viewRange[0] === 0
        });

    }, [viewRange, addresses]);

    useEffect(() => {
        setViewRange([0, displaySize]);
    }, [displaySize]);
    
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
        <div className="d-flex justify-content-evenly align-items-center">
            <span className='col-md-1'>
                <Button onClick={() => onNavigationClick('previous')} variant="link" disabled={disableNavigation.previous}>Previous</Button>
            </span>
            <span className='col-md-10'>
                <AddressBook viewAddresses={viewAddresses}></AddressBook>
            </span>
            <span className='col-md-1'>
                <Button onClick={() => onNavigationClick('next')} variant="link" disabled={disableNavigation.next}>Next</Button>
            </span>
        </div>
    )
}

export default AddressBookContainer;