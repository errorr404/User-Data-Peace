import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/userActions';
import { updateCurrentPage } from '../../actions/paginationAction';
import Table from '../../components/Table';
import Pagination from '../../components/Pagination';
import './home.scss';
import Search from '../../components/Search';
class Home extends React.Component {
  componentDidMount() {
    if (this.props.users.length > 0) return;
    this.props.fetchUsers();
  }
  updateCurrentPage = (updatePageBy) => {
    let { currentPage } = this.props;

    this.props.updateCurrentPage(currentPage + updatePageBy);
  };
  render() {
    const { users, currentPage, searchedUsers } = this.props;
    const showUserResult = searchedUsers.length>0 ? searchedUsers : users;
    const totalUser = showUserResult.length;
    const slicedUser = showUserResult.slice((currentPage - 1) * 5, (currentPage - 1) * 5 + 5);
    console.log(slicedUser);
    return (
      <div className="home">
        <div>
        <Search />
        <span>
            {
               `${ (currentPage - 1) * 5+1 } - ${ totalUser>5 ?(currentPage - 1) * 5 + 5 : totalUser   } of ${totalUser}`
            }
        </span>
        </div>
        <div style={{ maxWidth: '100vw' }}>
          <Table
            headers={Object.keys(slicedUser.length > 0 && slicedUser[0])}
            rowData={slicedUser}
          />
        </div>
        <div className="home__navigation">
          <button
            className="home__navigation__button"
            onClick={() => this.updateCurrentPage(-1)}
          >
            Previous
          </button>
          <button
            className="home__navigation__button"
            onClick={() => this.updateCurrentPage(1)}
          >
            Next
          </button>
        </div>
        <Pagination totalItems={totalUser} itemsPerPage={5} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state.users.allUsers,
    currentPage: state.currentPage,
    searchedUsers:state.users.searchedUsers,
  };
};
export default connect(mapStateToProps, { fetchUsers, updateCurrentPage })(
  Home
);
