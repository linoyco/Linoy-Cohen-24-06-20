import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import FavoritesPage from './FavoritesPage';
import HeaderBar from '../Components/HeaderBar';

const HOME = '/';
const FAVORITES = '/favorites';

const AppHeader = (props: any) => {
    return (<HeaderBar>{props.children}</HeaderBar>);
};

const AppRoutes: React.FunctionComponent = () => (
    <Router>
        <Switch>
            <AppHeader>
                <Route exact path={HOME} component={HomePage} />
                <Route path={FAVORITES} component={FavoritesPage} />
            </AppHeader>
        </Switch>
    </Router>
);

export default AppRoutes;
