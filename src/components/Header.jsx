import React from 'react'
import { Badge, Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >  <Link to={'/'} style={{textDecoration:'none'}}> <i class='fa-solid fa-truck-fast me-2'></i> E-CART</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mr-3">
            <Nav.Link> <Link to={'/wishlist'} className='d-flex align-items-center ' style={{textDecoration:'none',color:'red',fontWeight:'bolder'}}><i class="fa-solid fa-heart me-2 "></i> Wishlist <Badge className='rounded ms-2 bg-success'> {wishlist.length}</Badge> </Link></Nav.Link>
            <Nav.Link> <Link to={'/cart'} className='d-flex align-items-center ' style={{textDecoration:'none',color:'red',fontWeight:'bolder'}}> <i class='fa-solid fa-shopping-cart me-2'></i> Cart <Badge className='rounded ms-2 bg-success '>{cart.length}</Badge> </Link> </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header