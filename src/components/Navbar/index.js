import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';
import './navbar.scss';

const Navbar = (props) => {
  const { match } = props;
  const showBackArrow = match.url.includes('user');

  const handleIconClick = () => {
    if (showBackArrow) props.history.push('/');
  };
  return (
    <div className="navbar">
      <div>
        <FontAwesomeIcon
          icon={showBackArrow ? 'arrow-left' : 'bars'}
          className="navbar__icon"
          onClick={handleIconClick}
        />
      </div>
      <span className="navbar__text">Data Peace</span>
    </div>
  );
};

export default withRouter(Navbar);
