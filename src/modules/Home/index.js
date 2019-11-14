import React from 'react';
import { connect } from 'react-redux';
import {fetchUsers} from '../../actions/userActions';
import Table from '../../components/Table';
class Home extends React.Component {

    componentDidMount() {
        this.props.fetchUsers();
    }
    render(){
    const {users} = this.props;
    return (
        <div>
            <div>Search</div>
            <div>Table</div>
            <div>pagination</div>
            <div style={{maxWidth:"100vw"}}>

            <Table headers={Object.keys(users.length>0 && users[0])} rowData={users}/>
            </div>
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