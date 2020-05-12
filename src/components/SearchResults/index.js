import React from "react";
import NewRecentCard from "../NewRecentCards";
import Loader from '../Loader';

const SearchResults = ({ data, loading, clearResults }) => {
  return (
    <>
      {data && data.length > 0 && (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <button onClick={() => clearResults()} className=" btn btn-outline-primary float-right"> Close Search </button>
              <h3 className="text-center"> Top Search Results</h3>
            </div>

            <>
              {data.map((book) => (
                <NewRecentCard
                  title={book.volumeInfo.title}
                  imageUrl={book.volumeInfo.imageLinks.thumbnail}
                  link={`/search/books/${book.id}`}
                  published={book.volumeInfo.publishedDate}
                  pages={book.volumeInfo.pageCount}
                  key={book.volumeInfo.title}
                  id={book.id}
                />
              ))}
            </>
          </div>
        </div>
      )}
      {loading &&  <Loader/> }
    </>
  );
};

export default SearchResults;
