import * as AppActions from './types';

export function setLocation(locationKey: string, locationName: string): AppActions.ISetLocation {
    return {
        type: AppActions.SET_LOCATION,
        locationDetails: {
            locationKey: locationKey,
            locationName: locationName
        }
    }
}

export function changeModeStyle(mode: string): AppActions.IChangeMode {
    return {
        type: AppActions.CHANGE_MODE,
        mode: mode
    }
}