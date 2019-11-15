import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchUsers } from '../../actions/userActions';
import './search.scss';
const Search = (props) => {
  const [value, setValue] = useState('');
  const handleInput = (e) => {
    setValue(e.target.value);
    props.searchUsers(e.target.value);
  };
  return (
      <input onChange={handleInput} placeholder="search by first name" className="search"/>
  );
};
export default connect(null, { searchUsers })(Search);
