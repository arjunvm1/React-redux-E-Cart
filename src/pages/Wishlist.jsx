import React from 'react'
import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/slice/wishlistslice';
import { addToCart } from '../redux/slice/cartSlice';


function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()
  const handleWishlistCart = (products)=>{
    dispatch(addToCart(products))
    dispatch(removeFromWishlist(products.id))
  }
  return (
    <div style={{marginTop:'100px'}}>
      <Row>
        {
        wishlistArray.length > 0 ? (
          wishlistArray.map((products, index) => (
            <Col key={index} className="mb-3">
              <Card style={{ width: "22rem", height:'30rem' }}>
                <Card.Img height={'200px'} variant="top" src={products?.thumbnail} />
                <Card.Body>
                  <Card.Title>{products.title}</Card.Title>
                  <Card.Text>
                    <p>{products?.description.slice(0, 50)}...</p>
                    <p>${products?.price}</p>
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button onClick={()=>dispatch (removeFromWishlist(products.id))} style={{padding:'5px'}} variant="primary">
                      <i className="fa-solid fa-trash text-danger "></i>
                    </Button>
                    <Button onClick={()=>handleWishlistCart(products)} style={{padding:'5px'}} variant="primary">
                      <i className="fa-solid fa-cart-shopping text-danger "></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div className="w-100 d-flex flex-column justify-content-center align-items-center">
            <img src="https://bakestudio.in/assets/images/cart/empty-cart.gif" alt="empty" height={'500px'} width={'500px'}/>
            <h3 className="text-center text-danger">Your Wishlist Is Empty...</h3>
            <Link style={{textDecoration:'none'}} className='btn btn-warning rounded' to={'/'}>Back to Home</Link>
          </div>
        )
        }
      </Row>
    </div>
  )
}

export default Wishlist
