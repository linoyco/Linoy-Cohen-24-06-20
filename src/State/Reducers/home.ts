import produce from 'immer';
import { homeActionType, SEARCHING_BY, SAVE_AUTOCOMPLETE_LIST, SAVE_FIVE_DAYS } from '../Actions/Home/types';
import { IAutocompleteOBJ, IFiveDaysWeatherOBJ } from '../../Api/apiObjects';

export interface IHomeState {
    searchingBy: string,
    autocompleteList: Array<IAutocompleteOBJ>,
    fiveDaysWeather: IFiveDaysWeatherOBJ,
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
        }
    });
}