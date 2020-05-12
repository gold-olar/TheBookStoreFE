import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllReviews } from "../../Actions/reviewActions";
import Loader from "../../components/Loader";
import getSingleReview from "./helper";

const SingleBookReview = (props) => {
  useEffect(() => {
    if (props.reviews.length === 0) {
      props.fetchAllReviews();
    }
  });
  const review = getSingleReview(props.match.params.bookId, props.reviews);
  console.log(review);
  return (
    <>
      <div className=""></div>
      <div className="container p-3">
        <div className="row mt-5 mb-4">
          <div className="col-md-9 m-auto">
            {review ? (
              <div className="card my-5">
                <div className="card-header"> {review.bookTitle}</div>
                <span className="text-right mr-2 mt-1">
                  {" "}
                  Category : {review.category}{" "}
                </span>
                <div className="card-body">
                  <h3 className="card-title">Author : {review.bookAuthor}</h3>
                  <p className="card-text">{review.reviewContent}</p>
                  <span className="btn btn-outline-dark">
                    <span>Rating : {"⭐".repeat(review.rating)}</span>
                  </span>
                  <p className="card-text mt-3 text-right mr-2">
                    Reviewd By : {review.reviewAuthor}
                  </p>
                </div>
              </div>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ reviews }) => {
  return {
    reviews,
  };
};

const mapDispatchToProps = {
  fetchAllReviews,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleBookReview);
