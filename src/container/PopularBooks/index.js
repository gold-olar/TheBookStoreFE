import React, { useState, useEffect } from "react";
import BooksNavigation from "../../components/BooksNavigation";
import { connect } from "react-redux";
import { fetchBooks } from "../../Actions/bookActions";
import BookList from "../../components/BookList";
import Loader from "../../components/Loader";
import { toast } from 'react-toastify';

const PopularBooksSection = (props) => {
  const [activeCategory, setActiveCategory] = useState("Technology");
  const [booksToShow, setBooksToShow] = useState(3);
  const [booksToFetch, setBooksToFetch] = useState(30);

  useEffect(() => {
    try {
      props.fetchBooks(activeCategory, booksToFetch);
      
    } catch (error) {
      toast.error(error)
    }
  }, [activeCategory]);

  return (
    <>
      <div className="popular_courses">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title text-center mb-100">
                <h3> Book Categories </h3>
               
              </div>
            </div>
          </div>
          <BooksNavigation
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>
        {props.books && props.books.length > 0 ? (
          <BookList
            books={props.books}
            booksToShow={booksToShow}
            booksToFetch={booksToFetch}
            setBooksToFetch={setBooksToFetch}
            setBooksToShow={setBooksToShow}
            category={activeCategory}
            bookIndexRange={booksToFetch}
          />
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};
const mapStateToProps = ({ books }) => {
  return {
    books,
  };
};

const mapDispatchToProps = {
  fetchBooks,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularBooksSection);
