import {all} from 'redux-saga/effects';
import { watchFetchWeather } from './app';
import { watchAutocomplete, watchFiveDaysWeather, watchFCMode } from './home';

export default function* rootSaga() {
	yield all([
		watchFetchWeather(),
		watchAutocomplete(),
		watchFiveDaysWeather(),
		watchFCMode()
	]);
}