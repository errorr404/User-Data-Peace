import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/userActions';
import { updateCurrentPage } from '../../actions/paginationAction';
import Table from '../../components/Table';
import Pagination from '../../components/Pagination';
import './home.scss';
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
    let { users, currentPage } = this.props;
    const totalUser = users.length;
    users = users.slice((currentPage - 1) * 5, (currentPage - 1) * 5 + 5);
    console.log(users);
    return (
      <div className="home">
        <div>Search</div>
        <div style={{ maxWidth: '100vw' }}>
          <Table
            headers={Object.keys(users.length > 0 && users[0])}
            rowData={users}
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
    users: state.users,
    currentPage: state.currentPage
  };
};
export default connect(mapStateToProps, { fetchUsers, updateCurrentPage })(
  Home
);
