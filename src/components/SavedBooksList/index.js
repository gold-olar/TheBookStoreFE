
import React from "react";
import getBooksToRender from './helper';


const BookReviewForm = ({ books, title, deleteBook, }) => {
  const booksToRender = getBooksToRender(books, title);
//   useEffect(() => {
    
//       fetchAllSavedBooks(token);
  
// },[token])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 card p-3 pb-5 savee">
            <h3 className="pt-3 pb-3"> {title} </h3>
            {booksToRender && (
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Link</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {booksToRender.map((book, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{book.title}</td>
                      <td>
                        {" "}
                        <a href={book.link} >
                          <button 
                          className="btn btn-primary">
                            View Book
                          </button>
                        </a>{" "}
                      </td>
                      <td>
                        <button 
                        onClick={() => deleteBook(book._id)}
                        className="btn btn-outline-danger">
                          Delete Book
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {booksToRender.length === 0 && <h3 className="text-center"> You do not have any "{title} " yet. </h3>}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookReviewForm;
