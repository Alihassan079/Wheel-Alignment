import React from 'react'
import { Link } from 'react-router-dom'

const ThankPage = () => {
  return (
    <section className="banner inner-pages mb-0">
    <div className="container-lg">
        <div className="row">
            <div className="col-12">
                <div className="content-box text-center">
                    <div className="mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor"
                            className="bi bi-check-circle-fill text-success" viewBox="0 0 16 16">
                            <path
                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                    </div>
                    <h1 className="py-2 mw-100">Thank You for Your Order!</h1>
                    <p className="pb-md-3 pb-2">Your order has been confirmed and will be shipped soon.</p>
                    <div className="btn-box">
                        <Link to="#" className="btn">Track Your Order</Link>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default ThankPage