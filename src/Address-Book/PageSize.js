import Dropdown from 'react-bootstrap/Dropdown';

function PageSize(props) {
    const {displaySize, onDisplaySizeChange} = props;

    return (
        <Dropdown onSelect={(ekey, e) => onDisplaySizeChange(e)}>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Display {displaySize}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">2</Dropdown.Item>
                <Dropdown.Item href="#/action-2">4</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default PageSize;