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

export function currentGeolocation(lat: number, lon: number): AppActions.ICurrentGeolocation {
    return {
        type: AppActions.CURRENT_GEOLOCATION,
        lat: lat,
        lon: lon
    }
}