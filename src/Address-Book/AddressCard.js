import clsx from 'clsx';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function AddressCard(props) {
    const { address, onAddressSelection, onEditClick } = props;
    
    const className = clsx({
        'border-success': address.selected,
        'text-bg-light': address.selected
    });

    const buttonClass = clsx({
        'btn': true,
        'btn-success': !address.selected,
        'disabled': address.selected
    })

    return (
        <Card className={className}>
            <Card.Body>
                <Card.Title>{address.nickname}</Card.Title>
                <Card.Text>
                    <span className="d-block">{address.fullName}</span>
                    <span className="d-block">{address.address1} {address.address2 ?? ''}</span>
                    <span className="d-block">{address.city}, {address.state} {address.zip}</span>
                </Card.Text>
                <div className='d-flex justify-content-between'>
                    <Button onClick={() => onAddressSelection(address)} variant={address.selected ? 'success' : 'outline-primary'} disabled={address.selected}>{address.selected ? 'Selected' : 'Ship Here'}</Button>
                    <Button onClick={onEditClick} variant='secondary'>Edit</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default AddressCard;