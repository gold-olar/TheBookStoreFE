import React from 'react';
import SingleBookCard from '../../components/SingleBookCard';
import { connect } from 'react-redux';
import getSingleBook from './helper';
import { fetchBooks } from '../../Actions/searchActions';
import Loader from '../../components/Loader';
import { toast } from 'react-toastify';
import { createBook } from "../../Actions/savedBooksActions";

const SearchSingle = ({searchResults, match, loading, auth, history, ...props }) => {
  const { bookId } = match.params;
  const book = getSingleBook(searchResults, bookId);

  const saveBook = async (readStatus) => {
    const bookData = {
      title: book.volumeInfo.title,
      link: book.volumeInfo.previewLink,
      read: readStatus,
    };
    if(!auth.token){

      toast.error('You must be logged in to use this feature')
      return history.push('/login')
    }
    try {
      await props.createBook(bookData, props.auth.token);
      toast.success(readStatus ? "Marked as Read." : "Book added to read list.");
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <>
      <div className=""></div>
      <div className="full-ground">
      {book && !loading ? (
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
}
const mapStateToProps = ({ searchResults, apiCallsInProgress, auth }) => {
  return {
    searchResults,
    loading: apiCallsInProgress > 0 ? true : false,
    auth,
  };
};

const mapDispatchToProps = {
  fetchBooks,
  createBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchSingle);