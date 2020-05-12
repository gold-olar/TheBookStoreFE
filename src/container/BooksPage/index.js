import React, { useState, useEffect } from "react";
import BooksNavigation from "../../components/BooksNavigation";
import BookList from "../../components/BookList";
import Loader from "../../components/Loader";
import { connect } from "react-redux";
import { fetchBooks } from "../../Actions/bookActions";
import "./styles.scss";
import { toast } from "react-toastify";
import RecomendedBooks from "../../components/RecomendedBooks";
import SearchSection from "../SearchSection";


const BooksPage = (props) => {
  const [activeCategory, setActiveCategory] = useState("Technology");
  const [booksToShow, setBooksToShow] = useState(9);
  const [booksToFetch, setBooksToFetch] = useState(30);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      props.fetchBooks(activeCategory, booksToFetch);
    } catch (error) {
      toast.error(error);
    }

    setBooksToShow(9);
  }, [activeCategory, booksToFetch]);

  return (
    <>
      <div className="container mt-3"></div>
      <div>
        <div className="row">
          <SearchSection />
        </div>
      </div>
      <div className="popular_courses">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title text-center mb-100">
                <h3>Available Books</h3>
              </div>
            </div>
          </div>
          <BooksNavigation
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>

        {props.books && props.books.length > 0 ? (
          <>
            <BookList
              books={props.books}
              booksToShow={booksToShow}
              booksToFetch={booksToFetch}
              setBooksToFetch={setBooksToFetch}
              setBooksToShow={setBooksToShow}
              loading={loading}
              setLoading={setLoading}
              category={activeCategory}
              bookIndexRange={booksToFetch}
            />
            <br />
            <br />
           <RecomendedBooks books={props.books}/>
          </>
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
export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);
