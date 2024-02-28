import React from "react";
// import Nav from "./Nav";
import Routes from "./RouteList";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;