import React from 'react'
import "../Cart/Cart.css"
import { useNavigate } from "react-router-dom";


const Cart = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/checkout"); 
      };
  return (
    <>
    <section className="banner inner-pages mb-0">
            <div className="container-lg">
                <div className="row">
                    <div className="col-12">
                        <div className="content-box">
                            <h1 className="py-5 text-center mw-100">Cart</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="cart-section">
            <div className="container py-5">
                <h1 className="mb-4 pb-4">Shopping Cart</h1>

                <div className="row g-4">
                    <div className="col-lg-8">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <div className="row align-items-center mb-4">
                                    <div className="col-12 col-md-2">
                                        <img src="/api/placeholder/120/120" className="img-fluid rounded" alt="Product"/>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <h5 className="mb-1">Wireless Headphones</h5>
                                        <p className="text-muted mb-0">Color: Black</p>
                                        <small className="text-muted">SKU: WH-123</small>
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <div className="input-group input-group-sm">
                                            <button className="btn btn-outline-secondary" type="button">-</button>
                                            <input type="text" className="text-center" value="1"/>
                                            <button className="btn btn-outline-secondary" type="button">+</button>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-2 text-end">
                                        <p className="h6 mb-3">$199.99</p>
                                        <button className="btn-link text-danger p-0 small">Remove</button>
                                    </div>
                                </div>
                                <hr/>
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-2">
                                        <img src="/api/placeholder/120/120" className="img-fluid rounded" alt="Product"/>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <h5 className="mb-1">Smart Watch</h5>
                                        <p className="text-muted mb-0">Color: Silver</p>
                                        <small className="text-muted">SKU: SW-456</small>
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <div className="input-group input-group-sm">
                                            <button className="btn" type="button">-</button>
                                            <input type="text" className="text-center" value="1"/>
                                            <button className="btn" type="button">+</button>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-2 text-end">
                                        <p className="h6 mb-3">$299.99</p>
                                        <button className="btn-link text-danger p-0 small">Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title mb-4">Order Summary</h5>

                                <div className="d-flex justify-content-between mb-3">
                                    <span>Subtotal</span>
                                    <span>$499.98</span>
                                </div>

                                <div className="d-flex justify-content-between mb-3">
                                    <span>Shipping</span>
                                    <span>$9.99</span>
                                </div>

                                <div className="d-flex justify-content-between mb-3">
                                    <span>Tax</span>
                                    <span>$50.00</span>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-between mb-4">
                                    <strong>Total</strong>
                                    <strong>$559.97</strong>
                                </div>
                                <button className="btn dark py-3 w-100 mt-md-3" onClick={handleButtonClick} >Proceed to Checkout</button>
                                <div className="mt-3">
                                    <div className="alert alert-secondary mb-0">
                                        <div className="d-flex align-items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" className="bi bi-shield-lock me-2" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                                            </svg>
                                            Secure Checkout
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
        </>
  )
}

export default Cart