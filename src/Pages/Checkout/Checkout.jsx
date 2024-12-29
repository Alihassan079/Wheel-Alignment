import React from 'react'
import "../Checkout/Checkout.css"
import problem from "../../Assets/problem-image.png"
import paypal from "../../Assets/paypal-image.png"
import { Link } from 'react-router-dom'
import RelatedCourseSec from '../../Components/RelatedCourse/RelatedCourseSec'
import TopFooter from '../../Components/TopFooter/TopFooter'

const Checkout = () => {
  return (
    <>
    <section className="banner inner-pages mb-0">
            <div className="container-xl">
                <div className="row">
                    <div className="col-12">
                        <div className="content-box">
                            <h1 className="py-5 text-center">Checkout</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="hb-two-column-sec checkout-form-sec">
            <div className="container-lg">
                <div className="row align-items-center">
                    <div className="col-12 text-center mb-5">
                        <h2>Course 3-Advanced <span className="imp-text">Alignment</span> Diagnostic Angles and Electronics
                        </h2>
                    </div>
                    <div className="col-lg-6">
                        <div className="img-box soudos bottom-b">
                            <div className="clip-path">
                                <img src={problem} alt="problem image"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="content-box">
                            <h4>Billing Details</h4>
                            <div className="form-box">
                                <form>
                                    <div className="form-box">
                                        <input type="text" className="form-control" id="checkF_name" placeholder="First Name:"/>
                                    </div>
                                    <div className="form-box">
                                        <input type="text" className="form-control" id="checkL_name" placeholder="Last Name:"/>
                                    </div>
                                    <div className="form-box">
                                        <input type="email" className="form-control" id="check_Email" placeholder="Email Address:"/>
                                    </div>
                                    <p>Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
                                    <div className="form-box">
                                        <input type="text" className="form-control" id="check_user" placeholder="Username:"/>
                                    </div>
                                    <div className="form-box">
                                        <input type="password" className="form-control" id="check_Password1" placeholder="Password:"/>
                                    </div>
                                    <p>The password should be at least seven characters long. To make it stronger, use upper and lower case letters, numbers and symbols like ! " ? $ % ^ & ).</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="inside-checkout-page">
            <div className="container-lg">
                <div className="row">
                    <div className="col-md-6">
                        <div className="content-box">
                            <h4 className="mb-lg-4 mb-md-3 mb-2">Payment Method</h4>
                            <Link to="/" className="mb-lg-4 mb-md-3 mb-2 d-block"><img src={paypal}
                                    alt="paypal image"/></Link>
                            <p className="mb-lg-4 mb-md-3 mb-2">Pay via PayPal; you can pay with your credit card if you
                                don’t have a PayPal account</p>
                            <div className="btn-box pt-md-4">
                                <Link to="/" className="btn dark">Place Order</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <RelatedCourseSec/>
        <TopFooter/>
        </>
  )
}

export default Checkout