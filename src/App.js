import { useState } from "react";
import './App.css';
import AddressBook from './Address-Book/AddressBook';
import PageSize from "./Address-Book/PageSize";
import AddressModal from "./Address-Book/AddressModal";
import { Button } from "react-bootstrap";
import {AddressProvider} from './Address-Book/Context/AddressContext';
import NavigationButtons from "./Address-Book/NavigationButtons";

function App() {
  const [displaySize, setDisplaySize] = useState(4);

  function onDisplaySizeChange(e) {
    setDisplaySize(+e.target.innerText);
  };

  return (
      <>
        <AddressProvider>
          <nav className="navbar bg-light mb-5">
              <div className="container">
                <h1 className="navbar-brand">Address Pagination Demo</h1>
                <NavigationButtons displaySize={displaySize} onDisplaySizeChange={onDisplaySizeChange}></NavigationButtons>
              </div>
          </nav>
          <div className="container mt-3">
            <AddressBook displaySize={displaySize}></AddressBook>
            <AddressModal></AddressModal>
          </div>
        </AddressProvider>
        <p className="text-muted text-center mt-5">
          This demo app was built using React. Checkout the source code on <a target="_blank" href="https://github.com/ansuarez9/address-pagination-react">github</a>!<br/>
          An Angular version is available <a target="_blank" href="https://address-pagination-ng.netlify.app">here</a>.
        </p>
      </>
  );
}

export default App;
