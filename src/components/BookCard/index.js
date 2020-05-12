import React from "react";
import { Link } from "react-router-dom";


const BookCard = ({
  title,
  imageUrl,
  author,
  link,
  published,
  pages,
  id,
  category,
  bookIndexRange,
}) => {
  return (
    <>
      <div className="col-xl-4 col-lg-4 col-md-6">
        <div style={{ maxHeight: "800px" }} className="single_courses">
          <div className="thumb">
            <Link to={`/books/${bookIndexRange}/${category}/${id}`}>
              <img
                style={{ maxHeight: "200px" }}
                src={imageUrl}
                alt="Course Img"
              />
            </Link>
          </div>
          <div className="courses_info">
          
            <h3>
              <Link to={`/books/${bookIndexRange}/${category}/${id}`}>
                {title} <br />
              </Link>
            </h3>
            <div className="star_prise d-flex justify-content-between">
              <div className="star">
                <i className="flaticon-mark-as-favorite-star"></i>
                <span>Published in ({published})</span>
              </div>
              <div className="prise">
                
                {pages ? (
                  <span className="active_prise">{pages} pgs</span>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCard;
