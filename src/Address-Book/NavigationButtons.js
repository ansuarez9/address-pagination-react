import { useContext } from "react";
import { Button } from "react-bootstrap";
import { AddressContext } from "./Context/AddressContext";
import PageSize from "./PageSize";

function NavigationButtons(props) {
    const {displaySize, onDisplaySizeChange} = props;
    const {updateModalConfig} = useContext(AddressContext);

    const modalForNewAddress = {show: true, mode: 'new'}

    return (
        <span className="d-flex">
            <Button style={{marginRight: '1rem'}} onClick={() => updateModalConfig(modalForNewAddress)} variant="primary">Add New Address</Button>
            <PageSize onDisplaySizeChange={onDisplaySizeChange} displaySize={displaySize} />
        </span>
    )
}

export default NavigationButtons;