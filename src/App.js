import { useState } from "react";
import './App.css';
import AddressModal from "./Address-Book/AddressModal";
import {AddressProvider} from './Address-Book/Context/AddressContext';
import NavigationButtons from "./Address-Book/NavigationButtons";
import AddressBookContainer from "./Address-Book/Address-Book-Container";

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
          <div className="container">
            <AddressBookContainer displaySize={displaySize}></AddressBookContainer>
            <AddressModal></AddressModal>
          </div>
        </AddressProvider>
        <p className="text-muted text-center mt-5">
          This demo app was built using React. Checkout the source code on <a rel="noreferrer" target="_blank" href="https://github.com/ansuarez9/address-pagination-react">github</a>!<br/>
          An Angular version is available <a rel="noreferrer" target="_blank" href="https://address-pagination-ng.netlify.app">here</a>.
        </p>
      </>
  );
}

export default App;
