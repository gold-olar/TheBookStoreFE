import React, { useEffect } from "react";
import SingleBookCard from "../../components/SingleBookCard";
import getSingleBook from "./helper";
import { connect } from "react-redux";
import { fetchBooks } from "../../Actions/bookActions";
import { persistUser } from "../../Actions/authActions";
import { createBook } from "../../Actions/savedBooksActions";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";

const SingleBookPage = (props) => {
  const { bookId, category, index } = props.match.params;
  const book = props.books ? getSingleBook(props.books, bookId) : {};
  console.log(props);
  const saveBook = async (readStatus) => {
    const bookData = {
      title: book.volumeInfo.title,
      link: book.volumeInfo.previewLink,
      read: readStatus,
    };
    if(!props.auth.token){

      toast.error('You must be logged in to use this feature')
      return props.history.push('/login')
    }
    try {
      await props.createBook(bookData, props.auth.token);
      toast.success(readStatus ? "Marked as Read." : "Book added to read list.");
    } catch (err) {
      toast.error(err.message);
    }
  };
  

  useEffect(() => {
    if (
      !props.books ||
      props.books.length === 0 ||
      props.books.length < index
    ) {
      props.fetchBooks(category, index);
    }
  }, [bookId, category, index, props]);

  if (!props.auth.token) {
    props.persistUser();
  }

  return (
    <>
      <div className="toppad"></div>
      <div className="full-ground">
      {book && !props.loading ? (
        <div className="container">
          <div className="row ">
            <SingleBookCard
              title={book.volumeInfo.title}
              imageUrl={book.volumeInfo.imageLinks.thumbnail}
              authors={book?.volumeInfo?.authors}
              link={book.volumeInfo.infoLink}
              published={book.volumeInfo.publishedDate}
              pages={book.volumeInfo.pageCount}
              key={book.volumeInfo.title}
              description={book.volumeInfo.description}
              id={book.id}
              category={category}
              previewLink={book.volumeInfo.previewLink}
              saveBook={saveBook}
            />
          </div>
        </div>
      ) : (
        <Loader />
      )}

      </div>
     
    </>
  );
};

const mapStateToProps = ({ books, auth, apiCallsInProgress }) => {
  return {
    books,
    auth,
    loading: apiCallsInProgress > 0 ? true : false,
  };
};

const mapDispatchToProps = {
  fetchBooks,
  persistUser,
  createBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleBookPage);
