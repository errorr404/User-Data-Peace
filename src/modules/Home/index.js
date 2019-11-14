import React from 'react';
import { connect } from 'react-redux';
import {fetchUsers} from '../../actions/userActions';
import Table from '../../components/Table';
import Pagination from '../../components/Pagination';
class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            users:[],
        }
    }

    componentDidMount() {
        if(this.props.users.length>0) return;
        this.props.fetchUsers();
    }
    render(){
    let {users} = this.props;
    const totalUser = users.length;
     users = users.slice(0,5);
    return (
        <div>
            <div>Search</div>
            <div style={{maxWidth:"100vw"}}>
            <Table headers={Object.keys(users.length>0 && users[0])} rowData={users}/>
            </div>
            <Pagination totalItems = {totalUser} itemsPerPage = {5}/>
        </div>
    )
}
}
const mapStateToProps = (state) => {
    console.log(state);
    return{
        users:state.users
    }
}
export default connect(mapStateToProps,{fetchUsers})(Home);