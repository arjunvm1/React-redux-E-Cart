import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import useFetch from '../Hooks/useFetch'
import { addToWishlist } from "../redux/slice/wishlistslice";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";


function Home() {
  const data = useFetch("https://dummyjson.com/products")
  console.log(data);
  const dispatch = useDispatch()
  return (
    <>
      <Row className="ms-5" style={{ marginTop: "100px" }}>

        {
          data?.length>0?data?.map((products,index)=>(
            <Col key={index} className="mb-3" >
            <Card style={{ width: "22rem",height:'30rem' }}>
              <Card.Img height={'200px'} variant="top" src={products?.thumbnail} />
              <Card.Body>
                <Card.Title>{products.title}</Card.Title>
                <Card.Text>
                 <p>{products?.description.slice(0,50)}...</p>
                 <p>${products?.price}</p>
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Button onClick={()=>dispatch(addToWishlist(products))} style={{padding:'5px'}} variant="primary" ><i className="fa-solid fa-heart text-danger "></i></Button>
                  <Button onClick={()=>dispatch(addToCart(products))} style={{padding:'5px'}} variant="primary"><i className="fa-solid fa-cart-shopping text-danger "></i></Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          )): <p className="text-center text-danger  fs-4 fw-bold">Loading...</p>
          }
        
       
      </Row>
    </>
  );
}

export default Home;
