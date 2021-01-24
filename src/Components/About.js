import React from 'react'
import {NavDropdown} from 'react-bootstrap'

const About = () => {

return (
  <NavDropdown title="About" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Vision</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Team</NavDropdown.Item>
    </NavDropdown>
    )
}

export default About
