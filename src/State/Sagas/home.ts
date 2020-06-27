import { put, take, call } from 'redux-saga/effects';
import { SEARCHING_BY, SAVE_AUTOCOMPLETE_LIST, FIVE_DAYS_REQUEST, SAVE_FIVE_DAYS, CHANGE_TEMP_MODE, SET_TEMP_MODE } from '../Actions/Home/types';
import * as Api from '../../Api';

function* fetchAutocomplete(searchingBy: string) {
    try {
        // const res = yield call(Api.autocompleteRequest, searchingBy);
        // yield put({ type: SAVE_AUTOCOMPLETE_LIST, autocompleteList: res.data });
    }
    catch (error) {
        console.log(error);
    }
};

export function* watchAutocomplete() {
    while (true) {
        const { searchingBy } = yield take(SEARCHING_BY);
        yield call(fetchAutocomplete, searchingBy);
    }
};

function* fetchFiveDaysWeather(locationKey: string, fCMode: boolean) {
    try {
        const res = yield call(Api.fiveDaysRequest, locationKey, fCMode);
        yield put({ type: SAVE_FIVE_DAYS, fiveDaysWeather: res.data });
    }
    catch (error) {
        console.log(error.message);
    }
};

export function* watchFiveDaysWeather() {
    while (true) {
        const { locationKey, fCMode } = yield take(FIVE_DAYS_REQUEST);
        yield call(fetchFiveDaysWeather, locationKey, fCMode);
    }
};

export function* watchFCMode() {
    while (true) {
        const { locationKey, fCMode } = yield take(CHANGE_TEMP_MODE);

        const res = yield call(Api.fiveDaysRequest, locationKey, fCMode);
        yield put({ type: SAVE_FIVE_DAYS, fiveDaysWeather: res.data });

        yield put({ type: SET_TEMP_MODE, fCMode: fCMode });
    }
};