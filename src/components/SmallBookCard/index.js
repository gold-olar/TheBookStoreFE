import React from "react";

const BookCard = ({ title, imageUrl, author, link, published, pages }) => {
  return (
    <>
      <div className="card mb-3 p-3">
        <div className="single_courses">
          <div className="courses_info">
            <h6>
              <a href={link}>
                {title} <br />
              </a>
            </h6>
            <p className="text-right">
                {pages} pages
            </p>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCard;
