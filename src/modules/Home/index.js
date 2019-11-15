import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/userActions';
import { updateCurrentPage } from '../../actions/paginationAction';
import Table from '../../components/Table';
import Pagination from '../../components/Pagination';
import Search from '../../components/Search';
import Loader from '../../components/Loader';
import './home.scss';
class Home extends React.Component {
  componentDidMount() {
    if (this.props.users.length > 0) return;
    this.props.fetchUsers();
  }
  updateCurrentPage = (updatePageBy, totalUser) => {
    let { currentPage } = this.props;
    if (
      (currentPage === 1 && updatePageBy === -1) ||
      (currentPage === totalUser && updatePageBy === 1)
    )
      return;

    this.props.updateCurrentPage(currentPage + updatePageBy);
  };
  render() {
    const {
      users,
      currentPage,
      searchedUsers,
      loadingUsersStatus
    } = this.props;
    const showUserResult = searchedUsers.length > 0 ? searchedUsers : users;
    const totalUser = showUserResult.length;
    const slicedUser = showUserResult.slice(
      (currentPage - 1) * 5,
      (currentPage - 1) * 5 + 5
    );
    return (
      <div className="home">
        {loadingUsersStatus ? (
          <div className="home__loader">
            {' '}
            <Loader />{' '}
          </div>
        ) : (
          <React.Fragment>
            <div className="home__searchSection">
              <Search />
              <span>
                {`${(currentPage - 1) * 5 + 1} - ${
                  totalUser > 5 ? (currentPage - 1) * 5 + 5 : totalUser
                } of ${totalUser}`}
              </span>
            </div>
            <div className="home__tableWrapper">
              <Table
                headers={Object.keys(slicedUser.length > 0 && slicedUser[0])}
                rowData={slicedUser}
              />
            </div>
            <div className="home__navigation">
              <button
                className="home__navigation__button"
                onClick={() => this.updateCurrentPage(-1, totalUser)}
              >
                Previous
              </button>
              <button
                className="home__navigation__button"
                onClick={() => this.updateCurrentPage(1, totalUser)}
              >
                Next
              </button>
            </div>
            <Pagination totalItems={totalUser} itemsPerPage={5} />
          </React.Fragment>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.users.allUsers,
    currentPage: state.currentPage,
    searchedUsers: state.users.searchedUsers,
    loadingUsersStatus: state.users.loadingUsers
  };
};
export default connect(mapStateToProps, { fetchUsers, updateCurrentPage })(
  Home
);
