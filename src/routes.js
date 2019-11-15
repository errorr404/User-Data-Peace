import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './modules/Home';
import Navbar from './components/Navbar';
import UserDetails from './modules/UserDetails';
const Routes = () => (
<Router>
    <Navbar />
    <div className="padding">
    <Switch>
        <Route path="/" component = {Home}  exact/>
        <Route path="/user/:id" component={UserDetails} />
    </Switch>
    </div>
</Router>
)

export default Routes;