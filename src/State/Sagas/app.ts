import { take, call, put } from "redux-saga/effects";
import { CURRENT_GEOLOCATION, SAVE_GEOLOCATION } from "../Actions/App/types";
import * as Api from '../../Api';
import { FIVE_DAYS_REQUEST } from "../Actions/Home/types";

function* fetchGeolocation(lat: number, lon: number) {
    try {
        const res = yield call(Api.geolocationRequest, lat, lon);
        yield put({ type: SAVE_GEOLOCATION, geolocationKey: res.data });
    }
    catch (error) {
        console.log(error.message);
    }
};

export function* watchGeolocation() {
    while (true) {
        const { lat, lon } = yield take(CURRENT_GEOLOCATION);
        yield call(fetchGeolocation, lat, lon);
    }
};