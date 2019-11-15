import React from 'react';
import { withRouter } from 'react-router-dom';
import './userDetails.scss';

const UserDetails = (props) => {
  const userData = { ...props.location.state };
  const hideData = ['first_name', 'last_name', 'id'];
  return (
    <div className="userDetails">
      <span className="userDetails__userName">{`${userData.first_name} ${userData.last_name}`}</span>
      <div className="userDetails__detailsWrapper">
        {Object.keys(userData).map(
          (userKey) =>
            hideData.indexOf(userKey) === -1 && (
              <div className="userDetails__detailsWrapper__item">
                <span className="userDetails__detailsWrapper__item__itemName">{userKey.split('_').join(" ")}</span>
                <span className="userDetails__detailsWrapper__item__itemName">{userData[userKey]}</span>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default withRouter(UserDetails);
