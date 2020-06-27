import { put, take, call } from 'redux-saga/effects';
import { SEARCHING_BY, SAVE_AUTOCOMPLETE_LIST } from '../Actions/Home/types';
import * as Api from '../../Api';

function* fetchAutocomplete(searchingBy: string) {
    try {
        const res = yield call(Api.autocompleteRequest, searchingBy);
        console.log('THE RESPONSE: ', res.data);
        yield put({ type: SAVE_AUTOCOMPLETE_LIST, autocompleteList: res.data });
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