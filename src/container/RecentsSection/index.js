import React, { useEffect, useState } from "react";
import Recents from "../../components/Recents";
import { connect } from "react-redux";
import { fetchAllReviews } from "../../Actions/reviewActions";
import RecomendedBooks from "../../components/RecomendedBooks";

const RecentsSection = (props) => {
    const [beginSlice, setBeginSlice] = useState();
 
  
  useEffect(() => {
    props.fetchAllReviews();
    setBeginSlice(Math.floor(Math.random() * props.reviews.length));
  }, []);

  return (
    <>
      <RecomendedBooks books={props.books} />
      <br/>
      <br/>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section_title text-center mb-100">
              <h3>Recent Reviews </h3>
            </div>
          </div>
        </div>
      </div>
      <Recents  
      books={props.books.slice(beginSlice, beginSlice + 3)}
      reviews={props.reviews.slice(beginSlice, beginSlice + 3)}/>

    </>
  );
};

const mapStateToProps = ({ reviews, books }) => {
  return {
    reviews,
    books
  };
};

const mapDispatchToProps = {
  fetchAllReviews,
};
export default connect(mapStateToProps, mapDispatchToProps)(RecentsSection);
