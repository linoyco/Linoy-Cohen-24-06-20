import { take, call, put } from 'redux-saga/effects';
import { CURRENT_GEOLOCATION, SAVE_GEOLOCATION, SET_ERROR_MESSAGE } from '../Actions/App/types';
import * as Api from '../../Api';

function* fetchGeolocation(lat: number, lon: number) {
    try {
        yield put({ type: SET_ERROR_MESSAGE, errorMessage: '' });

        const res = yield call(Api.geolocationRequest, lat, lon);
        yield put({ type: SAVE_GEOLOCATION, geolocationKey: res.data });
    }
    catch (error) {
        yield put({ type: SET_ERROR_MESSAGE, errorMessage: error.message });
    }
};

export function* watchGeolocation() {
    while (true) {
        const { lat, lon } = yield take(CURRENT_GEOLOCATION);
        yield call(fetchGeolocation, lat, lon);
    }
};