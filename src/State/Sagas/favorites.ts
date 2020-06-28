import { take, call, put } from 'redux-saga/effects';
import * as Api from '../../Api';
import { FETCH_CURRENT_WEATHER, SAVE_FAVORITES_LIST } from '../Actions/Favorites/types';
import { SET_ERROR_MESSAGE } from '../Actions/App/types';
import { IFavoritesDetails } from '../../Containers/FavoritesPage';

function* fetchCurrentWeather(favoritesDetailsList: Array<IFavoritesDetails>) {
    try {
        yield put({ type: SET_ERROR_MESSAGE, errorMessage: '' });

        for (let value of favoritesDetailsList) {
            if (value.locationKey !== '') {
                const res = yield call(Api.currentWeatherRequest, value.locationKey);
                value.iconName = res.data[0].WeatherText;
                value.imageNumber = res.data[0].WeatherIcon;
                value.tempFC = res.data[0].Temperature.Metric.Value;
            }
        }
        yield put({ type: SAVE_FAVORITES_LIST, favoritesDetailsList: favoritesDetailsList });
    }
    catch (error) {
        yield put({ type: SET_ERROR_MESSAGE, errorMessage: error.message });
    }
};

export function* watchCurrentWeather() {
    while (true) {
        const { favoritesDetailsList } = yield take(FETCH_CURRENT_WEATHER);
        // const key = '215854';
        yield call(fetchCurrentWeather, favoritesDetailsList);
    }
};