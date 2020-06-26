import {all} from 'redux-saga/effects';
import { watchFetchWeather } from './app';
import { watchSearchingBy } from './home';

export default function* rootSaga() {
	yield all([
		watchFetchWeather(),
		watchSearchingBy()
	]);
}