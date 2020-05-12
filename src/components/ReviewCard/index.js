import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const ReviewCard = ({
  bookTitle,
  bookAuthor,
  rating,
  bookId,
  reviewContent,
  category,
}) => {
  return (
    <div className="col-md-3 rev-card col-sm-6 ml-2  ">
      <Link className="rev-card-link" to={`/book_reviews/${bookId}`}>
        <div className="card p-2" >
          <span className="badge badge-dark text-center">{category}</span>
          <div className="card-body"> 
            <h5 className="card-title">{bookTitle}</h5>
            <h6 className="card-subtitle mb-2 text-muted"> By {bookAuthor}</h6>
            <p className="card-text">
              {reviewContent.length > 60
                ? `${reviewContent.slice(1, 60)}...`
                : reviewContent}
            </p>
            <span>Rating : {"⭐".repeat(rating)}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ReviewCard;
