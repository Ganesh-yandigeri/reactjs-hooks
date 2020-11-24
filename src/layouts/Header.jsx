import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {useSelector} from 'react-redux';
// import Form from 'react-bootstrap/Form';
// import FormControl from "react-bootstrap/FormControl";
import { Link } from 'react-router-dom';


const Header = () => {
    const cartVal = useSelector((state)=>(state.product.cart));
    return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
        <Link to="/" ><Navbar.Brand>Nihanii Org </Navbar.Brand></Link>
        <Link to="/products" className="ml-2 mr-1" style={styleCode}>Products</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Link to="/about-us" className="mt-1 ml-1" style={styleCode}>About Us</Link>
            <Link to="/contact" className="mt-1 ml-2" style={styleCode}>Contact</Link>
            <Link to="/hook-js" className="mt-1 ml-2" style={styleCode}>Hook Js</Link>
            </Nav>
            <Nav> 
            <Link to="/cart-item"><i className="material-icons" style={styleCode}>shopping_cart</i>
                <span  className="mt-4" style={styleCode}>{cartVal.length}</span> 
            </Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    </>
    );
}

const styleCode = {color: 'rgba(255, 255, 255, 0.5)'}

export default Header;