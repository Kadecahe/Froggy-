import React from 'react'
import {Button, Navbar as BootstrapNavbar, Nav, Form, FormControl, NavDropdown} from 'react-bootstrap'
import {About, Connect, Advocacy} from './index'

const Navbar = () => {
  return (
    <BootstrapNavbar bg="white" variant="light" className="d-flex justify-content-between">
      <BootstrapNavbar.Brand
         href="/"
         className="ml-3">
           <img src="brand.jpg" alt="queercare"
              style={{width: "30%"}}
           />
           </BootstrapNavbar.Brand>
      <div className="d-flex m-4">
      <Nav className="mr-auto">
      <About />
      <Connect />
      <Advocacy />


    </Nav>
    <Form inline className="d-flex">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
    </div>
  </BootstrapNavbar>
  )
}

export default Navbar
