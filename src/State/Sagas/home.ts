import { put, take, call } from 'redux-saga/effects';
import { SEARCHING_BY } from '../Actions/Home/types';
import * as Api from '../../Api';

function* fetchAutocomplete(searchingBy: string) {
    try {
        // const res = yield call(Api.autocompleteRequest, searchingBy);
        // console.log('THE RESPONSE: ', res.data);
    }
    catch (error) {
        console.log(error);
    }
};

export function* watchSearchingBy() {
    while (true) {
        const { searchingBy } = yield take(SEARCHING_BY);
        console.log('SEARCH BY: ', searchingBy);

        yield call(fetchAutocomplete, searchingBy);
    }
};