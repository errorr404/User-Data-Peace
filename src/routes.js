import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import TestFunction from './modules';
const Routes = () => (
<Router>
    <Switch>
        <Route path="/" component = {TestFunction} />
    </Switch>
</Router>
)

export default Routes;