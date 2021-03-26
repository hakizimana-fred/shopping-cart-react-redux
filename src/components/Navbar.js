import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const NavbarMenu = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">ShopReact</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Shop</Nav.Link>
                    <Nav.Link href="#features">My cart</Nav.Link>
                    <Nav.Link href="#pricing">Shopping_cart</Nav.Link>
                </Nav>
            </Navbar>
            <br />

        </>
    )
}

export default NavbarMenu
