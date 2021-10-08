import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

var mapStateToProps = (reduxStoreData) => ({});

var mapDispatchToProps = (dispatch) => ({
  handleSearchInputChange: (q) => {
    dispatch(handleSearchChange(q));
  }
});

var SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;