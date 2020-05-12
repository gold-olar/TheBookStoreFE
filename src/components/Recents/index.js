import React from "react";
import { Link } from "react-router-dom";

const Recents = ({ reviews, books }) => {
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-md-12">
            <div className="container">
              <div className="row">
                {reviews.map((review) => (
                  <div key={review._id} className="col-md-6 mb-2">
                    <Link
                      className="rev-card-link"
                      to={`/book_reviews/${review._id}`}
                    >
                      <div className="card p-2">
                        <span className="badge badge-dark text-center">
                          {review.category}
                        </span>
                        <div className="card-body">
                          <h5 className="card-title">{review.bookTitle}</h5>
                          <h6 className="card-subtitle mb-2 text-muted">
                            {" "}
                            By {review.bookAuthor}
                          </h6>
                          <p className="card-text">
                            {review.reviewContent.length > 60
                              ? `${review.reviewContent.slice(1, 60)}...`
                              : review.reviewContent}
                          </p>
                          <span>Rating : {"⭐".repeat(review.rating)}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="more_courses text-center">
            <Link className="boxed_btn ml-5 mt-4" to="/book_reviews">
              {" "}
              More{" "}
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recents;