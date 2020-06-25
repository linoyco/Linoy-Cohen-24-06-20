export const SET_LOCATION = 'SET_LOCATION';

export interface ISetLocation {
    type: typeof SET_LOCATION;
    location: string;
}

export type appActionType = ISetLocation ;