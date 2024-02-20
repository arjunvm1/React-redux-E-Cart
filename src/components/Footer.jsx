import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
  } from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';
  
function Footer() {
  return (
    <div>
        <div>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted  "
      >
        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <Link
                  to={"/"}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "30px",
                  }}
                >
                  <i class='fa-solid fa-truck-fast me-2'></i>
                  
                  E-Cart
                </Link>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 text-light ">LINKS</h6>
                <Link
                  to={"/"}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "15px",
                  }}
                  className="text-reset"
                >
                  
                </Link>
                <br /> <br />
                <Link
                  to={"/cart"}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "15px",
                  }}
                  className="text-reset"
                >
                  CART
                </Link>
                <br /> <br />
                <Link
                  to={"/wishlist"}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "15px",
                  }}
                  className="text-reset"
                >
                  Wishlist
                </Link>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 text-light ">Guides</h6>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    ReactBootstrap
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Bootswatch
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-3">
                <h6 className="text-uppercase fw-bold mb-4 text-light ">Contact US</h6>
                <input
                  type="text"
                  placeholder="Email Id"
                  name=""
                  id=""
                  className="rounded-3"
                />
                <MDBBtn color="light" rippleColor="dark" size="sm" className="rounded-4 m-lg-3 ">
                  Subscribe
                </MDBBtn>
                <br />
                <section className="m-lg-5">
                <MDBBtn
                  outline
                  color="light"
                  floating
                  className="m-1"
                  href="#!"
                  role="button"
                >
                  <MDBIcon fab icon="twitter" />
                </MDBBtn>
                <MDBBtn
                  outline
                  color="light"
                  floating
                  className="m-1"
                  href="#!"
                  role="button"
                >
                  <MDBIcon fab icon="instagram" />
                </MDBBtn>
                <MDBBtn
                  outline
                  color="light"
                  floating
                  className="m-1"
                  href="#!"
                  role="button"
                >
                  <MDBIcon fab icon="linkedin-in" />
                </MDBBtn>
                <MDBBtn
                  outline
                  color="light"
                  floating
                  className="m-1"
                  href="#!"
                  role="button"
                >
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>
                </section>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            Mediaplayer.com   
          </a>
        </div>
      </MDBFooter>
    </div>
    </div>
  )
}

export default Footer