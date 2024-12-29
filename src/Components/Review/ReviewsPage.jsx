import React from 'react'
import "./ReviewsPage.css"
import { Link } from 'react-router-dom'

const ReviewsPage = () => {
  return (
    <>
    <section className="banner inner-pages mb-0">
            <div className="container-lg">
                <div className="row">
                    <div className="col-12">
                        <div className="content-box">
                            <h1 className="py-5 text-center mw-100">Reviews</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         <section className="reviews-sec">
         <div className="container my-5 py-md-5">
             {/* <!-- Overall Rating Section --> */}
             <div className="review-header">
                 <h3>Overall <span className="imp-text">Rating</span> Reviews</h3>
                 <div className="d-flex justify-content-center align-items-center">
                     <span className="rating-number display-4 me-2">4.8</span>
                     <span>Out of 5 Stars</span>
                 </div>
                 <div className="rating-stars">
                     ★★★★★
                 </div>
             </div>

             {/* <!-- Reviews List --> */}
             <div className="review-list">
                 {/* <!-- Review 1 --> */}
                 <div className="review-card">
                     <div className="d-flex justify-content-between">
                         <div>
                             <div className="rating-stars">★★★★☆</div>
                             <strong>Jessica C</strong> - <small className="text-muted">February 26, 2018</small>
                         </div>
                     </div>
                     <p>I love it here! Everyone is so friendly—food is great & the wine is fabulous as well. This is
                         a great place to grab a glass of wine or two with your friends & some delicious food. I am
                         very happy to have this located downtown.</p>
                     <div>
                         <Link to="#" className="text-secondary">Share</Link>
                     </div>
                 </div>
                 {/* <!-- Review 2 --> */}
                 <div className="review-card">
                     <div className="d-flex justify-content-between">
                         <div>
                             <div className="rating-stars">★★★★★</div>
                             <strong>James Hilgart</strong> - <small className="text-muted">February 15, 2018</small>
                         </div>
                     </div>
                     <p>Excellent wine, flatbread, and even better service. Highly recommended.</p>
                     <div>
                         <Link to="#" className="text-secondary">Share</Link>
                     </div>
                 </div>
                 {/* <!-- Review 3 --> */}
                 <div className="review-card">
                     <div className="d-flex justify-content-between">
                         <div>
                             <div className="rating-stars">★★★★★</div>
                             <strong>Rod Shobar</strong> - <small className="text-muted">February 15, 2018</small>
                         </div>
                     </div>
                     <p>Incredible place. Nice selection of wines and flights. Bruschetta was very good as were the
                         flatbreads. Desserts were very tasty. Great set up and atmosphere. I can see many bringing a
                         lot of people through here.</p>
                     <div>
                         <Link to="#" className="text-secondary">Share</Link>
                     </div>
                 </div>
             </div>
             {/* <!-- Pagination --> */}
             <nav aria-label="Page navigation">
                 <ul className="pagination">
                     <li className="page-item"><Link className="page-link" href="#">Previous</Link></li>
                     <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                     <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                     <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                     <li className="page-item"><Link className="page-link" href="#">Next</Link></li>
                 </ul>
             </nav>
         </div>
     </section>
     </>
  )
}

export default ReviewsPage