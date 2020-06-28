import {all} from 'redux-saga/effects';
import { watchGeolocation } from './app';
import { watchAutocomplete, watchFiveDaysWeather, watchFCMode } from './home';

export default function* rootSaga() {
	yield all([
		watchAutocomplete(),
		watchFiveDaysWeather(),
		watchFCMode(),
		watchGeolocation()
	]);
}