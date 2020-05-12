import React , { useState, useEffect } from 'react';
import NewRecentCard from '../NewRecentCards';
const RecomendedBooks = ({books}) => {
  const [beginSlice, setBeginSlice] = useState();

  useEffect(() => {
    setBeginSlice(Math.floor(Math.random() * books?.length));
  }, [books]);
    
    return (  
        <>
         <div className="">
              <div className="">
                <div className="section_title text-center mb-100">
                  <h2> Recomended Books  </h2>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {
                  books?.slice(beginSlice, beginSlice + 6).map(book => (
                    <NewRecentCard
                       title={book.volumeInfo.title}
                        imageUrl={book.volumeInfo.imageLinks.thumbnail}
                        link={`/books/${books.length}/recomended/${book.id}`}
                        published={book.volumeInfo.publishedDate}
                        pages={book.volumeInfo.pageCount}
                        key={book.volumeInfo.title}
                        id={book.id}
                    />

                  ))
                }
              </div>
            </div>
        </>
    );
}
 
export default RecomendedBooks;