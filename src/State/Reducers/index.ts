import {combineReducers} from 'redux';

import { appReducer } from './app';
import { homeReducer } from './home';
import { favoritesReducer } from './favorites';

export const rootReducer = () => combineReducers({
	app: appReducer,
	home: homeReducer,
	favorites: favoritesReducer
});