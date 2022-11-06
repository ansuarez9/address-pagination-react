import { useEffect, useState } from "react";
import './App.css';
import AddressBook from './Address-Book/AddressBook';
import PageSize from "./Address-Book/PageSize";
import AddressModal from "./Address-Book/AddressModal";
import { Button } from "react-bootstrap";
import {AddressProvider} from './Address-Book/Context/AddressContext';

function App() {
  const [displaySize, setDisplaySize] = useState(4);
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('');
  const [address, setAddress] = useState({});

  useEffect(() => {
    console.log(address);
  }, [address]);

  function onDisplaySizeChange(e) {
    setDisplaySize(+e.target.innerText);
  };

  function onOpenModal(m, address) {
    setMode(m);
    setShow(true);
    setAddress(address);
  }

  function onUpdateAddress(a) {
    setAddress(a)
  }

  return (
      <div className="container">
        <nav className="navbar bg-light mb-5">
            <div className="container-fluid">
              <h1 className="navbar-brand">Address Pagination Demo</h1>
              <span className="d-flex">
                <Button onClick={() => onOpenModal('new', null)} style={{marginRight: '1rem'}} variant="primary">Add New Address</Button>
                <PageSize onDisplaySizeChange={onDisplaySizeChange} displaySize={displaySize} />
              </span>
            </div>
        </nav>
        <AddressProvider>
          <AddressBook onEditClick={onOpenModal} displaySize={displaySize}>testing child</AddressBook>
          <AddressModal handleClose={() => setShow(false)} onUpdateAddress={onUpdateAddress} address={address} show={show} mode={mode}></AddressModal>
        </AddressProvider>
      </div>
  );
}

export default App;
