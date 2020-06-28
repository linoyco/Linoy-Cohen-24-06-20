export const SET_LOCATION = 'SET_LOCATION';
export const CHANGE_MODE = 'CHANGE_MODE';

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

export type appActionType = ISetLocation
    | IChangeMode;