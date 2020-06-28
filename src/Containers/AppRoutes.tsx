import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import * as Routes from "../Lib/Routes";
import HomePage from './HomePage';
import FavoritesPage from './FavoritesPage';
import HeaderBar from './HeaderBar';

const AppRoutes: React.FunctionComponent = () => (
    <Router>
        <HeaderBar />
        <Switch>
            <Route exact path={Routes.HOME} component={HomePage} />
            <Route path={Routes.FAVORITES} component={FavoritesPage} />
        </Switch>
    </Router>
);

export default AppRoutes;
