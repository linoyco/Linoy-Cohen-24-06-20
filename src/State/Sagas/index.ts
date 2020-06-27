import {all} from 'redux-saga/effects';
import { watchFetchWeather } from './app';
import { watchAutocomplete } from './home';

export default function* rootSaga() {
	yield all([
		watchFetchWeather(),
		watchAutocomplete()
	]);
}