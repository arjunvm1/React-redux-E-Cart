import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { emptyCart, removeFromCart } from "../redux/slice/cartSlice";



function Cart() {
  const cartArray = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();

  const navigate = useNavigate();


  const total = cartArray.reduce((acc, curr) => acc + curr.price, 0);

  ////OR\\\\
  // const [total,setTotal] = useState(0)

  // const getCartTotal = ()=>{
  //   if(cartArray.length>0){
  //     setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
  //   }
  //   else{
  //     setTotal(0)
  //   }
  // }

  // useEffect(()=>{
  //   getCartTotal()
  // },[cartArray])
  
const handleCart=()=>{
  dispatch(emptyCart())
  alert('your order have been placed...than your for purchasing')
  navigate('/', { replace: true })
}



  return (
    <div style={{ marginTop: "100px" }}>
      {cartArray.length > 0 ? (
        <div className="row">
          <div className="col-lg-8">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product</th>
                  <th scope="col"> product image</th>
                  <th scope="col">price </th>
                  <th scope="col">action </th>
                </tr>
              </thead>
              <tbody>
                {cartArray.map((products, index) => (
                  <tr key={index}>
                    <td scope="col">{index + 1}</td>
                    <td scope="col">{products.title}</td>
                    <td scope="col">
                      <img
                        width={"100px"}
                        height={"100px"}
                        src={products.thumbnail}
                        alt=""
                      />
                    </td>
                    <td scope="col">$ {products.price}</td>
                    <td scope="col">
                      <Button
                        onClick={() => dispatch(removeFromCart(products.id))}
                        style={{ padding: "5px" }}
                        variant="primary"
                      >
                        <i className="fa-solid fa-trash text-danger "></i>
                      </Button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-lg-3">
            <div className="border mt-3 rounded shadow p-2 w-100">
              <h1 className="text-primary p-2">Cart Summary</h1>
              <h4>
                Total Products: <span>{cartArray.length}</span>
              </h4>
              <h4>
                Total: <span className="text-danger fw-bolder fs-2">${total}</span>
              </h4>
              <div className="d-grid">
                <button onClick={handleCart} type="submit" className="btn btn-success mt-5 ">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-100 d-flex flex-column justify-content-center align-items-center">
          <img
            src="https://bakestudio.in/assets/images/cart/empty-cart.gif"
            alt="empty"
            height={"500px"}
            width={"500px"}
          />
          <h3 className="text-center text-danger">Your cart Is Empty...</h3>
          <Link
            style={{ textDecoration: "none" }}
            className="btn btn-warning rounded"
            to={"/"}
          >
            Back to Home
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
