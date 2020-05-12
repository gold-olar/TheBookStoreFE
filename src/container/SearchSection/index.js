import React, { useState , useEffect} from "react";
import Search from "../../components/SearchBooksForm";
import SearchResults from "../../components/SearchResults";
import { connect } from 'react-redux';
import { fetchBooks, clearResults } from '../../Actions/searchActions';

const SearchSection = (props) => {
  const [searchText, setSearchText] = useState();

  useEffect(() => {
    searchText && props.fetchBooks(searchText);
  }, [searchText]);

  return (
    <>
      <Search setSearchText={setSearchText} />
      <SearchResults clearResults={props.clearResults} loading={props.loading} data={props.searchResults} />
    </>
  );
};

const mapStateToProps = ({searchResults, apiCallsInProgress}) => {
    return {
        searchResults,
        loading: apiCallsInProgress > 0 ? true : false,
    }
    
}

const mapDispatchToProps = {
    fetchBooks,
    clearResults,
}

export default  connect(mapStateToProps, mapDispatchToProps)(SearchSection);
