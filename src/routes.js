import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import TestFunction from './modules';
import Home from './modules/Home';
import Navbar from './components/Navbar';
const Routes = () => (
<Router>
    <Navbar />
    <Switch>
        <Route path="/" component = {Home}  exact/>
        <Route path="/user/:id" component={TestFunction} />
    </Switch>
</Router>
)

export default Routes;