import React, { useState } from 'react';
import "../AddReview/AddReview.css"

const AddReview = () => {
  const [rating, setRating] = useState(0); // To store the selected rating
  const [review, setReview] = useState(''); // To store the review text
  const [submittedReview, setSubmittedReview] = useState(null); // To store the submitted review details

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert('Please select a rating!');
      return;
    }
    setSubmittedReview({ rating, review });

    // Reset form
    setRating(0);
    setReview('');
  };

  return (
    <section>
      <button
        type="button"
        className="btn dark"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Review
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="text-center">
                Leave a <span className="imp-text">Review</span>
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {!submittedReview ? (
                <form id="reviewForm" className="p-4" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="review" className="form-label">
                      Your Review
                    </label>
                    <textarea
                      id="review"
                      className="form-control border text-dark"
                      rows="4"
                      placeholder="Write your review here"
                      required
                      value={review}
                      onChange={handleReviewChange}
                    ></textarea>
                  </div>
                  <div className="mb-3 text-center">
                    <h4>Rate Us</h4>
                    <div className="star-rating fs-2">
                      {[1, 2, 3, 4, 5].map((starValue) => (
                        <span
                          key={starValue}
                          className={`star ${
                            rating >= starValue ? 'selected' : ''
                          }`}
                          onClick={() => handleStarClick(starValue)}
                          style={{ cursor: 'pointer' }}
                        >
                          &#9733;
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn dark">
                      Submit Review
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-4">
                  <h3 className="mb-0">Thank you for your review!</h3>
                  <p className="mb-2">
                    <strong>Rating:</strong> {submittedReview.rating} stars
                  </p>
                  <p className="mb-0">
                    <strong>Review:</strong> {submittedReview.review}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddReview;