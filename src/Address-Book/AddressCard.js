import { useContext } from 'react';
import clsx from 'clsx';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {AddressContext} from './Context/AddressContext';

function AddressCard(props) {
    const {address} = props;

    const {onSetAddress, onAddressSelection, updateModalConfig} = useContext(AddressContext);
    
    const className = clsx({
        'text-bg-light': address.selected,
        'bg-opacity-25': address.selected,
        'mb-3': true
    });

    const buttonClass = clsx({
        'btn': true,
        'btn-success': !address.selected,
        'disabled': address.selected
    })

    function onEditClick() {
        updateModalConfig({show: true, mode: 'edit'});
        onSetAddress(address);
    }

    return (
        <Card bg={address.selected ? 'success' : ''} border={address.selected ? 'success' : ''} className={className}>
            <Card.Body>
                <Card.Title>{address.nickname}</Card.Title>
                <Card.Text>
                    <span className="d-block">{address.fullName}</span>
                    <span className="d-block">{address.address1} {address.address2 ?? ''}</span>
                    <span className="d-block">{address.city}, {address.state} {address.zip}</span>
                </Card.Text>
                <div className='d-flex justify-content-between'>
                    <Button onClick={() => onAddressSelection(address)} variant={address.selected ? 'success' : 'outline-primary'} disabled={address.selected}>{address.selected ? 'Selected' : 'Ship Here'}</Button>
                    <Button className='ms-3' onClick={onEditClick} variant='secondary'>Edit</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default AddressCard;