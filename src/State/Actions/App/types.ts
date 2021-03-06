import { IGeolocationKeyOBJ } from '../../../Api/apiObjects';

export const SET_LOCATION = 'SET_LOCATION';
export const CHANGE_MODE = 'CHANGE_MODE';
export const CURRENT_GEOLOCATION = 'CURRENT_GEOLOCATION';
export const SAVE_GEOLOCATION = 'SAVE_GEOLOCATION';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

export interface ISetLocation {
    type: typeof SET_LOCATION;
    locationDetails: {
        locationKey: string,
        locationName: string
    }
}

export interface IChangeMode {
    type: typeof CHANGE_MODE;
    mode: string;
}

export interface ICurrentGeolocation {
    type: typeof CURRENT_GEOLOCATION;
    lat: number;
    lon: number;
}

export interface ISaveGeolocation {
    type: typeof SAVE_GEOLOCATION;
    geolocationKey: IGeolocationKeyOBJ;
}

export interface ISetErrorMessage {
    type: typeof SET_ERROR_MESSAGE;
    errorMessage: string;
}

export type appActionType = ISetLocation
    | IChangeMode
    | ICurrentGeolocation
    | ISaveGeolocation
    | ISetErrorMessage;