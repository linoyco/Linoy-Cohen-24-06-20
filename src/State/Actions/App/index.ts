import * as AppActions from './types';

export function setLocation(location: string): AppActions.ISetLocation {
    return {
        type: AppActions.SET_LOCATION,
        location: location
    }
}