import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { updateCurrentPage } from '../../actions/paginationAction';
import './pagination.scss';

const Pagination = (props) => {
  const { totalItems, currentPage } = props;
  const startingPage = currentPage>9 ? currentPage-currentPage%9 : currentPage;
  console.log(startingPage);
  const [startingPageNumber, setStartingPageNumber] = useState(startingPage);
  const [endingPageNumber, setEndingPageNumber] = useState(startingPage+8);

  const setCurrentPageNumber = (number) => {
    props.updateCurrentPage(number);
  };
  const updateBackButtonRange = () => {
    setCurrentPageNumber(startingPageNumber - 9);
    setStartingPageNumber(startingPageNumber - 9);
    setEndingPageNumber(endingPageNumber - 9);
  };
  const updateForwardButtonRange = () => {
    setCurrentPageNumber(startingPageNumber + 9);
    setStartingPageNumber(startingPageNumber + 9);
    setEndingPageNumber(endingPageNumber + 9);
  };

  const renderBackButton = () => (
    <button
      className="pagination__button"
      onClick={updateBackButtonRange}
      disabled={currentPage <= 9}
    >
      <FontAwesomeIcon icon="angle-double-left" />
    </button>
  );
  const renderForwardButton = () => (
    <button
      className="pagination__button"
      onClick={updateForwardButtonRange}
      disabled={totalItems - currentPage < 9}
    >
      <FontAwesomeIcon icon="angle-double-right" />
    </button>
  );
  const renderPageNumbers = () => {
    let arr = [];
    for (let i = startingPageNumber; i <= endingPageNumber; i++) {
      if (i > totalItems/5) break;
      arr.push(i);
    }
    return arr.map((number) => (
      <button
        className={`pagination__button ${
          currentPage === number ? 'pagination__button__active' : ''
        }`}
        onClick={() => setCurrentPageNumber(number)}
      >
        {number}
      </button>
    ));
  };
  return (
    <div className="pagination">
      {renderBackButton()}
      {renderPageNumbers()}
      {renderForwardButton()}
    </div>
  );
};
const mapStateToProps = (state) => {
    return{
        currentPage: state.currentPage,
    }
}

export default connect(mapStateToProps, { updateCurrentPage })(Pagination);
