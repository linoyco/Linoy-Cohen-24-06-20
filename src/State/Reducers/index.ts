import {combineReducers} from 'redux';

import { appReducer } from './app';
import { homeReducer } from './home';

export const rootReducer = () => combineReducers({
	app: appReducer,
	home: homeReducer
});