import React, { useEffect } from "react";
import BookCard from "../BookCard";
import Loader from "../Loader";
import { getBooksToShow, handleMoreBooksClick } from "./helper";

const BookList = ({
  books,
  booksToShow,
  booksToFetch,
  setBooksToFetch,
  setBooksToShow,
  setLoading, 
  loading,
  category,
  bookIndexRange
}) => {
  let renderedBooks = getBooksToShow(books, booksToShow);
  useEffect(() => {}, [booksToFetch, booksToShow]);

  return (
    <>
      <div className="all_courses">
        <div className="container">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="row">
                {renderedBooks && renderedBooks.length > 0 ? (
                  <>
                    {renderedBooks.map((singleBook) => (
                      <BookCard
                        title={singleBook.volumeInfo.title}
                        imageUrl={singleBook.volumeInfo.imageLinks.thumbnail}
                        // author={singleBook?.volumeInfo?.authors[0] ? singleBook.volumeInfo.authors[0] : "Nil" }
                        link={singleBook.volumeInfo.infoLink}
                        // openBook
                        published={singleBook.volumeInfo.publishedDate}
                        pages={singleBook.volumeInfo.pageCount}
                        key={singleBook.volumeInfo.title}
                        id={singleBook.id}
                        category={category}
                        bookIndexRange={bookIndexRange}
                      />
                    ))}
                  </>
                ) : (
                  <>
                    <Loader />
                  </>
                )}

                <div className="col-xl-12">
                  <div className="more_courses text-center">
                    <button
                      onClick={() =>
                        handleMoreBooksClick(
                          booksToShow,
                          setBooksToShow,
                          booksToFetch,
                          setBooksToFetch,
                          setLoading,
                        )
                      }
                      className={loading ? "boxed_btn_rev disabled" : "boxed_btn_rev"}
                    >
                     { loading ? "Please Wait" : " More Books"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookList;
