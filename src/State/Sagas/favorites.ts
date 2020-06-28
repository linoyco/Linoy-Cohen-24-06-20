import { take, call, put } from 'redux-saga/effects';
import * as Api from '../../Api';
import { SAVE_TO_FAVORITES_LIST, SEND_TO_FAVORITES_CLICKED } from '../Actions/Favorites/types';
import { SET_ERROR_MESSAGE } from '../Actions/App/types';
import { IFavoritesDetails } from '../../Containers/FavoritesPage';

function* fetchCurrentWeather(city: string, locationKey: string) {
    try {
        yield put({ type: SET_ERROR_MESSAGE, errorMessage: '' });


        const res = yield call(Api.currentWeatherRequest, locationKey);

        const oneFavorite: IFavoritesDetails = {
            city: city,
            locationKey: locationKey,
            iconName: res.data[0].WeatherText,
            imageNumber: res.data[0].WeatherIcon,
            tempFC: res.data[0].Temperature.Metric.Value
        }
        yield put({ type: SAVE_TO_FAVORITES_LIST, oneFavorite: oneFavorite });
    }
    catch (error) {
        yield put({ type: SET_ERROR_MESSAGE, errorMessage: error.message });
    }
};

export function* watchCurrentWeather() {
    while (true) {
        const { city, locationKey } = yield take(SEND_TO_FAVORITES_CLICKED);
        yield call(fetchCurrentWeather, city, locationKey);
    }
};