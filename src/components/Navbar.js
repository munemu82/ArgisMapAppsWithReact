import React, { useState, useEffect } from "react";

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar() {
  const[selectedLink, setSelectedLink] = useState("1")
  const[disableParent, setDisableParent]= useState(false);
  const handleSelect = (eventKey) =>{
    console.log(eventKey)
    if(eventKey =="4.1"){
      setSelectedLink("4");
      setDisableParent(true)
    }else{
      setSelectedLink(eventKey);
      setDisableParent(false)
    }
    
  } 

  return (
    <Nav variant="pills" activeKey={selectedLink} onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="1" href="#/home">
          NavLink 1 content
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item">
          NavLink 2 content
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" disabled>
          NavLink 3 content
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Dropdown" eventKey="4" id="nav-dropdown" disabled={disableParent}>
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
          <NavDropdown title="Dropdown2" id="nav-dropdown2">
            <NavDropdown.Item eventKey="4.1.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2.1">Another action</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}


export default Navbar;
