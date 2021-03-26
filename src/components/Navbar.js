import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavbarMenu = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Link to="/" className="navbar-brand">ShopReact</Link>
                <Nav className="mr-auto">
                    <Link to='/' className="nav-link">Shopp</Link>
                    <Link to='/cart' className="nav-link">My cart</Link>
                    <Link to='/' className='nav-link'>Shopping_cart</Link>
                </Nav>
            </Navbar>
            <br />

        </>
    )
}

export default NavbarMenu
