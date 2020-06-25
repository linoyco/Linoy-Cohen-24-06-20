import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import FavoritesPage from './FavoritesPage';

const HOME = '/';
const FAVORITES = '/favorites';

const AppRoutes: React.FunctionComponent = () => (
    <Router>
        <Switch>
            <Route exact path={HOME} component={HomePage} />
            <Route path={FAVORITES} component={FavoritesPage} />
        </Switch>
    </Router>
);

export default AppRoutes;
