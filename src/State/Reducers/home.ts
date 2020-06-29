import produce from 'immer';

import { homeActionType, SEARCHING_BY, SAVE_AUTOCOMPLETE_LIST, SAVE_FIVE_DAYS, SET_TEMP_MODE, SET_IS_FAVORITE } from '../Actions/Home/types';
import { IAutocompleteOBJ, IFiveDaysWeatherOBJ } from '../../Api/apiObjects';

export interface IHomeState {
    searchingBy: string,
    autocompleteList: Array<IAutocompleteOBJ>,
    fiveDaysWeather: IFiveDaysWeatherOBJ,
    fCMode: boolean;
    isFavorite: boolean;
}

const initialState: IHomeState = {
    searchingBy: '',
    autocompleteList: [],
    fiveDaysWeather: {
        Headline: {
            EffectiveDate: '',
            EffectiveEpochDate: 0,
            Severity: 0,
            Text: '',
            Category: '',
            EndDate: null,
            EndEpochDate: null,
            MobileLink: '',
            Link: ''
        }, DailyForecasts: []
    },
    fCMode: true,
    isFavorite: false
}

export function homeReducer(state: IHomeState = initialState, action: homeActionType) {
    return produce(state, draft => {
        switch (action.type) {
            case SEARCHING_BY:
                draft.searchingBy = action.searchingBy;
                break;
            case SAVE_AUTOCOMPLETE_LIST:
                draft.autocompleteList = action.autocompleteList;
                break;
            case SAVE_FIVE_DAYS:
                draft.fiveDaysWeather = action.fiveDaysWeather;
                break;
            case SET_TEMP_MODE:
                draft.fCMode = action.fCMode;
                break;
            case SET_IS_FAVORITE:
                draft.isFavorite = action.isFavorite;
                break;
        }
    });
}