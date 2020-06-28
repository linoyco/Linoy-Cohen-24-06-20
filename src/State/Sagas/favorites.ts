import { take, call, put } from 'redux-saga/effects';
import * as Api from '../../Api';
import { FETCH_CURRENT_WEATHER } from '../Actions/Favorites/types';
import { SET_ERROR_MESSAGE } from '../Actions/App/types';

function* fetchCurrentWeather(key: string) {
    try {
        yield put({ type: SET_ERROR_MESSAGE, errorMessage: '' });

        // const res = yield call(Api.currentWeatherRequest, key);
        // console.log(res.data);

        // yield put({ type: SAVE_GEOLOCATION, geolocationKey: res.data });
    }
    catch (error) {
        yield put({ type: SET_ERROR_MESSAGE, errorMessage: error.message });
    }
};

export function* watchCurrentWeather() {
    while (true) {
        yield take(FETCH_CURRENT_WEATHER);
        const key = '215854';
        yield call(fetchCurrentWeather, key);
    }
};