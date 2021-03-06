import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
    return (
        <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">React</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Forside</Nav.Link>
                        <Nav.Link href="/starwars">Starwars</Nav.Link>
                        <Nav.Link href="/news">Nyheder</Nav.Link>
                        <Nav.Link href="/films">Films</Nav.Link>
                        <Nav.Link href="/weathers">Vejr</Nav.Link>
                        <Nav.Link href="/covid19">Covid19</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default Header
