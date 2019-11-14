import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import {fetchUsers} from '../../actions/userActions';
const Home = (props) => {

    useEffect(() =>{
       props.fetchUsers();
    },[props])

    return (
        <div>
            <div>Search</div>
            <div>Table</div>
            <div>pagination</div>
        </div>
    )
}
export default connect(null,{fetchUsers})(Home);