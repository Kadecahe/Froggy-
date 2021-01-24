import React from 'react'
import {Button, Navbar as BootstrapNavbar, Nav, Form, FormControl, NavDropdown} from 'react-bootstrap'
import {About, Connect, Advocacy} from './index'

const Navbar = () => {
  return (
    <BootstrapNavbar bg="light" variant="light">
      <BootstrapNavbar.Brand
         href="/"
         className="ml-3">Queerbeing</BootstrapNavbar.Brand>
      <Nav className="mr-auto">
      <About />
      <Connect />
      <Advocacy />


    </Nav>
    <Form inline className="d-flex">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </BootstrapNavbar>
  )
}

export default Navbar
