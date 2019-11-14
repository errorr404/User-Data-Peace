import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = (props) => {
  const { xyz } = props;
  return (
    <div>
      <div>
        <FontAwesomeIcon icon="bars" />
      </div>
      <span>Data Peace</span>
    </div>
  );
};

export default Navbar;
