import React, { useEffect } from "react";
import ReviewCard from "../../components/ReviewCard";
import { connect } from "react-redux";
import { fetchAllReviews } from "../../Actions/reviewActions";
import Loader from "../../components/Loader";
import SearchSection from "../SearchSection";
import { Link } from "react-router-dom";

const BookeviewsPage = (props) => {
  useEffect(() => {
    props.fetchAllReviews();
    // if (props.reviews.length === 0) {
    // }
  }, []);
  return (
    <>
      <div className=""></div>
      <div className="p-3">
        <div className="container mt-5">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title text-center mb-100 my-5">
                <h3>Reviewed Books</h3>
              </div>
              <div className="text-center mb-4">
                <Link className="boxed_btn mt-4" to="/library">
                  {" "}
                  Add Reviews{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            {props.loading ? (
              <Loader />
            ) : (
              <>
                {props.reviews.map((review) => (
                  <ReviewCard
                    bookAuthor={review.bookAuthor}
                    bookTitle={review.bookTitle}
                    rating={review.rating}
                    bookId={review._id}
                    reviewContent={review.reviewContent}
                    category={review.category}
                  />
                ))}
                {props.reviews && props.reviews.length === 0 && (
                  <div className="container">
                    <div className="row">
                      <div style={{ height: "50vh" }} className="col">
                        <h5 className="text-center">
                          There are no reviews yet.
                        </h5>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ reviews, apiCallsInProgress }) => {
  return {
    reviews,
    loading: apiCallsInProgress > 0 ? true : false,
  };
};

const mapDispatchToProps = {
  fetchAllReviews,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookeviewsPage);
