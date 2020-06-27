import { IAutocompleteOBJ, IFiveDaysWeatherOBJ } from '../../../Api/apiObjects';

export const SEARCHING_BY = 'SEARCHING_BY';
export const SAVE_AUTOCOMPLETE_LIST = 'SAVE_AUTOCOMPLETE_LIST';
export const FIVE_DAYS_REQUEST = 'FIVE_DAYS_REQUEST';
export const SAVE_FIVE_DAYS = 'SAVE_FIVE_DAYS';
export const CHANGE_TEMP_MODE = 'CHANGE_TEMP_MODE';
export const SET_TEMP_MODE = 'SET_TEMP_MODE';

export interface ISearchingBy {
    type: typeof SEARCHING_BY;
    searchingBy: string;
}

export interface ISaveAutocompleteList {
    type: typeof SAVE_AUTOCOMPLETE_LIST;
    autocompleteList: Array<IAutocompleteOBJ>;
}

export interface IFiveDaysRequest {
    type: typeof FIVE_DAYS_REQUEST;
    locationKey: string;
    fCMode: boolean;
}

export interface ISaveFiveDays {
    type: typeof SAVE_FIVE_DAYS;
    fiveDaysWeather: IFiveDaysWeatherOBJ;
}

export interface IChangeTempMode {
    type: typeof CHANGE_TEMP_MODE;
    locationKey: string;
    fCMode: boolean;
}

export interface ISetTempMode {
    type: typeof SET_TEMP_MODE;
    fCMode: boolean;
}

export type homeActionType = ISearchingBy
    | ISaveAutocompleteList
    | IFiveDaysRequest
    | ISaveFiveDays
    | IChangeTempMode
    | ISetTempMode;