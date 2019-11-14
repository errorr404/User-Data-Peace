import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { updateCurrentPage } from '../../actions/paginationAction';
import './pagination.scss';

const Pagination = (props) => {
  const { totalItems } = props;
  const [startingPageNumber, setStartingPageNumber] = useState(1);
  const [endingPageNumber, setEndingPageNumber] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  const setCurrentPageNumber = (number) => {
    props.updateCurrentPage(number);
    setCurrentPage(number);
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
      if (i > totalItems) break;
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
export default connect(null, { updateCurrentPage })(Pagination);
